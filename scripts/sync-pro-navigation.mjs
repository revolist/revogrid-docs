import { writeFile, rename, rm } from 'node:fs/promises'
import { pathToFileURL } from 'node:url'

export function validateProNavigation(value) {
  if (value?.version !== 1 || !Array.isArray(value.items) || !value.items.length) {
    throw new Error('Expected a non-empty Pro navigation manifest (version 1).')
  }
  let count = 0
  function validate(items, depth = 0) {
    if (depth > 12) throw new Error('Pro navigation is nested too deeply.')
    for (const item of items) {
      if (++count > 5000 || !item || typeof item.label !== 'string' || !item.label.trim()) {
        throw new Error('Invalid Pro navigation label or item count.')
      }
      // VitePress renders sidebar labels as HTML. The manifest uses plain text only.
      if (/[<>]/.test(item.label)) throw new Error('Navigation labels must be plain text.')
      if (item.href !== undefined) {
        if (typeof item.href !== 'string') throw new Error('Invalid navigation URL.')
        const url = new URL(item.href, 'https://pro.rv-grid.com')
        if (url.origin !== 'https://pro.rv-grid.com' || url.username || url.password) {
          throw new Error('Navigation links must point to https://pro.rv-grid.com.')
        }
      }
      if (item.items !== undefined) {
        if (!Array.isArray(item.items) || !item.items.length)
          throw new Error('Invalid navigation group.')
        validate(item.items, depth + 1)
      } else if (!item.href) throw new Error('Navigation items need a link or children.')
    }
  }
  validate(value.items)
  return value
}

export async function syncProNavigation(
  source = 'https://pro.rv-grid.com/navigation.json',
  destination = new URL('../.vitepress/configs/sidebar/pro-navigation.json', import.meta.url),
) {
  const response = await fetch(source, { signal: AbortSignal.timeout(15000), redirect: 'error' })
  if (!response.ok) throw new Error(`Pro navigation request failed (${response.status}).`)
  const manifest = validateProNavigation(await response.json())
  const temporary = new URL(`${destination.href}.${process.pid}.tmp`)
  try {
    await writeFile(temporary, `${JSON.stringify(manifest, null, 2)}\n`, { flag: 'wx' })
    await rename(temporary, destination)
  } finally {
    await rm(temporary, { force: true })
  }
  return manifest
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await syncProNavigation(process.argv[2])
  console.log('Updated Pro sidebar navigation. Review and commit the snapshot.')
}
