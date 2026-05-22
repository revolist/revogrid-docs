import { spawnSync } from 'node:child_process'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

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
