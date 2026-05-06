import { spawnSync } from 'node:child_process'
import { copyFileSync, existsSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const PAGES = {
  gantt: 'gantt.html',
  scheduler: 'scheduler.html',
  timelinegrid: 'timelinegrid.html',
  'ops-scheduler': 'ops-scheduler.html',
  jsscheduler: 'jsscheduler.html',
  pivot: 'pivot/index.html',
  pivotio: 'pivotio.html',
  vue: 'vue.html',
  angular: 'angular.html',
}

const target = process.argv[2] || process.env.DOCS_BUILD_PAGE

if (!target || !PAGES[target]) {
  console.error(`Usage: node ./scripts/build-page.mjs <${Object.keys(PAGES).join('|')}>`)
  process.exit(1)
}

function run(command, args) {
  const result = spawnSync(command, args, {
    stdio: 'inherit',
    env: {
      ...process.env,
      DOCS_BUILD_PAGE: target,
    },
  })

  if (result.status !== 0) {
    process.exit(result.status ?? 1)
  }
}

run('node', ['./scripts/update-policy-last-updated.mjs'])
run('vitepress', ['build'])

const distDir = join(process.cwd(), '.vitepress', 'dist')
const sourcePath = join(distDir, PAGES[target])
const indexPath = join(distDir, 'index.html')

if (!existsSync(sourcePath)) {
  console.error(`Built page not found: ${sourcePath}`)
  process.exit(1)
}

copyFileSync(sourcePath, indexPath)

const metadataPath = join(distDir, 'build-page.json')
writeFileSync(
  metadataPath,
  `${JSON.stringify({ target, source: PAGES[target], promotedTo: 'index.html' }, null, 2)}\n`,
  'utf8',
)

const pageTitle = readFileSync(indexPath, 'utf8').match(/<title>(.*?)<\/title>/)?.[1] ?? target
console.log(`Built ${target}: ${PAGES[target]} promoted to index.html (${pageTitle})`)
