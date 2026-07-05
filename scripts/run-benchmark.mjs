import { execFileSync } from 'node:child_process'
import { mkdirSync, writeFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const docsRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const require = createRequire(`${docsRoot}/package.json`)
const { chromium } = require('playwright')
const outDir = path.join(docsRoot, 'public', 'benchmarks')
mkdirSync(outDir, { recursive: true })

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

const rowCount = 100000
const columnCount = 100
const viewport = { width: 1440, height: 900 }
const browser = await chromium.launch({
    headless: true,
    args: ['--enable-precise-memory-info'],
})
const context = await browser.newContext({
    viewport,
    recordVideo: {
        dir: path.join(outDir, 'video-raw'),
        size: { width: 1280, height: 720 },
    },
})
const page = await context.newPage()
await page.goto('http://127.0.0.1:5173/benchmarks', { waitUntil: 'domcontentloaded' })

const result = await page.evaluate(async ({ rowCount, columnCount }) => {
    document.body.innerHTML = `
    <style>
      html, body { margin: 0; padding: 0; width: 100%; height: 100%; background: #fff; }
      #bench-wrap { width: 1240px; height: 720px; padding: 24px; box-sizing: border-box; font-family: Arial, sans-serif; }
      #bench-meta { height: 34px; font: 14px/1.4 Arial, sans-serif; color: #1f2937; }
      revo-grid { width: 1192px; height: 640px; display: block; border: 1px solid #d1d5db; }
      .bench-name { display: inline-flex; align-items: center; gap: 6px; font-weight: 600; }
      .bench-status { border-radius: 999px; padding: 2px 8px; font-size: 12px; background: #e0f2fe; color: #075985; }
      .bench-number { color: #166534; font-variant-numeric: tabular-nums; }
    </style>
    <div id="bench-wrap">
      <div id="bench-meta">RevoGrid local benchmark harness - 100,000 rows x 100 columns</div>
      <revo-grid id="grid" theme="compact" row-size="36" row-headers range resize hide-attribution></revo-grid>
    </div>
  `

    const mod = await import('/node_modules/@revolist/revogrid/standalone/index.js')
    mod.defineCustomElementRevoGrid()
    await customElements.whenDefined('revo-grid')

    const grid = document.querySelector('#grid')
    const columns = []
    for (let col = 0; col < columnCount; col += 1) {
        if (col === 0) {
            columns.push({
                name: 'Name',
                prop: 'name',
                size: 180,
                pin: 'colPinStart',
                cellTemplate: (h, props) => h('span', { class: 'bench-name' }, [
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
                cellTemplate: (h, props) => h('span', { class: 'bench-number' }, Number(props.model[props.prop]).toFixed(2)),
            })
        } else {
            columns.push({ name: `C${col}`, prop: `metric_${col}`, size: 110 })
        }
    }

    const statuses = ['new', 'active', 'review', 'done']
    const source = Array.from({ length: rowCount }, (_, row) => {
        const item = {
            name: `Employee ${row}`,
            status: statuses[row % statuses.length],
            active: row % 3 !== 0,
        }
        for (let col = 1; col < columnCount; col += 1) {
            item[`metric_${col}`] = ((row + 1) * (col + 3)) % 10000 + col / 100
        }
        return item
    })

    await new Promise(resolve => requestAnimationFrame(resolve))
    const initialStart = performance.now()
    const initialRender = new Promise(resolve => {
        grid.addEventListener('aftergridrender', () => resolve(performance.now() - initialStart), { once: true })
    })
    grid.columns = columns
    grid.source = source
    grid.rowSize = 36
    grid.range = true
    grid.resize = true
    grid.rowHeaders = true
    grid.hideAttribution = true

    const readHeap = () => performance.memory ? performance.memory.usedJSHeapSize : null
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
            scrollElement.scrollTop = progress * Math.min(scrollElement.scrollHeight - scrollElement.clientHeight, 140000)
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
        await grid.setDataAt({ row: i, col: 1, val: `edited-${i}` })
        editSamples.push(performance.now() - start)
    }

    const heapAfterInteractionSamples = await sampleHeap()
    const domNodeCount = document.querySelectorAll('*').length

    return {
        initialRenderTime,
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
}, { rowCount, columnCount })

await page.screenshot({ path: path.join(outDir, 'revo-grid-benchmark.png'), fullPage: true })
const video = page.video()
await page.close()
await context.close()
const videoPath = await video.path()
await browser.close()

const videoTarget = path.join(outDir, 'revo-grid-benchmark.webm')
execFileSync('cp', [videoPath, videoTarget])

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
    rowCount,
    columnCount,
    totalLogicalCells: rowCount * columnCount,
    rendererComplexity: 'Mixed renderer harness: 1 pinned custom name cell with status badge, 1 custom status badge column, 8 custom formatted numeric columns, 90 plain numeric columns.',
    machine,
    metrics: {
        initialRenderMs: result.initialRenderTime,
        scrollingFpsDisplayCap: Math.min(60, result.scrollFps),
        rawHeadlessScrollFps: result.scrollFps,
        scrollFrames: result.scrollFrames,
        droppedFrames: result.droppedFrames,
        heapAfterWarmupBytes: median(result.heapAfterWarmupSamples.filter(Boolean)),
        heapAfterWarmupSamplesBytes: result.heapAfterWarmupSamples,
        heapAfterWarmupSamplesMiB: result.heapAfterWarmupSamples.filter(Boolean).map(value => roundNumber(value / 1024 / 1024)),
        heapAfterInteractionBytes: median(result.heapAfterInteractionSamples.filter(Boolean)),
        heapAfterInteractionSamplesBytes: result.heapAfterInteractionSamples,
        heapAfterInteractionSamplesMiB: result.heapAfterInteractionSamples.filter(Boolean).map(value => roundNumber(value / 1024 / 1024)),
        editLatencyMedianMs: median(result.editSamples),
        editLatencyP95Ms: p95(result.editSamples),
        domNodeCount: result.domNodeCount,
        renderedRows: result.renderedRows,
        renderedCells: result.renderedCells,
    },
    assets: {
        screenshot: '/benchmarks/revo-grid-benchmark.png',
        video: '/benchmarks/revo-grid-benchmark.webm',
    },
}

writeFileSync(path.join(outDir, 'result.json'), `${JSON.stringify(output, null, 2)}\n`)
console.log(JSON.stringify(output, null, 2))
