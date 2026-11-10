/** Workspace-only motion artwork. Positions retain the original design space. */
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
const dark = new URLSearchParams(location.search).get('theme') === 'dark'
const theme = dark
  ? {
      background: '#1b1b1f',
      header: '#252c29',
      panel: '#242a27',
      ink: '#eef4f0',
      muted: '#a4b4ad',
      green: '#5dd6ac',
      line: '#343a38',
      owner: '#c6d3cc',
      track: '#3e4742',
      selection: '#5dd6ac12',
      tab: '#213e32',
      remaining: '#0e1717b3',
      dependency: '#889d90',
      callout: '#102c23',
      todayText: '#12392b',
    }
  : {
      background: '#ffffff',
      header: '#f8faf9',
      panel: '#f7f9f6',
      ink: '#182d29',
      muted: '#7a8983',
      green: '#128263',
      line: '#e8ede9',
      owner: '#54665e',
      track: '#e3e8e5',
      selection: '#12826308',
      tab: '#eaf3ec',
      remaining: '#ffffffb3',
      dependency: '#a8b7ad',
      callout: '#182d29',
      todayText: '#ffffff',
    }
const { ink, muted, green, line } = theme
const rows = [
  ['Commerce API', 'Alex Morgan', 'In progress', 64, 180, '#6647f0', 0, 5],
  ['Mobile app', 'Maya Chen', 'In progress', 48, 120, '#fc6d2d', 2, 6],
  ['Data platform', 'Jordan Lee', 'Complete', 100, 240, '#0091ff', 1, 4],
  ['Customer portal', 'Sam Rivera', 'In progress', 35, 150, '#ff02f0', 5, 5],
  ['Design system', 'Nina Patel', 'Review', 85, 80, '#00b8a6', 0, 3],
  ['Research', 'Elias Novak', 'Complete', 100, 100, '#f5b700', 3, 4],
]
const duration = 18.8
// New playback time → original choreography time; holds retain their duration.
const timing = [
  [0, 0],
  [4.6, 4.6],
  [5.4, 7.1],
  [9.5, 11.2],
  [10.3, 13.6],
  [16.2, 19.5],
  [17.1, 22.3],
  [18.8, 24],
]
function choreographyTime(seconds) {
  const time = ((seconds % duration) + duration) % duration
  for (let i = 1; i < timing.length; i++) {
    const [end, oldEnd] = timing[i]
    const [start, oldStart] = timing[i - 1]
    if (time <= end) return oldStart + ((oldEnd - oldStart) * (time - start)) / (end - start)
  }
  return 0
}
const clamp = x => Math.max(0, Math.min(1, x))
const ease = x => {
  x = clamp(x)
  return x * x * x * (x * (x * 6 - 15) + 10)
}
const mix = (a, b, p) => a + (b - a) * p
const tween = (t, a, b) => ease((t - a) / (b - a))
function alpha(a, fn) {
  if (a <= 0) return
  c.save()
  c.globalAlpha *= clamp(a)
  fn()
  c.restore()
}
function rect(x, y, w, h, r = 0, fill = theme.background, stroke) {
  c.beginPath()
  c.roundRect(x, y, Math.max(0, w), Math.max(0, h), r)
  if (fill) {
    c.fillStyle = fill
    c.fill()
  }
  if (stroke) {
    c.strokeStyle = stroke
    c.lineWidth = 1
    c.stroke()
  }
}
function text(s, x, y, size = 20, color = ink, weight = 400, align = 'left') {
  c.font = `${weight} ${size}px -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif`
  c.fillStyle = color
  c.textAlign = align
  c.textBaseline = 'middle'
  c.fillText(s, x, y)
}
function badgeWidth(label, size, weight) {
  c.font = `${weight} ${size}px -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif`
  return Math.ceil(c.measureText(label).width) + 24
}
function rule(x, y, x2, y2, color = line, width = 1) {
  c.beginPath()
  c.moveTo(x, y)
  c.lineTo(x2, y2)
  c.strokeStyle = color
  c.lineWidth = width
  c.stroke()
}
function dot(x, y, r, color) {
  c.beginPath()
  c.arc(x, y, r, 0, Math.PI * 2)
  c.fillStyle = color
  c.fill()
}
// Reference-style marks use the label color and a lighter secondary tone.
function icon(x, y, type, size = 22, color = green) {
  const primary = color,
    secondary = color + '66'
  c.save()
  c.translate(x, y)
  c.scale(size / 24, size / 24)
  if (type === 0) {
    // Optical inset balances nine separate marks against the other silhouettes.
    c.translate(2, 2)
    c.scale(20 / 24, 20 / 24)
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        rect(col * 9, row * 9, 6, 6, 1.8, (row + col) % 2 === 0 ? primary : secondary)
      }
    }
  }
  if (type === 1) {
    c.fillStyle = secondary
    c.fill(
      new Path2D(
        'M 10.5 3 Q 10.5 1.5 9 2 C 3.8 3.2 0.5 7.5 0.5 12.5 C 0.5 18.7 5.3 23.5 11.5 23.5 C 16.6 23.5 20.9 20.2 22 15.3 Q 22.4 13.5 20.6 13.5 L 12 13.5 Q 10.5 13.5 10.5 12 Z',
      ),
    )
    c.fillStyle = primary
    c.fill(
      new Path2D(
        'M 14 0.5 C 19 1.2 22.8 5 23.5 10 Q 23.8 11.5 22.2 11.5 L 14 11.5 Q 12.5 11.5 12.5 10 L 12.5 2 Q 12.5 0.3 14 0.5 Z',
      ),
    )
  }
  if (type === 2) {
    c.beginPath()
    c.moveTo(2, 3)
    c.lineTo(2, 19)
    c.quadraticCurveTo(2, 22, 5, 22)
    c.lineTo(22, 22)
    c.strokeStyle = secondary
    c.lineWidth = 2.8
    c.lineCap = 'round'
    c.stroke()
    rect(6.5, 3, 7.5, 3, 1.5, primary)
    rect(9.5, 8.5, 9, 3, 1.5, primary)
    rect(17, 14, 6, 3, 1.5, primary)
  }
  c.restore()
}

