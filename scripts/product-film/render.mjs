/** Deterministic frame rendering. Run from docs: node scripts/product-film/render.mjs */
import { chromium } from 'playwright'
import { spawn } from 'node:child_process'
import { once } from 'node:events'
import { fileURLToPath } from 'node:url'
import { mkdir, writeFile, rename } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'
const root = fileURLToPath(new URL('./', import.meta.url))
const out = fileURLToPath(new URL('../../public/video/', import.meta.url))
const dark = process.argv.includes('--dark')
const themeName = dark ? 'dark' : 'light'
const prefix = `revogrid-product-film${dark ? '-dark' : ''}`
const review = fileURLToPath(new URL('../../output/product-film/', import.meta.url))
const server = createServer(async (req, res) => {
  const pathname = req.url.split('?')[0]
  const path = /^\/assets\/[a-z]+\.webp$/.test(pathname)
    ? pathname.slice(1)
    : pathname === '/scene.mjs'
      ? 'scene.mjs'
      : 'scene.html'
  res.setHeader(
    'Content-Type',
    path.endsWith('webp') ? 'image/webp' : path.endsWith('mjs') ? 'text/javascript' : 'text/html',
  )
  res.end(await readFile(root + path))
}).listen(0, '127.0.0.1')
await once(server, 'listening')
const browser = await chromium.launch({ channel: 'chrome', headless: true })
try {
  const page = await browser.newPage({
    viewport: { width: 1920, height: 628 },
    deviceScaleFactor: 1,
  })
  await page.goto(`http://127.0.0.1:${server.address().port}/?render&theme=${themeName}`)
  await page.waitForFunction(() => typeof window.renderFrame === 'function')
  const duration = await page.evaluate(() => window.filmDuration)
  await mkdir(out, { recursive: true })
  const frames = process.argv.includes('--stills')
  if (frames) {
    await mkdir(review, { recursive: true })
    for (const t of [0, 3, 5, 7, 10, 13, 16.6, 18.79]) {
      await page.evaluate(t => window.renderFrame(t), t)
      await page.screenshot({ path: `${review}product-film-${themeName}-${t}.png` })
    }
  } else {
    const encoder = spawn(
      'ffmpeg',
      [
        '-hide_banner',
        '-loglevel',
        'error',
        '-y',
        '-f',
        'image2pipe',
        '-framerate',
        '60',
        '-i',
        'pipe:0',
        '-c:v',
        'libx264',
        '-preset',
        'slow',
        '-crf',
        '19',
        '-pix_fmt',
        'yuv420p',
        '-movflags',
        '+faststart',
        `${out}${prefix}.mp4`,
      ],
      { stdio: ['pipe', 'inherit', 'inherit'] },
    )
    const completed = once(encoder, 'close')
    for (let frame = 0; frame < Math.round(duration * 60); frame++) {
      const data = await page.evaluate(t => {
        window.renderFrame(t)
        return document.querySelector('canvas').toDataURL('image/png').split(',')[1]
      }, frame / 60)
      if (!encoder.stdin.write(Buffer.from(data, 'base64'))) await once(encoder.stdin, 'drain')
      if (frame % 120 === 0) console.log(`Rendered ${frame / 60}s / ${duration}s`)
    }
    encoder.stdin.end()
    const [code] = await completed
    if (code !== 0) throw new Error(`ffmpeg failed: ${code}`)
    await page.evaluate(() => window.renderFrame(3))
    const poster = await page.screenshot({ type: 'jpeg', quality: 94 })
    const hash = createHash('sha256')
      .update(await readFile(`${out}${prefix}.mp4`))
      .digest('hex')
      .slice(0, 12)
    const basename = `${prefix}-${hash}`
    await rename(`${out}${prefix}.mp4`, `${out}${basename}.mp4`)
    await writeFile(`${out}${basename}.jpg`, poster)
    console.log(
      `Set hero.film.${dark ? 'darkSrc' : 'src'} to /video/${basename}.mp4 and hero.film.${dark ? 'darkPoster' : 'poster'} to /video/${basename}.jpg`,
    )

    console.log('Exported 1920×628 / 60fps MP4 and poster.')
  }
} finally {
  await browser.close()
  server.close()
}
