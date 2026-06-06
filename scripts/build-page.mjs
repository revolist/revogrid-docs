import { spawnSync } from 'node:child_process'
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'

const PAGES = {
  gantt: 'gantt.md',
  scheduler: 'scheduler.md',
  timelinegrid: 'timelinegrid.md',
  'ops-scheduler': 'ops-scheduler.md',
  jsscheduler: 'jsscheduler.md',
  pivot: 'pivot/index.md',
  pivotio: 'pivotio.md',
  vue: 'vue.md',
  angular: 'angular.md',
  datagridjs: 'datagridjs.md',
}

const target = process.argv[2] || process.env.DOCS_BUILD_PAGE

if (!target || !PAGES[target]) {
  console.error(`Usage: node ./scripts/build-page.mjs <${Object.keys(PAGES).join('|')}>`)
  process.exit(1)
}

const rootDir = process.cwd()
const standaloneSrcDir = join(rootDir, '.vitepress', 'standalone-src')
const source = PAGES[target]

function copySupportDir(name) {
  const from = join(rootDir, name)
  const to = join(standaloneSrcDir, name)

  if (!existsSync(from)) {
    return
  }

  cpSync(from, to, {
    recursive: true,
    filter: sourcePath => !sourcePath.endsWith('.md'),
  })
}

function prepareStandaloneSource() {
  rmSync(standaloneSrcDir, { recursive: true, force: true })
  mkdirSync(standaloneSrcDir, { recursive: true })
  mkdirSync(join(standaloneSrcDir, '.vitepress'), { recursive: true })

  const sourcePath = join(rootDir, source)
  const sourceDir = dirname(source)
  let content = readFileSync(sourcePath, 'utf8')

  if (sourceDir !== '.') {
    content = content.replace(/from\s+(['"])\.\//g, `from $1./${sourceDir}/`)
  }

  writeFileSync(join(standaloneSrcDir, 'index.md'), content, 'utf8')
  cpSync(join(rootDir, '.vitepress', 'revogrid-pro-shim.ts'), join(standaloneSrcDir, '.vitepress', 'revogrid-pro-shim.ts'))
  cpSync(join(rootDir, '.vitepress', 'revogrid-enterprise-pivot-shim.ts'), join(standaloneSrcDir, '.vitepress', 'revogrid-enterprise-pivot-shim.ts'))

  copySupportDir('gantt')
  copySupportDir('pivot')
  copySupportDir('pricing-page')
  copySupportDir('pro')
  copySupportDir('public')
}

function run(command, args) {
  const result = spawnSync(command, args, {
    stdio: 'inherit',
    env: {
      ...process.env,
      DOCS_BUILD_PAGE: target,
      DOCS_STANDALONE_SRC_DIR: standaloneSrcDir,
    },
  })

  if (result.status !== 0) {
    process.exit(result.status ?? 1)
  }
}

function cleanupStandaloneDist(distDir) {
  rmSync(join(distDir, 'robots.txt'), { force: true })
  rmSync(join(distDir, 'sitemap.xml'), { force: true })
  rmSync(join(distDir, 'sitemap-index.xml'), { force: true })
}

try {
  prepareStandaloneSource()
  run('node', ['./scripts/update-policy-last-updated.mjs'])
  run('vitepress', ['build'])
} finally {
  rmSync(standaloneSrcDir, { recursive: true, force: true })
}

const distDir = join(rootDir, '.vitepress', 'dist')
cleanupStandaloneDist(distDir)

const indexPath = join(distDir, 'index.html')

if (!existsSync(indexPath)) {
  console.error(`Standalone index not found: ${indexPath}`)
  process.exit(1)
}

const metadataPath = join(distDir, 'build-page.json')
writeFileSync(
  metadataPath,
  `${JSON.stringify({ target, source: PAGES[target], route: '/' }, null, 2)}\n`,
  'utf8',
)

const pageTitle = readFileSync(indexPath, 'utf8').match(/<title>(.*?)<\/title>/)?.[1] ?? target
console.log(`Built ${target}: ${PAGES[target]} rendered as / (${pageTitle})`)