function check(x, y, color = green) {
  c.beginPath()
  c.moveTo(x, y)
  c.lineTo(x + 4, y + 4)
  c.lineTo(x + 11, y - 4)
  c.strokeStyle = color
  c.lineWidth = 2
  c.stroke()
}
function arrow(x, y, color = green) {
  rule(x, y, x + 16, y, color, 2)
  rule(x + 10, y - 6, x + 16, y, color, 2)
  rule(x + 10, y + 6, x + 16, y, color, 2)
}
// Exact categorical values from @revolist/ui chart-palettes.ts (ClickUp spectrum).
const portraits = ['noah', 'maya', 'leo', 'sophia', 'nina', 'liam'].map(name => {
  const image = new Image()
  image.src = new URL(`./assets/${name}.webp`, import.meta.url).href
  return image
})
await Promise.all(portraits.map(image => image.decode()))
function avatar(index, x, y, radius = 17) {
  c.save()
  c.beginPath()
  c.arc(x, y, radius, 0, Math.PI * 2)
  c.clip()
  c.drawImage(portraits[index], x - radius, y - radius, radius * 2, radius * 2)
  c.restore()
}
function markText(color) {
  return color === '#6647f0' ? '#ffffff' : '#182d29'
}
function gridSurface(a, t) {
  alpha(a, () => {
    rect(181, 425, 1558, 50, 7, theme.header)
    const xs = [219, 565, 851, 1130, 1508]
    ;['Project', 'Owner', 'Status', 'Progress', 'Budget'].forEach((s, i) =>
      text(s, xs[i], 450, 18, ink, 550, i === 4 ? 'right' : 'left'),
    )
    rows.forEach((r, i) => {
      const y = 507 + i * 55
      rule(183, y + 27, 1737, y + 27)
      dot(221, y, 4, r[5])
      text(r[0], 240, y, 21, ink, 500)
      avatar(i, 573, y)
      text(r[1], 600, y, 19, theme.owner)
      const status = {
        'In progress': ['#0091ff', '#082b4c'],
        Complete: ['#00b8a6', '#083e36'],
        Review: ['#6647f0', '#ffffff'],
      }[r[2]]
      const statusWidth = badgeWidth(r[2], 16, 600)
      rect(851, y - 15, statusWidth, 30, 7, status[0])
      text(r[2], 851 + statusWidth / 2, y, 16, status[1], 600, 'center')
      rect(1130, y - 6, 85, 12, 6, theme.track)
      rect(1130, y - 6, (85 * r[3]) / 100, 12, 6, r[5])
      text(r[3] + '%', 1274, y, 17, ink, 600, 'right')
    })
    const sel = tween(t, 0.7, 1.5) * (1 - tween(t, 4.6, 5.1))
    alpha(sel, () => {
      rect(1337, 482, 204, 326, 7, theme.selection, green)
      rect(1536, 802, 8, 8, 2, green)
    })
  })
}
function chartSurface(a, t) {
  alpha(a, () => {
    text('Budget by project', 199, 450, 25, ink, 550)
    text('USD, thousands', 199, 483, 16, muted)
    for (let i = 0; i < 4; i++) {
      const y = 788 - i * 80
      rule(258, y, 1218, y)
      text(String(i * 80), 238, y, 14, muted, 400, 'right')
    }
    rows.forEach((r, i) =>
      text(
        ['Commerce', 'Mobile', 'Platform', 'Portal', 'Design', 'Research'][i],
        330 + i * 157,
        822,
        16,
        muted,
        400,
        'center',
      ),
    )
    rect(1282, 428, 425, 405, 15, theme.panel)
    text('PORTFOLIO AT A GLANCE', 1314, 462, 13, muted, 600)
    text('$890,000', 1314, 517, 47, ink, 550)
    text('Total project investment', 1316, 559, 17, muted)
    rule(1314, 587, 1674, 587)
    text('Momentum', 1315, 620, 19, ink, 500)
    text('+24.8%', 1671, 620, 20, green, 550, 'right')
    const reveal = tween(t, 6.4, 8.5)
    c.save()
    c.beginPath()
    c.rect(1314, 650, 360 * reveal, 120)
    c.clip()
    const pts = [
      [1315, 742],
      [1350, 731],
      [1389, 739],
      [1424, 703],
      [1464, 712],
      [1501, 678],
      [1544, 686],
      [1585, 661],
      [1626, 673],
      [1670, 647],
    ]
    const g = c.createLinearGradient(0, 650, 0, 775)
    g.addColorStop(0, green + '25')
    g.addColorStop(1, green + '00')
    c.beginPath()
    c.moveTo(1315, 775)
    pts.forEach(p => c.lineTo(...p))
    c.lineTo(1670, 775)
    c.fillStyle = g
    c.fill()
    c.beginPath()
    pts.forEach((p, i) => (i ? c.lineTo(...p) : c.moveTo(...p)))
    c.strokeStyle = green
    c.lineWidth = 3
    c.stroke()
    c.restore()
    text('JAN', 1315, 795, 12, muted)
    text('JUN', 1670, 795, 12, muted, 400, 'right')
  })
}
function ganttSurface(a, t) {
  alpha(a, () => {
    rect(181, 425, 1558, 50, 7, theme.header)
    text('Project', 220, 450, 18, ink, 550)
    text('Owner', 476, 450, 18, ink, 550)
    ;['APR 06', 'APR 13', 'APR 20', 'APR 27', 'MAY 04', 'MAY 11'].forEach((s, i) => {
      text(s, 692 + i * 173, 450, 14, ink, 550)
      rule(674 + i * 173, 474, 674 + i * 173, 820)
    })
    rows.forEach((r, i) => {
      const y = 507 + i * 55
      rule(183, y + 27, 1737, y + 27)
      dot(221, y, 4, r[5])
      text(r[0], 239, y, 20, ink, 500)
      avatar(i, 485, y, 15)
      text(r[1].split(' ')[0], 510, y, 18, ink)
    })
    alpha(tween(t, 13.4, 14.5), () => {
      c.setLineDash([4, 5])
      rule(1123, 474, 1123, 819, green + '80', 1.5)
      c.setLineDash([])
      rect(1094, 409, 58, 25, 6, green)
      text('Today', 1123, 422, 12, theme.todayText, 500, 'center')
      // Dependencies grow only after the bars have settled.
      const connections = [
        [0, 3],
        [2, 1],
        [4, 5],
      ]
      connections.forEach(([from, to]) => {
        const r = rows[from],
          end = 694 + (r[6] + r[7]) * 81,
          y = 507 + from * 55
        const target = 694 + rows[to][6] * 81,
          ty = 507 + to * 55
        c.beginPath()
        c.moveTo(end + 3, y)
        c.lineTo(end + 16, y)
        c.lineTo(end + 16, ty - 25)
        c.lineTo(target - 14, ty - 25)
        c.lineTo(target - 14, ty)
        c.lineTo(target - 4, ty)
        c.strokeStyle = theme.dependency
        c.lineWidth = 1.5
        c.stroke()
        c.beginPath()
        c.moveTo(target - 9, ty - 4)
        c.lineTo(target - 4, ty)
        c.lineTo(target - 9, ty + 4)
        c.stroke()
      })
      c.save()
      c.translate(1504, 507 + 3 * 55)
      c.rotate(Math.PI / 4)
      rect(-7, -7, 14, 14, 2, ink)
      c.restore()
      text('Launch', 1525, 507 + 3 * 55, 15, muted)
    })
  })
}
function render(t) {
  t = choreographyTime(t)
  c.setTransform(1, 0, 0, 1, 0, 0)
  c.clearRect(0, 0, canvas.width, canvas.height)
  rect(0, 0, canvas.width, canvas.height, 0, theme.background)
  c.translate(0, 20)
  c.scale(canvas.width / 1632, (canvas.height - 40) / 500)
  c.translate(-144, -352)
  const p = tween(t, 4.6, 7.1),
    q = tween(t, 11.2, 13.6),
    back = tween(t, 19.5, 22.3)
  const ga = 1 - p + back,
    ca = p * (1 - q),
    ta = q * (1 - back)
  rect(144, 352, 1632, 500, 0, theme.background)
  const padding = 16,
    iconSize = 22,
    iconGap = 7,
    tabGap = 12
  let nextTabX = 181
  const tabs = ['Data grid', 'Charts', 'Timeline'].map((label, type) => {
    const labelWidth = badgeWidth(label, 17, 550) - 24
    const width = padding * 2 + iconSize + iconGap + labelWidth
    const tab = { label, type, x: nextTabX, width }
    nextTabX += width + tabGap
    return tab
  })
  const activeX = mix(mix(tabs[0].x, tabs[1].x, p), tabs[2].x, q) * (1 - back) + tabs[0].x * back
  const activeWidth =
    mix(mix(tabs[0].width, tabs[1].width, p), tabs[2].width, q) * (1 - back) + tabs[0].width * back
  rect(activeX, 366, activeWidth, 40, 9, theme.tab)
  tabs.forEach(({ label, type, x }, i) => {
    const active = [ga, ca, ta][i] > 0.5
    const color = active ? green : muted
    icon(x + padding, 375, type, iconSize, color)
    text(label, x + padding + iconSize + iconGap, 386, 17, color, active ? 550 : 400)
  })
  const gridInk = 1 - tween(t, 4.6, 5.25) + tween(t, 21.65, 22.3)
  const chartInk = tween(t, 6.45, 7.1) * (1 - tween(t, 11.2, 11.85))
  const ganttInk = tween(t, 12.95, 13.6) * (1 - tween(t, 19.5, 20.15))
  gridSurface(gridInk, t)
  chartSurface(chartInk, t)
  ganttSurface(ganttInk, t)
  // These six shapes persist: colored budget cells → vertical bars → scheduled work.
  rows.forEach((r, i) => {
    const pi = tween(t, 4.6 + i * 0.065, 6.75 + i * 0.065)
    const qi = tween(t, 11.2 + i * 0.065, 13.25 + i * 0.065)
    const bi = tween(t, 19.5 + i * 0.065, 21.95 + i * 0.065)
    const budgetLabel = '$' + r[4] + ',000'
    const budgetWidth = badgeWidth(budgetLabel, 18, 600)
    const grid = [1528 - budgetWidth, 492 + i * 55, budgetWidth, 30]
    const chart = [282 + i * 157, 788 - r[4], 96, r[4]]
    const gantt = [694 + r[6] * 81, 490 + i * 55, r[7] * 81, 34]
    const geom = grid.map((v, j) => mix(mix(mix(v, chart[j], pi), gantt[j], qi), v, bi))
    const [x, y, w, h] = geom
    const solid = pi * (1 - bi)
    alpha(1 - solid, () => rect(x, y, w, h, 7, r[5]))
    alpha(solid, () => {
      const g = c.createLinearGradient(x, y, x + w, y + h)
      g.addColorStop(0, r[5])
      g.addColorStop(1, r[5])
      rect(x, y, w, h, mix(7, 9, ca), g)
      alpha(ta, () => {
        rect(x, y, w, h, 7, theme.remaining)
        rect(x, y, (w * r[3]) / 100, h, 7, r[5])
      })
    })
    alpha(gridInk, () => text(budgetLabel, x + w / 2, y + h / 2, 18, markText(r[5]), 600, 'center'))
    alpha(chartInk, () => text('$' + r[4] + 'k', x + w / 2, y - 22, 19, ink, 550, 'center'))
    alpha(ganttInk * tween(t, 13.1, 14), () => {
      text(r[3] + '%', x + 15, y + h / 2, 14, markText(r[5]), 600)
      if (r[3] === 100) check(x + w - 26, y + h / 2, markText(r[5]))
    })
  })
  alpha(tween(t, 2.5, 3.2) * (1 - tween(t, 4.4, 4.8)), () => {
    rect(1410, 811, 280, 36, 9, theme.callout)
    rect(1423, 817, 23, 23, 5, theme.background)
    icon(1426, 820, 1, 17)
    text('Visualize selection', 1456, 830, 16, '#fff', 500)
    arrow(1658, 830, '#a5e3bd')
  })
}
window.renderFrame = render
window.filmDuration = duration
render(0)
if (!new URLSearchParams(location.search).has('render')) {
  const start = performance.now()
  const animate = now => {
    render((now - start) / 1000)
    requestAnimationFrame(animate)
  }
  requestAnimationFrame(animate)
}
