import { execFileSync } from 'node:child_process'
import { copyFileSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import os from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const docsRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const require = createRequire(`${docsRoot}/package.json`)
const { chromium } = require('playwright')
const outDir = path.join(docsRoot, 'public', 'benchmarks')
mkdirSync(outDir, { recursive: true })
const rawVideoDir = mkdtempSync(path.join(os.tmpdir(), 'revogrid-benchmark-'))
const assetsOnly = process.argv.includes('--assets-only')

function command(commandName, args) {
  try {
    return execFileSync(commandName, args, { encoding: 'utf8' }).trim()
  } catch {
    return 'unknown'
  }
}

function median(values) {
  const sorted = [...values].sort((a, b) => a - b)
  return sorted[Math.floor(sorted.length / 2)]
}

function p95(values) {
  const sorted = [...values].sort((a, b) => a - b)
  return sorted[Math.min(sorted.length - 1, Math.ceil(sorted.length * 0.95) - 1)]
}

function roundNumber(value, digits = 2) {
  const factor = 10 ** digits
  return Math.round(value * factor) / factor
}

const scenarios = [
  { id: '1k', rowCount: 1_000, columnCount: 100 },
  { id: '10k', rowCount: 10_000, columnCount: 100 },
  { id: '100k', rowCount: 100_000, columnCount: 100 },
  { id: '1m', rowCount: 1_000_000, columnCount: 100 },
].filter(scenario => !assetsOnly || scenario.id === '100k')
const runCount = assetsOnly ? 1 : 5
const viewport = { width: 1440, height: 900 }
const browser = await chromium.launch({
  headless: true,
  args: ['--enable-precise-memory-info'],
})
const results = []

for (const { id, rowCount, columnCount } of scenarios) {
  const assetBase = id === '100k' ? 'revo-grid-benchmark' : `revo-grid-benchmark-${id}`
  const screenshot = `/benchmarks/${assetBase}.png`
  const videoAsset = `/benchmarks/${assetBase}.webm`
  const runs = []

  for (let run = 1; run <= runCount; run += 1) {
    const context = await browser.newContext({
      viewport,
      ...(run === 1
        ? { recordVideo: { dir: rawVideoDir, size: { width: 1280, height: 720 } } }
        : {}),
    })
    const page = await context.newPage()
    await page.goto('http://127.0.0.1:5173/benchmarks?automated=1', {
      waitUntil: 'domcontentloaded',
    })

    const result = await page.evaluate(
      async ({ rowCount, columnCount }) => {
        document.body.innerHTML = `
    <style>
      html, body { margin: 0; min-height: 100%; background: #eef2f8; }
      #bench-wrap { min-height: 100vh; padding: 36px; box-sizing: border-box; font-family: Arial, sans-serif; background: linear-gradient(135deg, #111827 0%, #1e3a5f 55%, #155e75 100%); }
      #bench-header { display: flex; align-items: center; justify-content: space-between; gap: 24px; min-height: 100px; color: #f8fafc; }
      .bench-title { display: flex; align-items: center; gap: 16px; font-size: 28px; font-weight: 700; letter-spacing: -0.04em; }
      .bench-mark { display: grid; width: 44px; height: 44px; place-items: center; border-radius: 13px; background: linear-gradient(135deg, #2dd4bf, #3b82f6); color: #062a35; font-size: 22px; font-weight: 900; box-shadow: 0 12px 28px rgba(45, 212, 191, .25); }
      .bench-subtitle { margin: 6px 0 0 60px; color: #cbd5e1; font-size: 14px; }
      .bench-workload { display: flex; gap: 9px; flex-wrap: wrap; justify-content: flex-end; }
      .bench-chip { padding: 8px 11px; border: 1px solid rgba(226, 232, 240, .22); border-radius: 999px; background: rgba(15, 23, 42, .32); color: #e2e8f0; font-size: 12px; font-weight: 600; }
      .bench-chip strong { color: #5eead4; }
      #bench-grid-surface { overflow: hidden; border: 1px solid rgba(148, 163, 184, .45); border-radius: 16px; background: #fff; box-shadow: 0 24px 60px rgba(2, 6, 23, .35); }
      revo-grid { width: 100%; height: 650px; display: block; }
      .bench-name { display: inline-flex; align-items: center; gap: 6px; font-weight: 600; }
      .bench-status { border-radius: 999px; padding: 2px 8px; font-size: 12px; background: #e0f2fe; color: #075985; }
      .bench-number { color: #166534; font-variant-numeric: tabular-nums; }
    </style>
    <div id="bench-wrap">
      <header id="bench-header">
        <div>
          <div class="bench-title"><span class="bench-mark">R</span>RevoGrid benchmark</div>
          <p class="bench-subtitle">Virtualized grid workload · local Chromium run</p>
        </div>
        <div class="bench-workload">
          <span class="bench-chip"><strong>${rowCount.toLocaleString()}</strong> rows</span>
          <span class="bench-chip"><strong>${columnCount.toLocaleString()}</strong> columns</span>
          <span class="bench-chip"><strong>${(rowCount * columnCount).toLocaleString()}</strong> logical cells</span>
        </div>
      </header>
      <div id="bench-grid-surface"><revo-grid id="grid" theme="compact" row-size="36" row-headers range resize hide-attribution></revo-grid></div>
    </div>
  `

        const mod = await import('/node_modules/@revolist/revogrid/standalone/index.js')
        mod.defineCustomElementRevoGrid()
        await customElements.whenDefined('revo-grid')

        const grid = document.querySelector('#grid')
        const preparationStart = performance.now()
        const columns = []
        for (let col = 0; col < columnCount; col += 1) {
          if (col === 0) {
            columns.push({
              name: 'Name',
              prop: 'name',
              size: 180,
              pin: 'colPinStart',
              cellTemplate: (h, props) =>
                h('span', { class: 'bench-name' }, [
                  h('span', { class: 'bench-status' }, props.model.active ? 'active' : 'idle'),
                  h('span', undefined, props.model.name),
                ]),
            })
          } else if (col === 1) {
            columns.push({
              name: 'Status',
              prop: 'status',
              size: 120,
              cellTemplate: (h, props) => h('span', { class: 'bench-status' }, props.model.status),
            })
          } else if (col < 10) {
            columns.push({
              name: `Metric ${col}`,
              prop: `metric_${col}`,
              size: 120,
              cellTemplate: (h, props) =>
                h('span', { class: 'bench-number' }, Number(props.model[props.prop]).toFixed(2)),
            })
          } else {
            columns.push({ name: `C${col}`, prop: `metric_${col}`, size: 110 })
          }
        }

        const statuses = ['new', 'active', 'review', 'done']
        const metricValues = {}
        for (let col = 1; col < columnCount; col += 1) {
          const prop = `metric_${col}`
          Object.defineProperty(metricValues, prop, {
            get() {
              const row = Number(this.row)
              return (((row + 1) * (col + 3)) % 10000) + col / 100
            },
            set(value) {
              Object.defineProperty(this, prop, {
                configurable: true,
                enumerable: true,
                value,
                writable: true,
              })
            },
          })
        }
        const source = Array.from({ length: rowCount }, (_, row) => {
          const item = Object.assign(Object.create(metricValues), {
            row,
            name: `Employee ${row}`,
            status: statuses[row % statuses.length],
            active: row % 3 !== 0,
          })
          return item
        })
        const dataPreparationMs = performance.now() - preparationStart

        await grid.componentOnReady()
        await new Promise(resolve => requestAnimationFrame(resolve))
        const initialStart = performance.now()
        const initialRender = new Promise((resolve, reject) => {
          const timeout = setTimeout(() => {
            observer.disconnect()
            reject(new Error('First data row did not render within 15 seconds'))
          }, 15_000)
          const observer = new MutationObserver(() => {
            if (!grid.textContent.includes('Employee 0')) return
            observer.disconnect()
            clearTimeout(timeout)
            requestAnimationFrame(() =>
              requestAnimationFrame(() => resolve(performance.now() - initialStart)),
            )
          })
          observer.observe(grid, { childList: true, characterData: true, subtree: true })
        })
        grid.columns = columns
        grid.source = source
        grid.rowSize = 36
        grid.range = true
        grid.resize = true
        grid.rowHeaders = true
        grid.hideAttribution = true

        const readHeap = () => (performance.memory ? performance.memory.usedJSHeapSize : null)
        const sampleHeap = async (count = 5, interval = 250) => {
          const samples = []
          for (let index = 0; index < count; index += 1) {
            if (globalThis.gc) {
              globalThis.gc()
            }
            samples.push(readHeap())
            await new Promise(resolve => setTimeout(resolve, interval))
          }
          return samples
        }

        const initialRenderTime = await initialRender
        const firstRowVisible = grid.textContent.includes('Employee 0')
        await new Promise(resolve => setTimeout(resolve, 1000))

        const heapAfterWarmupSamples = await sampleHeap()
        const scrollElement = grid.querySelector('revogr-viewport-scroll.rgCol .vertical-inner')
        if (!scrollElement) {
          throw new Error('Unable to locate vertical scroll element')
        }

        const scrollMetrics = await new Promise(resolve => {
          const duration = 3000
          const start = performance.now()
          let last = start
          let frames = 0
          let droppedFrames = 0
          function step(now) {
            frames += 1
            if (now - last > 20) droppedFrames += 1
            last = now
            const progress = Math.min(1, (now - start) / duration)
            scrollElement.scrollTop =
              progress * Math.min(scrollElement.scrollHeight - scrollElement.clientHeight, 140000)
            if (progress < 1) {
              requestAnimationFrame(step)
            } else {
              resolve({
                fps: frames / (duration / 1000),
                frames,
                droppedFrames,
              })
            }
          }
          requestAnimationFrame(step)
        })

        await new Promise(resolve => setTimeout(resolve, 500))
        const editSamples = []
        for (let i = 0; i < 30; i += 1) {
          const start = performance.now()
          await grid.setDataAt({ row: i, col: 1, val: 100_000 + i })
          editSamples.push(performance.now() - start)
        }

        const heapAfterInteractionSamples = await sampleHeap()
        const domNodeCount = document.querySelectorAll('*').length
        scrollElement.scrollTop = 0
        await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))

        return {
          dataPreparationMs,
          initialRenderTime,
          prepareAndPaintMs: dataPreparationMs + initialRenderTime,
          firstRowVisible,
          scrollFps: scrollMetrics.fps,
          scrollFrames: scrollMetrics.frames,
          droppedFrames: scrollMetrics.droppedFrames,
          heapAfterWarmupSamples,
          heapAfterInteractionSamples,
          editSamples,
          domNodeCount,
          renderedRows: grid.querySelectorAll('revogr-data .rgRow').length,
          renderedCells: grid.querySelectorAll('revogr-data [data-rgcol]').length,
        }
      },
      { rowCount, columnCount },
    )

    if (run === 1) {
      await page.screenshot({ path: path.join(outDir, `${assetBase}.png`), fullPage: true })
    }
    const video = page.video()
    await page.close()
    await context.close()
    if (video) {
      copyFileSync(await video.path(), path.join(outDir, `${assetBase}.webm`))
    }

    runs.push({
      run,
      metrics: {
        dataPreparationMs: result.dataPreparationMs,
        initialRenderMs: result.initialRenderTime,
        prepareAndPaintMs: result.prepareAndPaintMs,
        firstRowVisible: result.firstRowVisible,
        scrollingFpsDisplayCap: Math.min(60, result.scrollFps),
        rawHeadlessScrollFps: result.scrollFps,
        scrollFrames: result.scrollFrames,
        droppedFrames: result.droppedFrames,
        heapAfterWarmupBytes: median(result.heapAfterWarmupSamples.filter(Boolean)),
        heapAfterWarmupSamplesBytes: result.heapAfterWarmupSamples,
        heapAfterWarmupSamplesMiB: result.heapAfterWarmupSamples
          .filter(Boolean)
          .map(value => roundNumber(value / 1024 / 1024)),
        heapAfterInteractionBytes: median(result.heapAfterInteractionSamples.filter(Boolean)),
        heapAfterInteractionSamplesBytes: result.heapAfterInteractionSamples,
        heapAfterInteractionSamplesMiB: result.heapAfterInteractionSamples
          .filter(Boolean)
          .map(value => roundNumber(value / 1024 / 1024)),
        editLatencyMedianMs: median(result.editSamples),
        editLatencyP95Ms: p95(result.editSamples),
        domNodeCount: result.domNodeCount,
        renderedRows: result.renderedRows,
        renderedCells: result.renderedCells,
      },
    })
    console.log(
      `Completed ${rowCount.toLocaleString()} x ${columnCount.toLocaleString()}, run ${run}/${runCount}`,
    )
  }

  const metricKeys = [
    'dataPreparationMs',
    'initialRenderMs',
    'prepareAndPaintMs',
    'scrollingFpsDisplayCap',
    'rawHeadlessScrollFps',
    'scrollFrames',
    'droppedFrames',
    'heapAfterWarmupBytes',
    'heapAfterInteractionBytes',
    'editLatencyMedianMs',
    'editLatencyP95Ms',
    'domNodeCount',
    'renderedRows',
    'renderedCells',
  ]
  const statistics = Object.fromEntries(
    metricKeys.map(key => {
      const values = runs.map(({ metrics }) => metrics[key])
      return [
        key,
        {
          median: median(values),
          mean: values.reduce((sum, value) => sum + value, 0) / values.length,
          min: Math.min(...values),
          max: Math.max(...values),
        },
      ]
    }),
  )
  results.push({
    id,
    rowCount,
    columnCount,
    totalLogicalCells: rowCount * columnCount,
    rendererComplexity: `Mixed renderer harness: 1 pinned custom name cell with status badge, 1 custom status badge column, 8 custom formatted numeric columns, ${columnCount - 10} plain numeric columns.`,
    summaryMethod: 'median of five independent browser contexts',
    metrics: Object.fromEntries(metricKeys.map(key => [key, statistics[key].median])),
    statistics,
    runs,
    assets: { screenshot, video: videoAsset },
  })
}

const machine = {
  model: command('sysctl', ['-n', 'hw.model']),
  cpuBrand: command('sysctl', ['-n', 'machdep.cpu.brand_string']),
  cpuCount: command('sysctl', ['-n', 'hw.ncpu']),
  memoryBytes: command('sysctl', ['-n', 'hw.memsize']),
  os: `${command('sw_vers', ['-productName'])} ${command('sw_vers', ['-productVersion'])} (${command('sw_vers', ['-buildVersion'])})`,
  kernel: command('uname', ['-mrs']),
}

const output = {
  runDate: new Date().toISOString(),
  browser: `Chromium ${browser.version()}`,
  viewport,
  machine,
  runCount,
  results,
}
await browser.close()
rmSync(rawVideoDir, { recursive: true })

if (!assetsOnly) {
  writeFileSync(path.join(outDir, 'result.json'), `${JSON.stringify(output, null, 2)}\n`)
  console.log(JSON.stringify(output, null, 2))
}
