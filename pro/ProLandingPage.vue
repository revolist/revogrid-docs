<template>
  <main ref="rootEl" class="pro-landing">
    <section class="hero">
      <div class="pro-container hero-grid">
        <div class="hero-copy">
          <span class="eyebrow"><span class="dot"></span>{{ page.hero.badge }}</span>
          <h1>
            {{ page.hero.title.prefix }}
            <em>{{ page.hero.title.highlight }}</em>,
            {{ page.hero.title.suffix }}
          </h1>
          <p class="lead">{{ page.hero.subtitle }}</p>
          <div class="hero-cta">
            <a :href="page.hero.actions.primary.href" class="pro-btn pro-btn-primary pro-btn-lg">
              {{ page.hero.actions.primary.label }} <span>{{ page.hero.actions.primary.detail }}</span>
            </a>
            <a :href="page.hero.actions.secondary.href" class="pro-btn pro-btn-ghost pro-btn-lg">
              {{ page.hero.actions.secondary.label }}
              <span aria-hidden="true">-></span>
            </a>
          </div>
          <div class="hero-meta">
            <span v-for="item in page.hero.meta" :key="item"><span class="check">✓</span>{{ item }}</span>
          </div>
        </div>

        <div class="showcase" aria-label="RevoGrid Pro data grid preview">
          <div class="showcase-chrome">
            <div class="chrome-dots" aria-hidden="true"><span></span><span></span><span></span></div>
            <div class="chrome-title">{{ page.hero.showcase.title }}</div>
            <div class="chrome-actions">
              <span v-for="action in page.hero.showcase.actions" :key="action">{{ action }}</span>
            </div>
          </div>
          <div class="showcase-body">
            <div class="mini-toolbar">
              <div class="toolbar-left">
                <span class="pill">{{ page.hero.showcase.toolbar.pill }}</span>
                <span>filtered by Region = "EMEA"</span>
              </div>
              <div class="toolbar-actions" aria-hidden="true">
                <button type="button">+</button>
                <button type="button">≡</button>
                <button type="button">...</button>
              </div>
            </div>
            <div class="mini-grid">
              <div class="gh-row">
                <div>#</div><div>Customer</div><div>Region</div><div>Status</div><div>MRR</div><div>QoQ</div>
              </div>
              <div v-for="row in heroRows" :key="row.id" class="g-row" :class="{ alt: row.alt }">
                <div class="idx">{{ row.id }}</div>
                <div :class="{ sel: row.selected }">{{ row.customer }}</div>
                <div :class="{ sel: row.selected }">{{ row.region }}</div>
                <div :class="{ sel: row.selected }"><span class="badge" :class="row.badgeClass">{{ row.status }}</span></div>
                <div class="num" :class="{ sel: row.selected }">{{ row.mrr }}</div>
                <div class="num trend" :class="[row.trendClass, { sel: row.selected }]">{{ row.trend }}</div>
              </div>
            </div>
            <div class="mini-foot">
              <div class="formula"><span>fx</span> {{ page.hero.showcase.toolbar.formula }}</div>
            </div>
          </div>
          <div class="float-card" aria-hidden="true">
            <div class="label">{{ page.hero.showcase.float.label }}</div>
            <div class="value">{{ page.hero.showcase.float.value }}</div>
            <div class="delta">{{ page.hero.showcase.float.delta }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="trust">
      <div class="pro-container trust-inner">
        <div v-for="item in page.trust" :key="item.label" class="trust-item">
          <div class="num"><em>{{ item.value }}</em> {{ item.label }}</div>
          <div class="desc">{{ item.description }}</div>
        </div>
      </div>
    </section>

    <section class="ai-band">
      <div class="pro-container ai-inner">
        <div class="ai-code-win">
          <div class="code-chrome">
            <div class="dots" aria-hidden="true"><span></span><span></span><span></span></div>
            <div class="ai-tag-pill"><span class="spark">✦</span>{{ page.ai.codeTag }}</div>
          </div>
          <div class="code-body" aria-label="RevoGrid Pro integration code sample">
            <div v-for="line in codeLines" :key="line.num" class="line">
              <span class="ln">{{ line.num }}</span>
              <span v-html="line.html"></span>
            </div>
          </div>
          <div class="code-foot">
            <span>ready</span>
            <span class="ok">✓ 0 type errors - ✓ compiled</span>
          </div>
        </div>

        <div class="ai-copy">
          <div class="ai-tag">- {{ page.ai.tag }}</div>
          <h2>
            {{ page.ai.title.prefix }}<br />
            {{ page.ai.title.suffix }} <em>{{ page.ai.title.highlight }}</em>
          </h2>
          <p>{{ page.ai.description }}</p>
          <div class="ai-facts">
            <div v-for="fact in page.ai.facts" :key="fact.text" class="ai-fact">
              <span class="icon">{{ fact.icon }}</span>
              <span>{{ fact.text }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="features" class="section">
      <div class="pro-container">
        <div class="section-head">
          <div class="section-tag">- {{ page.features.tag }}</div>
          <h2>
            {{ page.features.title.prefix }}
            <em>{{ page.features.title.highlight }}</em>
          </h2>
          <p class="section-sub">{{ page.features.subtitle }}</p>
        </div>

        <div class="features">
          <article
            v-for="(feature, index) in page.features.items"
            :key="feature.type"
            class="feature reveal"
            :class="{ wide: feature.wide }"
          >
            <div class="feature-head">
              <div class="left">
                <div class="feature-num">{{ String(index + 1).padStart(2, '0') }} / {{ feature.tier }}</div>
                <h3><em>{{ feature.title }}</em> - {{ feature.titleSuffix }}</h3>
                <p class="feature-desc">{{ feature.description }}</p>
              </div>
              <div class="feature-saved">
                <div class="label">Saves</div>
                <div class="value"><em>{{ feature.saves }}</em> {{ feature.unit }}</div>
                <div class="unit">{{ feature.savesAgainst }}</div>
              </div>
            </div>
            <div class="feature-body">
              <PivotMockup v-if="feature.type === 'pivot'" />
              <GanttMockup v-else-if="feature.type === 'gantt'" />
              <SheetMockup v-else-if="feature.type === 'sheet'" />
              <TreeMockup v-else-if="feature.type === 'tree'" />
              <AuditMockup v-else />
            </div>
            <div class="feature-foot">
              <div class="replaces">Replaces - <b>{{ feature.replaces }}</b></div>
              <a :href="feature.demoUrl" class="link">{{ feature.demoLabel }} -></a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section usecase-section">
      <div class="pro-container">
        <div class="section-head">
          <div class="section-tag">- {{ page.useCases.tag }}</div>
          <h2>
            {{ page.useCases.title.prefix }}
            <em>{{ page.useCases.title.highlight }}</em>
          </h2>
          <p class="section-sub">{{ page.useCases.subtitle }}</p>
        </div>

        <div class="usecases">
          <div v-for="item in page.useCases.items" :key="item.title" class="uc">
            <div class="uc-icon">{{ item.icon }}</div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <ul>
              <li v-for="tag in item.tags" :key="tag">{{ tag }}</li>
            </ul>
          </div>
        </div>

        <div class="frameworks">
          <div class="copy">
            <h3>{{ page.useCases.frameworks.title }}</h3>
            <p>{{ page.useCases.frameworks.description }}</p>
          </div>
          <div class="logos">
            <span v-for="framework in page.useCases.frameworks.items" :key="framework">{{ framework }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section catalog-section">
      <div class="pro-container">
        <div class="section-head">
          <div class="section-tag">- {{ page.catalog.tag }}</div>
          <h2>
            {{ PRO_FEATURE_COUNT }} {{ page.catalog.title.countLabel }},
            <em>{{ page.catalog.title.highlight }}</em><br />
            {{ page.catalog.title.ending }}
          </h2>
          <p class="section-sub">{{ page.catalog.subtitle }}</p>
        </div>

        <div class="catalog">
          <div
            v-for="group in catalogGroups"
            :key="group.rawLabel"
            class="cat-group"
            :class="{ enterprise: group.rawLabel === 'Enterprise Tools' }"
          >
            <h3><span class="gicon">{{ group.icon }}</span>{{ group.label }}</h3>
            <ul>
              <li v-for="feature in group.features" :key="feature.title">{{ feature.title }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="pro-container">
      <div class="final-cta">
        <div class="final-cta-inner">
          <h2>
            {{ page.cta.title.prefix }} <em>{{ page.cta.title.highlight }}</em><br />
            {{ page.cta.title.suffix }}
          </h2>
          <p>{{ page.cta.subtitle }}</p>
          <div class="cta-row">
            <a :href="page.cta.actions.primary.href" class="pro-btn pro-btn-primary pro-btn-lg">{{ page.cta.actions.primary.label }}</a>
            <a :href="page.cta.actions.secondary.href" class="pro-btn pro-btn-ghost pro-btn-lg">{{ page.cta.actions.secondary.label }}</a>
          </div>
          <div class="note">{{ page.cta.note }}</div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed, defineComponent, h, onMounted, ref } from 'vue'
import { useData } from 'vitepress'
import { featuresPro } from './features.pro'

type ProPage = Record<string, any>
type ProFeature = (typeof featuresPro)[number]

const { frontmatter } = useData()
const page = computed(() => frontmatter.value.proPage as ProPage)
const rootEl = ref<HTMLElement | null>(null)
const PRO_FEATURE_COUNT = featuresPro.length

const heroRows = [
  { id: '01', customer: 'Acme Industries', region: 'EMEA', status: 'Active', mrr: 'EUR 18,420', trend: '+12%', badgeClass: 'badge-good', trendClass: 'good' },
  { id: '02', customer: 'Northwind GmbH', region: 'EMEA', status: 'Active', mrr: 'EUR 14,210', trend: '+4%', badgeClass: 'badge-good', trendClass: 'good', alt: true },
  { id: '03', customer: 'Initech Holdings', region: 'EMEA', status: 'Trial', mrr: 'EUR 9,840', trend: '+22%', badgeClass: 'badge-warn', trendClass: 'good' },
  { id: '04', customer: 'Globex SA', region: 'EMEA', status: 'Onboarding', mrr: 'EUR 7,500', trend: '-', badgeClass: 'badge-info', trendClass: 'dim', alt: true },
  { id: '05', customer: 'Vandelay Industries', region: 'EMEA', status: 'Churn risk', mrr: 'EUR 6,120', trend: '-8%', badgeClass: 'badge-rose', trendClass: 'rose', selected: true },
  { id: '06', customer: 'Hooli Cloud', region: 'EMEA', status: 'Active', mrr: 'EUR 5,900', trend: '+9%', badgeClass: 'badge-good', trendClass: 'good', alt: true },
]

const codeLines = [
  { num: 1, html: '<span class="c">// one import. entire scheduling layer.</span>' },
  { num: 2, html: '<span class="kw">import</span><span class="tx"> { RevoGrid } </span><span class="kw">from</span><span class="tx"> </span><span class="str">\'@revolist/revogrid-react\'</span><span class="pun">;</span>' },
  { num: 3, html: '<span class="kw">import</span><span class="tx"> { GanttPlugin } </span><span class="kw">from</span><span class="tx"> </span><span class="str">\'@revolist/revogrid-pro\'</span><span class="pun">;</span>' },
  { num: 4, html: '' },
  { num: 5, html: '<span class="kw">export function</span><span class="tx"> </span><span class="fn">ProjectView</span><span class="pun">() {</span>' },
  { num: 6, html: '<span class="tx">&nbsp;&nbsp;</span><span class="kw">const</span><span class="tx"> gantt </span><span class="pun">= </span><span class="kw">new </span><span class="type">GanttPlugin</span><span class="pun">({</span>' },
  { num: 7, html: '<span class="tx">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="prop">tasks</span><span class="pun">:</span><span class="tx"> projectData</span><span class="pun">,</span>' },
  { num: 8, html: '<span class="tx">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="prop">scheduling</span><span class="pun">: </span><span class="str">\'auto\'</span><span class="pun">,</span>' },
  { num: 9, html: '<span class="tx">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="prop">criticalPath</span><span class="pun">: </span><span class="kw">true</span><span class="pun">,</span>' },
  { num: 10, html: '<span class="tx">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="prop">baselines</span><span class="pun">: </span><span class="kw">true</span><span class="pun">,</span>' },
  { num: 11, html: '<span class="tx">&nbsp;&nbsp;</span><span class="pun">});</span>' },
  { num: 12, html: '' },
  { num: 13, html: '<span class="tx">&nbsp;&nbsp;</span><span class="kw">return</span><span class="tx"> </span><span class="pun">&lt;</span><span class="type">RevoGrid</span><span class="tx"> </span><span class="prop">plugins</span><span class="pun">={[</span><span class="tx">gantt</span><span class="pun">]} /&gt;;</span>' },
  { num: 14, html: '<span class="pun">}</span>' },
]

const featureDescription = (description?: string) =>
  description?.replace(/<[^>]+>/g, ' ').replace(/`/g, '').replace(/\s+/g, ' ').trim()

const catalogGroups = computed(() => {
  const config = page.value.catalog
  const groups = featuresPro.reduce((acc, feature: ProFeature) => {
    const rawLabel = feature.group || 'Other'

    if (!acc[rawLabel]) {
      acc[rawLabel] = {
        rawLabel,
        label: config.groupLabels?.[rawLabel] || rawLabel,
        icon: config.groupIcons?.[rawLabel] || config.defaultIcon,
        features: [],
      }
    }

    acc[rawLabel].features.push({
      title: feature.title,
      description: featureDescription(feature.description),
    })

    return acc
  }, {} as Record<string, { rawLabel: string; label: string; icon: string; features: Array<{ title: string; description?: string }> }>)

  const groupOrder = Object.keys(config.groupIcons || {})
  const orderByLabel = new Map(groupOrder.map((label, index) => [label, index]))

  return Object.values(groups).sort((a, b) => {
    const aOrder = orderByLabel.get(a.rawLabel) ?? Number.MAX_SAFE_INTEGER
    const bOrder = orderByLabel.get(b.rawLabel) ?? Number.MAX_SAFE_INTEGER

    return aOrder - bOrder
  })
})

onMounted(() => {
  const root = rootEl.value
  if (!root) return

  const revealEls = Array.from(root.querySelectorAll<HTMLElement>('.reveal'))
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!('IntersectionObserver' in window) || prefersReducedMotion) {
    revealEls.forEach((el) => el.classList.add('in'))
    return
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return

      entry.target.classList.add('in')
      observer.unobserve(entry.target)
    })
  }, { threshold: 0.12 })

  revealEls.forEach((el, index) => {
    el.style.transitionDelay = `${index * 0.06}s`
    observer.observe(el)
  })
})

const PivotMockup = defineComponent({
  name: 'PivotMockup',
  setup() {
    const cells = [
      ['Region / Quarter', 'Q1', 'Q2', 'Q3', 'Q4', 'Total'],
      ['▾ EMEA', 'EUR 142,400', 'EUR 168,920', 'EUR 191,210', 'EUR 218,460', 'EUR 720,990'],
      ['Germany', 'EUR 58,200', 'EUR 71,100', 'EUR 80,800', 'EUR 94,300', 'EUR 304,400'],
      ['Poland', 'EUR 42,800', 'EUR 49,600', 'EUR 58,210', 'EUR 67,100', 'EUR 217,710'],
      ['▸ Americas', 'EUR 188,100', 'EUR 212,400', 'EUR 240,890', 'EUR 271,200', 'EUR 912,590'],
      ['▸ APAC', 'EUR 71,300', 'EUR 86,440', 'EUR 102,100', 'EUR 124,800', 'EUR 384,640'],
      ['Grand total', 'EUR 401,800', 'EUR 467,760', 'EUR 534,200', 'EUR 614,460', 'EUR 2,018,220'],
    ]

    return () => h('div', { class: 'mockup-pivot' }, [
      h('div', { class: 'pivot-grid' }, cells.flatMap((row, rowIndex) =>
        row.map((cell, colIndex) => h('div', {
          class: [
            rowIndex === 0 ? 'ph' : 'pl',
            colIndex > 0 ? 'num' : '',
            rowIndex > 1 && rowIndex < 4 && colIndex === 0 ? 'indent' : '',
            colIndex === 5 ? 'tot' : '',
            rowIndex === 6 ? 'gtot' : '',
            rowIndex > 0 && (rowIndex === 1 || rowIndex === 4 || rowIndex === 5) && colIndex === 0 ? 'head' : '',
          ],
        }, cell)),
      )),
      h('div', { class: 'pivot-config' }, [
        h('span', { class: 'chip-label' }, 'Rows ->'),
        h('span', { class: 'chip row' }, 'Region'),
        h('span', { class: 'chip row' }, 'Country'),
        h('span', { class: 'chip-label' }, 'Columns ->'),
        h('span', { class: 'chip col' }, 'Quarter'),
        h('span', { class: 'chip-label' }, 'Values ->'),
        h('span', { class: 'chip val' }, 'SUM(Revenue)'),
      ]),
    ])
  },
})

const GanttMockup = defineComponent({
  name: 'GanttMockup',
  setup() {
    const rows = [
      ['Discovery', 'coral', '0%', '25%', '100%'],
      ['Research', 'amber child', '2%', '12%', ''],
      ['Stakeholder review', 'amber child', '14%', '10%', ''],
      ['Design', 'violet', '24%', '28%', '60%'],
      ['Wireframes', 'violet child', '25%', '12%', ''],
      ['Prototype', 'violet child', '37%', '14%', '25%'],
      ['Engineering', 'teal', '48%', '32%', ''],
      ['Launch', 'rose', '80%', '18%', ''],
    ]

    return () => h('div', { class: 'mockup-gantt' }, [
      h('div', { class: 'gantt-head' }, [
        h('div', { class: 'gh-label' }, 'Task / Phase'),
        h('div', { class: 'gh-weeks' }, ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8'].map((week) =>
          h('span', { class: week === 'W4' ? 'today' : '' }, week),
        )),
      ]),
      ...rows.map(([label, tone, left, width, text]) => h('div', { class: 'gantt-row' }, [
        h('div', { class: ['gr-label', tone.includes('child') ? 'child' : ''] }, [
          !tone.includes('child') ? h('span', { class: ['ind', tone.split(' ')[0]] }) : null,
          label,
        ]),
        h('div', { class: 'gr-track' }, [
          h('div', { class: ['bar', tone.split(' ')[0]], style: { left, width } }, [
            h('span', { class: 'pct', style: { width: text ? text : '100%' } }),
            text,
          ]),
          tone.includes('violet') || tone.includes('teal') || tone.includes('rose')
            ? h('div', { class: 'gantt-today', style: { left: '37.5%' } })
            : null,
        ]),
      ])),
      h('div', { class: 'gantt-foot' }, [
        h('div', { class: 'leg' }, [h('i', { class: 'coral' }), 'Discovery']),
        h('div', { class: 'leg' }, [h('i', { class: 'violet' }), 'Design']),
        h('div', { class: 'leg' }, [h('i', { class: 'teal' }), 'Engineering']),
        h('div', { class: 'leg' }, [h('i', { class: 'rose' }), 'Launch']),
        h('div', { class: 'gantt-summary' }, 'Critical path: 6w - Slack: 2d - Resources: 4'),
      ]),
    ])
  },
})

const SheetMockup = defineComponent({
  name: 'SheetMockup',
  setup() {
    const rows = [
      ['1', 'Q1', 'EUR 142,400', '21%', '+18%', 'EMEA'],
      ['2', 'Q2', 'EUR 168,920', '21%', '+19%', 'EMEA'],
      ['3', 'Q3', 'EUR 191,210', '21%', '+13%', 'EMEA'],
      ['4', 'Q4', 'EUR 218,460', '21%', '+14%', 'EMEA'],
      ['5', 'Q5', 'EUR 244,100', '21%', '+12%', 'EMEA'],
      ['6', 'Q6', 'EUR 271,200', '21%', '+11%', 'EMEA'],
      ['7', 'Total', 'EUR 1,236,290', '-', '-', '-'],
    ]

    return () => h('div', { class: 'mockup-sheet' }, [
      h('div', { class: 'sheet-formula' }, [
        h('span', { class: 'cell-ref' }, 'F7'),
        h('span', { class: 'fx' }, 'fx'),
        h('span', { class: 'input' }, '=SUM(B2:B6)*(1+C7)'),
      ]),
      h('div', { class: 'sheet-grid' }, [
        h('div', { class: 'row-h' }),
        ...['A', 'B', 'C', 'D', 'E'].map((col) => h('div', { class: 'col-h' }, col)),
        ...rows.flatMap((row, rowIndex) => [
          h('div', { class: 'row-h' }, row[0]),
          ...row.slice(1).map((cell, colIndex) => h('div', {
            class: [
              'cell',
              colIndex === 0 ? 'left' : '',
              colIndex === 1 && rowIndex > 0 && rowIndex < 6 ? 'range' : '',
              colIndex === 1 && rowIndex === 5 ? 'range-corner' : '',
              rowIndex === 6 && colIndex === 1 ? 'total' : '',
              cell.startsWith('+') ? 'green' : '',
            ],
          }, [
            cell,
            colIndex === 1 && rowIndex === 5 ? h('span', { class: 'fill-handle' }) : null,
          ])),
        ]),
      ]),
    ])
  },
})

const TreeMockup = defineComponent({
  name: 'TreeMockup',
  setup() {
    return () => h('div', { class: 'mockup-tree' }, [
      h('div', { class: 'tree-row head' }, [h('div', 'Account'), h('div', 'Users'), h('div', 'Status'), h('div')]),
      h('div', { class: 'tree-row' }, [h('div', { class: 'tree-name' }, '▸ Acme Industries'), h('div', { class: 'num' }, '142'), h('div', [h('span', { class: 'badge badge-good' }, 'Active')]), h('div', { class: 'actions' }, '...')]),
      h('div', { class: 'tree-row' }, [h('div', { class: 'tree-name open' }, '▸ Northwind GmbH'), h('div', { class: 'num' }, '86'), h('div', [h('span', { class: 'badge badge-good' }, 'Active')]), h('div', { class: 'actions' }, '...')]),
      h('div', { class: 'tree-detail' }, [
        h('div', { class: 'det' }, [h('div', { class: 'lbl' }, 'Plan'), h('div', { class: 'val accent' }, 'Pro Advanced')]),
        h('div', { class: 'det' }, [h('div', { class: 'lbl' }, 'MRR'), h('div', { class: 'val' }, 'EUR 14,210')]),
        h('div', { class: 'det' }, [h('div', { class: 'lbl' }, 'Renewal'), h('div', { class: 'val' }, 'Apr 12, 2026')]),
        h('div', { class: 'det' }, [h('div', { class: 'lbl' }, 'Health'), h('div', { class: 'val good' }, '92 / 100')]),
      ]),
      h('div', { class: 'tree-row' }, [h('div', { class: 'tree-name' }, '▾ Initech Holdings'), h('div', { class: 'num' }, '38'), h('div', [h('span', { class: 'badge badge-warn' }, 'Trial')]), h('div', { class: 'actions' }, '...')]),
      h('div', { class: 'tree-row' }, [h('div', { class: 'tree-name depth-1' }, '▸ Initech UK'), h('div', { class: 'num' }, '22'), h('div', [h('span', { class: 'badge badge-warn' }, 'Trial')]), h('div', { class: 'actions' }, '...')]),
      h('div', { class: 'tree-row' }, [h('div', { class: 'tree-name' }, '▸ Globex SA'), h('div', { class: 'num' }, '11'), h('div', [h('span', { class: 'badge badge-info' }, 'Onboarding')]), h('div', { class: 'actions' }, '...')]),
    ])
  },
})

const AuditMockup = defineComponent({
  name: 'AuditMockup',
  setup() {
    const items = [
      ['14:32:08', 'maks@revolist edited F7  EUR 218,460 -> EUR 244,100', 'EDIT'],
      ['14:31:55', 'maks@revolist applied auto-fill to range B2:B6', 'RANGE'],
      ['14:30:41', 'anna@revolist added row #48,220  "Vandelay Industries"', 'ADD'],
      ['14:28:19', 'anna@revolist deleted column G - Notes', 'UNDONE'],
      ['14:24:02', 'maks@revolist pasted JSON clipboard payload (12 cells)', 'PASTE'],
      ['14:22:48', 'system validation failed on D5  "value out of range"', 'REJECT'],
    ]

    return () => h('div', { class: 'mockup-audit' }, [
      h('div', { class: 'audit-head' }, [
        h('div', 'Audit log - q4-revenue.grid - last 24h'),
        h('div', { class: 'actions' }, [
          h('button', { class: 'primary', type: 'button' }, 'Undo last'),
          h('button', { type: 'button' }, 'Redo'),
          h('button', { type: 'button' }, 'Export CSV'),
        ]),
      ]),
      h('div', { class: 'audit-list' }, items.map(([time, msg, tag]) => h('div', { class: ['audit-item', tag === 'UNDONE' ? 'undone' : ''] }, [
        h('div', { class: 'time' }, time),
        h('div', { class: 'msg' }, msg),
        h('div', { class: ['tag', tag.toLowerCase()] }, tag),
      ]))),
    ])
  },
})
</script>

<style lang="scss" scoped>
:global(.pro-landing-doc.Layout) {
  max-width: none;
}

:global(.pro-landing-doc .VPDoc),
:global(.pro-landing-doc .VPDoc .container),
:global(.pro-landing-doc .VPDoc .content),
:global(.pro-landing-doc .VPDoc .content-container),
:global(.pro-landing-doc .VPDoc main) {
  max-width: none !important;
  padding: 0 !important;
}

:global(.pro-landing-doc .vp-doc) {
  width: 100%;
}

.pro-landing {
  --bg: #0a0a0b;
  --bg-elev-1: #111114;
  --bg-elev-2: #16161a;
  --bg-elev-3: #1c1c21;
  --line: rgba(255, 255, 255, 0.06);
  --line-strong: rgba(255, 255, 255, 0.12);
  --line-bright: rgba(255, 255, 255, 0.22);
  --text: #f5f5f7;
  --text-muted: rgba(245, 245, 247, 0.62);
  --text-dim: rgba(245, 245, 247, 0.40);
  --accent: #ff5d39;
  --accent-2: #ffb547;
  --accent-soft: rgba(255, 93, 57, 0.12);
  --good: #4ade80;
  --warn: #fbbf24;
  --info: #60a5fa;
  --violet: #a78bfa;
  --rose: #fb7185;
  --teal: #2dd4bf;
  --panel-bg: linear-gradient(180deg, var(--bg-elev-1), var(--bg-elev-2));
  --panel-shadow: 0 30px 80px -28px rgba(0, 0, 0, 0.55);
  --panel-inset: inset 0 1px 0 rgba(255, 255, 255, 0.04);
  --float-shadow: 0 20px 50px -18px rgba(0, 0, 0, 0.65);
  --button-shadow: 0 8px 24px -8px color-mix(in srgb, var(--accent) 60%, transparent);
  --grid-line-bg: rgba(255, 255, 255, 0.025);
  --pattern-line: rgba(255, 255, 255, 0.03);
  --timeline-grid-line: var(--line);
  --section-band: linear-gradient(135deg, var(--bg-elev-1), var(--bg));
  --font-mono: "JetBrains Mono", var(--vp-font-family-mono);
  --radius: 10px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  color: var(--text);
  background:
    radial-gradient(ellipse 80% 18% at 50% 0%, rgba(255, 93, 57, 0.11), transparent 62%),
    radial-gradient(ellipse 52% 22% at 100% 0%, rgba(255, 181, 71, 0.06), transparent 55%),
    var(--bg);
  font-size: 16px;
  line-height: 1.55;
  margin-top: calc(var(--vp-nav-height, 64px) * -1);
  padding-top: var(--vp-nav-height, 64px);
  position: relative;
  overflow: hidden;
}

:global(:root:not(.dark)) .pro-landing {
  --bg: #fcfcfd;
  --bg-elev-1: #ffffff;
  --bg-elev-2: #f7f8fb;
  --bg-elev-3: #eef2f7;
  --line: rgba(24, 31, 42, 0.07);
  --line-strong: rgba(24, 31, 42, 0.105);
  --line-bright: rgba(24, 31, 42, 0.18);
  --text: #111217;
  --text-muted: rgba(17, 18, 23, 0.68);
  --text-dim: rgba(17, 18, 23, 0.44);
  --accent: #ed5533;
  --accent-2: #d89528;
  --accent-soft: rgba(237, 85, 51, 0.095);
  --good: #188552;
  --warn: #a16207;
  --info: #2563eb;
  --violet: #7c3aed;
  --rose: #e11d48;
  --teal: #0f766e;
  --panel-bg: linear-gradient(180deg, #ffffff 0%, #fbfcff 100%);
  --panel-shadow: 0 20px 44px -34px rgba(30, 41, 59, 0.36), 0 5px 18px -14px rgba(30, 41, 59, 0.18);
  --panel-inset: inset 0 1px 0 rgba(255, 255, 255, 0.92);
  --float-shadow: 0 16px 30px -22px rgba(30, 41, 59, 0.35), 0 4px 16px -12px rgba(30, 41, 59, 0.2);
  --button-shadow: 0 10px 22px -14px rgba(237, 85, 51, 0.58);
  --grid-line-bg: rgba(24, 31, 42, 0.04);
  --pattern-line: rgba(237, 85, 51, 0.16);
  --pattern-line-2: rgba(24, 31, 42, 0.055);
  --timeline-grid-line: rgba(24, 31, 42, 0.095);
  --section-band: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  background:
    radial-gradient(ellipse 70% 18% at 50% 0%, rgba(237, 85, 51, 0.075), transparent 64%),
    radial-gradient(ellipse 46% 20% at 100% 0%, rgba(216, 149, 40, 0.055), transparent 58%),
    var(--bg);
}

:global(html:not(.dark) .pro-landing) {
  --bg: #fcfcfd;
  --bg-elev-1: #ffffff;
  --bg-elev-2: #f7f8fb;
  --bg-elev-3: #eef2f7;
  --line: rgba(24, 31, 42, 0.07);
  --line-strong: rgba(24, 31, 42, 0.105);
  --line-bright: rgba(24, 31, 42, 0.18);
  --text: #111217;
  --text-muted: rgba(17, 18, 23, 0.68);
  --text-dim: rgba(17, 18, 23, 0.44);
  --accent: #ed5533;
  --accent-2: #d89528;
  --accent-soft: rgba(237, 85, 51, 0.095);
  --good: #188552;
  --warn: #a16207;
  --info: #2563eb;
  --violet: #7c3aed;
  --rose: #e11d48;
  --teal: #0f766e;
  --panel-bg: linear-gradient(180deg, #ffffff 0%, #fbfcff 100%);
  --panel-shadow: 0 20px 44px -34px rgba(30, 41, 59, 0.36), 0 5px 18px -14px rgba(30, 41, 59, 0.18);
  --panel-inset: inset 0 1px 0 rgba(255, 255, 255, 0.92);
  --float-shadow: 0 16px 30px -22px rgba(30, 41, 59, 0.35), 0 4px 16px -12px rgba(30, 41, 59, 0.2);
  --button-shadow: 0 10px 22px -14px rgba(237, 85, 51, 0.58);
  --grid-line-bg: rgba(24, 31, 42, 0.04);
  --pattern-line: rgba(237, 85, 51, 0.16);
  --pattern-line-2: rgba(24, 31, 42, 0.055);
  --timeline-grid-line: rgba(24, 31, 42, 0.095);
  --section-band: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  background:
    radial-gradient(ellipse 70% 18% at 50% 0%, rgba(237, 85, 51, 0.075), transparent 64%),
    radial-gradient(ellipse 46% 20% at 100% 0%, rgba(216, 149, 40, 0.055), transparent 58%),
    var(--bg);
}

.pro-landing *,
.pro-landing *::before,
.pro-landing *::after {
  box-sizing: border-box;
}

.pro-landing a {
  color: inherit;
  text-decoration: none;
}

.pro-landing button {
  font: inherit;
}

.pro-container {
  width: min(100% - 64px, 1240px);
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.hero {
  padding: 96px 0 80px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 80px;
  align-items: center;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border: 1px solid var(--accent-soft);
  border-radius: 99px;
  color: var(--accent);
  background: var(--accent-soft);
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.04em;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 8px var(--accent);
  animation: proPulse 2s infinite;
}

@keyframes proPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.hero h1,
.section h2,
.ai-copy h2,
.final-cta h2 {
  color: var(--text);
  font-weight: 400;
  letter-spacing: -0.01em;
}

.hero h1 {
  max-width: 620px;
  margin: 20px 0 24px;
  font-size: clamp(48px, 5.5vw, 76px);
  line-height: 1.02;
}

em {
  color: var(--accent);
  font-weight: 600;
  font-style: normal;
}

.lead {
  max-width: 540px;
  margin: 0 0 32px;
  color: var(--text-muted);
  font-size: 19px;
  line-height: 1.55;
}

.hero-cta,
.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}

.pro-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 38px;
  padding: 0 16px;
  border: 1px solid transparent;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  white-space: nowrap;
  transition: border-color 0.15s, background 0.15s, box-shadow 0.15s, transform 0.15s;
}

.pro-btn-primary {
  color: #1a0a05;
  background: var(--accent);
  font-weight: 700;
}

.pro-btn-primary:hover {
  background: color-mix(in srgb, var(--accent) 86%, #fff);
  box-shadow: var(--button-shadow);
  transform: translateY(-1px);
}

.pro-btn-ghost {
  color: var(--text);
  background: transparent;
  border-color: var(--line-strong);
}

.pro-btn-ghost:hover {
  background: var(--bg-elev-1);
  border-color: var(--line-bright);
}

.pro-btn-lg {
  height: 46px;
  padding: 0 22px;
  border-radius: 10px;
  font-size: 15px;
}

.hero-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 36px;
  color: var(--text-dim);
  font-size: 13px;
}

.hero-meta span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.check,
.good {
  color: var(--good);
}

.showcase,
.ai-code-win,
.feature,
.uc,
.frameworks,
.cat-group,
.final-cta {
  border: 1px solid var(--line-strong);
  background: var(--panel-bg);
  box-shadow: var(--panel-shadow), var(--panel-inset);
}

:global(:root:not(.dark)) .showcase,
:global(:root:not(.dark)) .ai-code-win,
:global(:root:not(.dark)) .feature,
:global(:root:not(.dark)) .uc,
:global(:root:not(.dark)) .frameworks,
:global(:root:not(.dark)) .cat-group,
:global(:root:not(.dark)) .final-cta {
  box-shadow: var(--panel-shadow), var(--panel-inset);
}

.showcase {
  position: relative;
  border-radius: var(--radius-lg);
}

.showcase-chrome,
.code-chrome {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 12px 16px;
  border-bottom: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.02);
}

.chrome-dots,
.dots {
  display: flex;
  gap: 6px;
}

.chrome-dots span,
.dots span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--line-strong);
}

.chrome-title,
.chrome-actions,
.mini-toolbar,
.mini-grid,
.mini-foot,
.code-body,
.code-foot {
  font-family: var(--font-mono);
}

.chrome-title,
.chrome-actions {
  color: var(--text-dim);
  font-size: 11px;
}

.chrome-actions {
  display: flex;
  gap: 10px;
}

.showcase-body {
  padding: 14px;
}

.mini-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 10px;
  margin-bottom: 10px;
  border: 1px solid var(--line);
  border-radius: 8px;
  color: var(--text-muted);
  background: rgba(255, 255, 255, 0.02);
  font-size: 12px;
}

.toolbar-left,
.toolbar-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.pill,
.chip {
  border: 1px solid var(--accent-soft);
  color: var(--accent);
  background: var(--accent-soft);
  border-radius: 99px;
}

.pill {
  padding: 3px 9px;
  font-size: 11px;
  font-weight: 700;
}

.toolbar-actions button {
  display: grid;
  place-items: center;
  width: 24px;
  height: 24px;
  border: 1px solid var(--line);
  border-radius: 6px;
  color: var(--text-muted);
  background: transparent;
}

.mini-grid {
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 8px;
  font-size: 11.5px;
}

.gh-row,
.g-row {
  display: grid;
  grid-template-columns: 36px 1.4fr 0.8fr 0.75fr 0.8fr 0.6fr;
}

.gh-row {
  border-bottom: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.025);
}

.gh-row > div,
.g-row > div {
  display: flex;
  align-items: center;
  min-width: 0;
  padding: 9px 10px;
  border-right: 1px solid var(--line);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.gh-row > div {
  color: var(--text-dim);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.g-row > div {
  border-bottom: 1px solid var(--line);
  color: var(--text-muted);
}

.g-row.alt {
  background: rgba(255, 255, 255, 0.015);
}

.g-row:last-child > div,
.gh-row > div:last-child,
.g-row > div:last-child {
  border-right: 0;
}

.g-row:last-child > div {
  border-bottom: 0;
}

.idx,
.trend.dim {
  color: var(--text-dim);
}

.num {
  justify-content: flex-end;
  color: var(--text);
  font-variant-numeric: tabular-nums;
}

.badge {
  display: inline-flex;
  padding: 2px 7px;
  border-radius: 99px;
  font-size: 10px;
  font-weight: 600;
}

.badge-good {
  color: var(--good);
  background: color-mix(in srgb, var(--good) 14%, transparent);
}

.badge-warn {
  color: var(--warn);
  background: color-mix(in srgb, var(--warn) 14%, transparent);
}

.badge-info {
  color: var(--info);
  background: color-mix(in srgb, var(--info) 14%, transparent);
}

.badge-rose,
.rose {
  color: var(--rose);
}

.badge-rose {
  background: color-mix(in srgb, var(--rose) 14%, transparent);
}

.sel {
  background: color-mix(in srgb, var(--accent) 8%, transparent) !important;
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--accent) 45%, transparent);
}

.mini-foot {
  display: flex;
  justify-content: space-between;
  padding: 10px 4px 0;
  color: var(--text-dim);
  font-size: 11px;
}

.formula span {
  color: var(--accent);
}

.float-card {
  position: absolute;
  right: -24px;
  bottom: -24px;
  min-width: 170px;
  padding: 18px 20px;
  border: 1px solid var(--line-strong);
  border-radius: 12px;
  background: color-mix(in srgb, var(--bg-elev-1) 88%, transparent);
  box-shadow: var(--float-shadow);
  backdrop-filter: blur(12px);
}

.float-card .label,
.feature-saved .label,
.tree-detail .lbl {
  color: var(--text-dim);
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.float-card .value {
  color: var(--text);
  font-size: 22px;
  font-weight: 600;
}

.float-card .delta {
  color: var(--good);
  font-size: 11px;
}

.trust {
  padding: 32px 0;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.trust-inner {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;
}

.trust-item .num {
  margin-bottom: 4px;
  color: var(--text);
  font-size: 18px;
  font-weight: 700;
}

.trust-item .desc {
  color: var(--text-muted);
  font-size: 13px;
}

.section {
  padding: 112px 0;
}

.usecase-section,
.catalog-section {
  padding-top: 0;
}

.section-head {
  max-width: 720px;
  margin-bottom: 64px;
}

.section-tag,
.ai-tag {
  margin-bottom: 18px;
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.section h2 {
  margin: 0 0 18px;
  font-size: clamp(34px, 4.2vw, 56px);
  line-height: 1.08;
}

.section-sub {
  max-width: 620px;
  margin: 0;
  color: var(--text-muted);
  font-size: 16px;
  line-height: 1.7;
}

.ai-band {
  padding: 64px 0;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  background: var(--section-band);
}

.ai-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}

.ai-code-win {
  overflow: hidden;
  border-radius: var(--radius-lg);
  font-family: var(--font-mono);
  font-size: 12.5px;
}

.ai-tag-pill {
  display: inline-flex;
  gap: 6px;
  align-items: center;
  padding: 3px 9px;
  border: 1px solid var(--line);
  border-radius: 99px;
  color: var(--text-dim);
  background: var(--bg-elev-3);
  font-size: 10.5px;
}

.spark {
  color: var(--accent-2);
}

.code-body {
  padding: 20px 22px;
  line-height: 1.65;
  overflow-x: auto;
}

.code-body .line {
  display: flex;
  min-width: max-content;
}

.ln {
  min-width: 28px;
  color: var(--text-dim);
  font-size: 11px;
  user-select: none;
}

:deep(.c),
:deep(.pun) { color: var(--text-dim); }
:deep(.kw) { color: var(--violet); }
:deep(.fn) { color: var(--accent-2); }
:deep(.str) { color: var(--good); }
:deep(.prop) { color: var(--info); }
:deep(.type) { color: var(--teal); }
:deep(.tx) { color: var(--text); }

.code-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  border-top: 1px solid var(--line);
  color: var(--text-dim);
  font-size: 10.5px;
}

.ok {
  color: var(--good);
}

.ai-copy h2 {
  margin: 0 0 16px;
  font-size: clamp(30px, 3.2vw, 42px);
  line-height: 1.08;
}

.ai-copy p {
  max-width: 460px;
  margin: 0 0 28px;
  color: var(--text-muted);
  font-size: 15.5px;
  line-height: 1.65;
}

.ai-facts {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.ai-fact {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  color: var(--text-muted);
  font-size: 14px;
  line-height: 1.5;
}

.ai-fact .icon {
  display: grid;
  place-items: center;
  flex: 0 0 26px;
  height: 22px;
  margin-top: 2px;
  border: 1px solid var(--line-strong);
  border-radius: 5px;
  color: var(--text);
  background: var(--bg-elev-3);
  font-family: var(--font-mono);
  font-size: 9px;
}

.features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.feature {
  overflow: hidden;
  border-radius: var(--radius-lg);
  transition: border-color 0.15s, transform 0.15s;
}

.feature:hover {
  border-color: var(--line-bright);
}

.feature.wide {
  grid-column: 1 / -1;
}

.feature-head {
  display: flex;
  gap: 24px;
  justify-content: space-between;
  padding: 30px;
  border-bottom: 1px solid var(--line);
}

.feature-head .left {
  min-width: 0;
  flex: 1;
}

.feature-num {
  margin-bottom: 12px;
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.feature h3 {
  margin: 0 0 12px;
  color: var(--text);
  font-size: clamp(20px, 2.5vw, 30px);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.18;
}

.feature p {
  margin: 0;
}

.feature-desc {
  max-width: 720px;
  color: var(--text-muted);
  font-size: 14px;
  line-height: 1.6;
}

.feature-saved {
  flex: 0 0 120px;
  text-align: right;
}

.feature-saved .value {
  margin: 4px 0 2px;
  color: var(--text);
  font-size: 20px;
  font-weight: 700;
}

.feature-saved .unit {
  color: var(--text-dim);
  font-size: 11px;
}

.feature-body {
  padding: 24px 30px 30px;
}

.feature-foot {
  display: flex;
  gap: 18px;
  align-items: center;
  justify-content: space-between;
  padding: 16px 30px;
  border-top: 1px solid var(--line);
  color: var(--text-dim);
  font-size: 12px;
}

.feature-foot b {
  color: var(--text-muted);
  font-weight: 600;
}

.feature-foot .link {
  display: inline-flex;
  flex-shrink: 0;
  color: var(--accent);
  font-weight: 700;
}

.mockup-pivot,
.mockup-gantt,
.mockup-sheet,
.mockup-tree,
.mockup-audit {
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--bg-elev-2);
  font-family: var(--font-mono);
  font-size: 11.5px;
}

.pivot-grid {
  display: grid;
  grid-template-columns: 150px repeat(5, minmax(92px, 1fr));
  min-width: 720px;
}

.mockup-pivot {
  overflow-x: auto;
}

.ph,
.pl {
  display: flex;
  align-items: center;
  min-height: 36px;
  padding: 8px 10px;
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.ph {
  color: var(--text-dim);
  background: rgba(255, 255, 255, 0.025);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.pl {
  color: var(--text-muted);
}

.pl.head {
  color: var(--text);
  font-weight: 700;
}

.pl.indent {
  padding-left: 24px;
}

.pl.num {
  justify-content: flex-end;
}

.pl.tot,
.ph.tot {
  color: var(--accent);
  background: var(--accent-soft);
  font-weight: 700;
}

.pl.gtot {
  color: var(--text);
  background: rgba(255, 255, 255, 0.03);
  font-weight: 700;
}

.pivot-config {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  padding: 12px;
  border-top: 1px solid var(--line);
}

.chip {
  padding: 4px 9px;
  font-size: 10.5px;
}

.chip.row { color: var(--info); border-color: color-mix(in srgb, var(--info) 42%, transparent); background: transparent; }
.chip.col { color: var(--violet); border-color: color-mix(in srgb, var(--violet) 42%, transparent); background: transparent; }
.chip.val { color: var(--good); border-color: color-mix(in srgb, var(--good) 42%, transparent); background: transparent; }
.chip-label { color: var(--text-dim); font-size: 10.5px; }

.gantt-head,
.gantt-row {
  display: grid;
  grid-template-columns: 170px 1fr;
}

.gantt-head {
  border-bottom: 1px solid var(--line);
  color: var(--text-dim);
  background: rgba(255, 255, 255, 0.02);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.gh-label,
.gr-label {
  padding: 10px 12px;
  border-right: 1px solid var(--line);
}

.gh-weeks {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
}

.gh-weeks span {
  padding: 10px 0;
  border-right: 1px solid var(--line);
  text-align: center;
}

.gh-weeks .today {
  color: var(--accent);
}

.gantt-row {
  min-width: 650px;
  border-bottom: 1px solid var(--line);
}

.mockup-gantt {
  overflow-x: auto;
}

.gr-label {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text);
}

.gr-label.child {
  padding-left: 28px;
  color: var(--text-muted);
}

.ind,
.leg i {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 2px;
}

.gr-track {
  position: relative;
  min-height: 39px;
  background-image: linear-gradient(90deg, var(--timeline-grid-line) 1px, transparent 1px);
  background-size: 12.5% 100%;
}

.bar {
  position: absolute;
  top: 9px;
  height: 20px;
  padding: 0 8px;
  overflow: hidden;
  border-radius: 4px;
  color: #210b06;
  font-size: 10px;
  font-weight: 700;
  line-height: 20px;
}

.coral { background: linear-gradient(90deg, var(--accent), #ff7757); }
.amber { background: linear-gradient(90deg, var(--accent-2), #ffd089); }
.violet { background: linear-gradient(90deg, var(--violet), #c4b5fd); }
.teal { background: linear-gradient(90deg, var(--teal), #5eead4); }
.rose { background: linear-gradient(90deg, var(--rose), #fda4af); }

.gantt-today {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background: var(--accent);
}

.gantt-foot {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  padding: 12px;
  color: var(--text-dim);
  font-size: 10.5px;
}

.leg {
  display: flex;
  gap: 6px;
  align-items: center;
}

.gantt-summary {
  margin-left: auto;
}

.sheet-formula {
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 8px 12px;
  border-bottom: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.02);
}

.cell-ref {
  min-width: 36px;
  padding: 3px 8px;
  border: 1px solid var(--line-strong);
  border-radius: 4px;
  color: var(--text-dim);
  text-align: center;
}

.fx {
  color: var(--accent);
  font-size: 14px;
  font-style: italic;
}

.sheet-grid {
  display: grid;
  grid-template-columns: 32px repeat(5, minmax(86px, 1fr));
  min-width: 560px;
}

.mockup-sheet {
  overflow-x: auto;
}

.sheet-grid > div {
  position: relative;
  min-height: 33px;
  padding: 7px 10px;
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  color: var(--text);
  text-align: right;
}

.col-h,
.row-h {
  color: var(--text-dim) !important;
  background: rgba(255, 255, 255, 0.025);
  font-size: 10px;
  font-weight: 700;
  text-align: center !important;
}

.cell.left {
  text-align: left;
}

.cell.range,
.cell.range-corner,
.cell.total {
  background: color-mix(in srgb, var(--accent) 9%, transparent);
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--accent) 35%, transparent);
}

.cell.range-corner {
  box-shadow: inset 0 0 0 1px var(--accent);
}

.cell.total {
  color: var(--accent);
  font-weight: 700;
}

.cell.green {
  color: var(--good);
}

.fill-handle {
  position: absolute;
  right: -3px;
  bottom: -3px;
  z-index: 2;
  width: 6px;
  height: 6px;
  border: 1px solid var(--bg-elev-2);
  background: var(--accent);
}

.tree-row {
  display: grid;
  grid-template-columns: 1.4fr 80px 100px 60px;
  align-items: center;
  min-width: 520px;
  border-bottom: 1px solid var(--line);
}

.mockup-tree {
  overflow-x: auto;
}

.tree-row > div {
  padding: 9px 12px;
  color: var(--text);
}

.tree-row.head > div {
  color: var(--text-dim);
  background: rgba(255, 255, 255, 0.02);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

.tree-name {
  display: flex;
  gap: 6px;
  align-items: center;
}

.tree-name.open {
  color: var(--accent);
}

.tree-name.depth-1 {
  padding-left: 32px;
  color: var(--text-muted);
}

.tree-row .num {
  text-align: right;
}

.actions {
  color: var(--text-dim) !important;
  text-align: right;
}

.tree-detail {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  min-width: 520px;
  padding: 14px 18px;
  border-top: 1px solid color-mix(in srgb, var(--accent) 22%, transparent);
  border-bottom: 1px solid var(--line);
  background: color-mix(in srgb, var(--accent) 5%, transparent);
}

.tree-detail .val {
  color: var(--text);
  font-size: 12px;
}

.tree-detail .accent {
  color: var(--accent);
  font-weight: 700;
}

.audit-head {
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  border-bottom: 1px solid var(--line);
  color: var(--text-muted);
  background: rgba(255, 255, 255, 0.02);
  font-family: var(--font-mono);
  font-size: 11px;
}

.audit-head .actions {
  display: flex;
  gap: 8px;
}

.audit-head button {
  padding: 4px 10px;
  border: 1px solid var(--line-strong);
  border-radius: 5px;
  color: var(--text-muted);
  background: transparent;
  font-family: var(--font-mono);
  font-size: 10.5px;
}

.audit-head button.primary {
  color: var(--accent);
  background: var(--accent-soft);
  border-color: var(--accent-soft);
}

.audit-list {
  padding: 4px 0;
}

.audit-item {
  display: grid;
  grid-template-columns: 88px 1fr auto;
  gap: 12px;
  align-items: center;
  padding: 11px 14px;
  border-bottom: 1px solid var(--line);
  font-family: var(--font-mono);
  font-size: 12px;
}

.audit-item .time {
  color: var(--text-dim);
  font-size: 10.5px;
}

.audit-item .msg {
  color: var(--text);
}

.audit-item .tag {
  padding: 2px 7px;
  border-radius: 3px;
  color: var(--info);
  background: color-mix(in srgb, var(--info) 12%, transparent);
  font-size: 9.5px;
  font-weight: 700;
}

.audit-item .tag.add {
  color: var(--good);
  background: color-mix(in srgb, var(--good) 12%, transparent);
}

.audit-item .tag.undone {
  color: var(--accent);
  background: var(--accent-soft);
}

.audit-item .tag.reject {
  color: var(--rose);
  background: color-mix(in srgb, var(--rose) 12%, transparent);
}

.audit-item.undone .msg {
  color: var(--text-dim);
  text-decoration: line-through;
}

.usecases {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.uc {
  padding: 28px;
  border-radius: var(--radius-lg);
  transition: border-color 0.15s, transform 0.15s;
}

.uc:hover {
  border-color: var(--line-bright);
  transform: translateY(-2px);
}

.uc-icon,
.gicon {
  display: grid;
  place-items: center;
  color: var(--accent);
  background: var(--accent-soft);
}

.uc-icon {
  width: 36px;
  height: 36px;
  margin-bottom: 16px;
  border-radius: 8px;
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
}

.uc h3,
.frameworks h3,
.cat-group h3 {
  margin: 0;
  color: var(--text);
  font-weight: 700;
  letter-spacing: -0.01em;
}

.uc h3 {
  margin-bottom: 8px;
  font-size: 17px;
}

.uc p {
  margin: 0 0 14px;
  color: var(--text-muted);
  font-size: 14px;
  line-height: 1.55;
}

.uc ul {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 0;
  margin: 0;
  list-style: none;
}

.uc li {
  padding: 4px 8px;
  border: 1px solid var(--line);
  border-radius: 99px;
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 10.5px;
}

.frameworks {
  display: flex;
  gap: 32px;
  align-items: center;
  justify-content: space-between;
  margin-top: 56px;
  padding: 28px;
  border-radius: var(--radius-lg);
}

.frameworks h3 {
  margin-bottom: 6px;
  font-size: 18px;
}

.frameworks p {
  margin: 0;
  color: var(--text-muted);
  font-size: 14px;
}

.logos {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: flex-end;
}

.logos span {
  padding: 8px 14px;
  border: 1px solid var(--line);
  border-radius: 8px;
  color: var(--text-muted);
  background: var(--bg-elev-2);
  font-family: var(--font-mono);
  font-size: 12px;
}

.catalog {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

.cat-group {
  padding: 22px 22px 18px;
  border-radius: var(--radius);
}

.cat-group.enterprise {
  grid-column: span 2;
  border-color: color-mix(in srgb, var(--accent) 25%, transparent);
  background: linear-gradient(180deg, var(--accent-soft), transparent), var(--bg-elev-1);
}

.cat-group h3 {
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 14px;
  font-size: 13px;
}

.gicon {
  width: 24px;
  height: 22px;
  border-radius: 5px;
  font-family: var(--font-mono);
  font-size: 9px;
}

.cat-group.enterprise h3 {
  color: var(--accent);
}

.cat-group ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.cat-group li {
  display: flex;
  gap: 7px;
  align-items: center;
  padding: 5px 0;
  color: var(--text-muted);
  font-size: 12.5px;
  line-height: 1.4;
}

.cat-group li::before {
  flex: 0 0 4px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--text-dim);
  content: "";
}

.final-cta {
  margin: 80px 0 100px;
  padding: 72px 56px;
  border-radius: var(--radius-xl);
  background:
    radial-gradient(ellipse at top right, color-mix(in srgb, var(--accent) 20%, transparent), transparent 60%),
    radial-gradient(ellipse at bottom left, color-mix(in srgb, var(--accent-2) 10%, transparent), transparent 60%),
    var(--bg-elev-1);
  position: relative;
  overflow: hidden;
}

.final-cta::before {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image:
    linear-gradient(var(--pattern-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--pattern-line) 1px, transparent 1px);
  background-size: 32px 32px;
  content: "";
  mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
  -webkit-mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
}

:global(:root:not(.dark)) .final-cta::before {
  background-image:
    linear-gradient(var(--pattern-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--pattern-line-2) 1px, transparent 1px);
  background-size: 30px 30px;
}

.final-cta-inner {
  max-width: 720px;
  position: relative;
}

.final-cta h2 {
  margin: 0 0 16px;
  font-size: clamp(36px, 4.4vw, 56px);
  line-height: 1.05;
}

.final-cta p {
  max-width: 540px;
  margin: 0 0 28px;
  color: var(--text-muted);
  font-size: 17px;
}

.note {
  margin-top: 20px;
  color: var(--text-dim);
  font-family: var(--font-mono);
  font-size: 12px;
}

.reveal {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.reveal.in {
  opacity: 1;
  transform: none;
}

@media (prefers-reduced-motion: reduce) {
  .dot {
    animation: none;
  }

  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
}

@media (max-width: 1024px) {
  .hero-grid,
  .ai-inner {
    grid-template-columns: 1fr;
    gap: 56px;
  }

  .features,
  .usecases {
    grid-template-columns: 1fr;
  }

  .feature.wide {
    grid-column: auto;
  }

  .catalog {
    grid-template-columns: repeat(2, 1fr);
  }

  .trust-inner {
    grid-template-columns: repeat(2, 1fr);
  }

  .float-card {
    display: none;
  }
}

@media (max-width: 720px) {
  .pro-container {
    width: min(100% - 40px, 1240px);
  }

  .hero {
    padding: 64px 0;
  }

  .hero h1 {
    font-size: clamp(42px, 13vw, 56px);
  }

  .lead {
    font-size: 16px;
  }

  .section {
    padding: 72px 0;
  }

  .usecase-section,
  .catalog-section {
    padding-top: 0;
  }

  .showcase-chrome,
  .chrome-actions,
  .toolbar-left span:not(.pill) {
    display: none;
  }

  .showcase-body,
  .feature-body {
    padding: 14px;
  }

  .feature-head,
  .feature-foot,
  .frameworks,
  .audit-head {
    flex-direction: column;
    align-items: flex-start;
  }

  .feature-head {
    padding: 22px;
  }

  .feature-saved {
    flex-basis: auto;
    text-align: left;
  }

  .feature-foot {
    padding: 16px 22px;
  }

  .catalog {
    grid-template-columns: 1fr;
  }

  .cat-group.enterprise {
    grid-column: auto;
  }

  .trust-inner {
    gap: 20px;
  }

  .logos {
    justify-content: flex-start;
  }

  .final-cta {
    margin: 54px 0 72px;
    padding: 42px 24px;
  }

  .audit-item {
    grid-template-columns: 1fr;
    gap: 5px;
  }
}

/* Render-function child components do not receive this SFC's scoped attribute. */
:global(.pro-landing .mockup-pivot),
:global(.pro-landing .mockup-gantt),
:global(.pro-landing .mockup-sheet),
:global(.pro-landing .mockup-tree),
:global(.pro-landing .mockup-audit) {
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--bg-elev-2);
  font-family: var(--font-mono);
  font-size: 11.5px;
}

:global(.pro-landing .mockup-pivot),
:global(.pro-landing .mockup-gantt),
:global(.pro-landing .mockup-sheet),
:global(.pro-landing .mockup-tree) {
  overflow-x: auto;
}

:global(.pro-landing .pivot-grid) {
  display: grid;
  grid-template-columns: 150px repeat(5, minmax(92px, 1fr));
  min-width: 720px;
}

:global(.pro-landing .ph),
:global(.pro-landing .pl) {
  display: flex;
  align-items: center;
  min-height: 36px;
  padding: 8px 10px;
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

:global(.pro-landing .ph) {
  color: var(--text-dim);
  background: rgba(255, 255, 255, 0.025);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

:global(.pro-landing .pl) {
  color: var(--text-muted);
}

:global(.pro-landing .pl.head),
:global(.pro-landing .pl.gtot) {
  color: var(--text);
  font-weight: 700;
}

:global(.pro-landing .pl.indent) {
  padding-left: 24px;
}

:global(.pro-landing .pl.num) {
  justify-content: flex-end;
}

:global(.pro-landing .pl.tot),
:global(.pro-landing .ph.tot) {
  color: var(--accent);
  background: var(--accent-soft);
  font-weight: 700;
}

:global(.pro-landing .pl.gtot) {
  background: rgba(255, 255, 255, 0.03);
}

:global(.pro-landing .pivot-config) {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  padding: 12px;
  border-top: 1px solid var(--line);
}

:global(.pro-landing .chip) {
  padding: 4px 9px;
  border: 1px solid var(--accent-soft);
  border-radius: 99px;
  color: var(--accent);
  background: var(--accent-soft);
  font-size: 10.5px;
}

:global(.pro-landing .chip.row) {
  color: var(--info);
  border-color: color-mix(in srgb, var(--info) 42%, transparent);
  background: transparent;
}

:global(.pro-landing .chip.col) {
  color: var(--violet);
  border-color: color-mix(in srgb, var(--violet) 42%, transparent);
  background: transparent;
}

:global(.pro-landing .chip.val) {
  color: var(--good);
  border-color: color-mix(in srgb, var(--good) 42%, transparent);
  background: transparent;
}

:global(.pro-landing .chip-label) {
  color: var(--text-dim);
  font-size: 10.5px;
}

:global(.pro-landing .gantt-head),
:global(.pro-landing .gantt-row) {
  display: grid;
  grid-template-columns: 170px 1fr;
}

:global(.pro-landing .gantt-head) {
  border-bottom: 1px solid var(--line);
  color: var(--text-dim);
  background: rgba(255, 255, 255, 0.02);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

:global(.pro-landing .gh-label),
:global(.pro-landing .gr-label) {
  padding: 10px 12px;
  border-right: 1px solid var(--line);
}

:global(.pro-landing .gh-weeks) {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
}

:global(.pro-landing .gh-weeks span) {
  padding: 10px 0;
  border-right: 1px solid var(--line);
  text-align: center;
}

:global(.pro-landing .gh-weeks .today) {
  color: var(--accent);
}

:global(.pro-landing .gantt-row) {
  min-width: 650px;
  border-bottom: 1px solid var(--line);
}

:global(.pro-landing .gr-label) {
  display: flex;
  gap: 8px;
  align-items: center;
  color: var(--text);
}

:global(.pro-landing .gr-label.child) {
  padding-left: 28px;
  color: var(--text-muted);
}

:global(.pro-landing .ind),
:global(.pro-landing .leg i) {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 2px;
}

:global(.pro-landing .gr-track) {
  position: relative;
  min-height: 39px;
  background-image: linear-gradient(90deg, var(--timeline-grid-line) 1px, transparent 1px);
  background-size: 12.5% 100%;
}

:global(.pro-landing .bar) {
  position: absolute;
  top: 9px;
  height: 20px;
  padding: 0 8px;
  overflow: hidden;
  border-radius: 4px;
  color: #210b06;
  font-size: 10px;
  font-weight: 700;
  line-height: 20px;
}

:global(.pro-landing .coral) { background: linear-gradient(90deg, var(--accent), #ff7757); }
:global(.pro-landing .amber) { background: linear-gradient(90deg, var(--accent-2), #ffd089); }
:global(.pro-landing .violet) { background: linear-gradient(90deg, var(--violet), #c4b5fd); }
:global(.pro-landing .teal) { background: linear-gradient(90deg, var(--teal), #5eead4); }
:global(.pro-landing .rose) { background: linear-gradient(90deg, var(--rose), #fda4af); }

:global(.pro-landing .gantt-today) {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background: var(--accent);
}

:global(.pro-landing .gantt-foot) {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  padding: 12px;
  color: var(--text-dim);
  font-size: 10.5px;
}

:global(.pro-landing .leg) {
  display: flex;
  gap: 6px;
  align-items: center;
}

:global(.pro-landing .gantt-summary) {
  margin-left: auto;
}

:global(.pro-landing .sheet-formula) {
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 8px 12px;
  border-bottom: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.02);
}

:global(.pro-landing .cell-ref) {
  min-width: 36px;
  padding: 3px 8px;
  border: 1px solid var(--line-strong);
  border-radius: 4px;
  color: var(--text-dim);
  text-align: center;
}

:global(.pro-landing .fx) {
  color: var(--accent);
  font-size: 14px;
  font-style: italic;
}

:global(.pro-landing .sheet-grid) {
  display: grid;
  grid-template-columns: 32px repeat(5, minmax(86px, 1fr));
  min-width: 560px;
}

:global(.pro-landing .sheet-grid > div) {
  position: relative;
  min-height: 33px;
  padding: 7px 10px;
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  color: var(--text);
  text-align: right;
}

:global(.pro-landing .col-h),
:global(.pro-landing .row-h) {
  color: var(--text-dim) !important;
  background: rgba(255, 255, 255, 0.025);
  font-size: 10px;
  font-weight: 700;
  text-align: center !important;
}

:global(.pro-landing .cell.left) {
  text-align: left;
}

:global(.pro-landing .cell.range),
:global(.pro-landing .cell.range-corner),
:global(.pro-landing .cell.total) {
  background: color-mix(in srgb, var(--accent) 9%, transparent);
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--accent) 35%, transparent);
}

:global(.pro-landing .cell.range-corner) {
  box-shadow: inset 0 0 0 1px var(--accent);
}

:global(.pro-landing .cell.total) {
  color: var(--accent);
  font-weight: 700;
}

:global(.pro-landing .cell.green) {
  color: var(--good);
}

:global(.pro-landing .fill-handle) {
  position: absolute;
  right: -3px;
  bottom: -3px;
  z-index: 2;
  width: 6px;
  height: 6px;
  border: 1px solid var(--bg-elev-2);
  background: var(--accent);
}

:global(.pro-landing .tree-row) {
  display: grid;
  grid-template-columns: 1.4fr 80px 100px 60px;
  align-items: center;
  min-width: 520px;
  border-bottom: 1px solid var(--line);
}

:global(.pro-landing .tree-row > div) {
  padding: 9px 12px;
  color: var(--text);
}

:global(.pro-landing .tree-row.head > div) {
  color: var(--text-dim);
  background: rgba(255, 255, 255, 0.02);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

:global(.pro-landing .tree-name) {
  display: flex;
  gap: 6px;
  align-items: center;
}

:global(.pro-landing .tree-name.open) {
  color: var(--accent);
}

:global(.pro-landing .tree-name.depth-1) {
  padding-left: 32px;
  color: var(--text-muted);
}

:global(.pro-landing .tree-row .num) {
  text-align: right;
}

:global(.pro-landing .actions) {
  color: var(--text-dim) !important;
  text-align: right;
}

:global(.pro-landing .tree-detail) {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  min-width: 520px;
  padding: 14px 18px;
  border-top: 1px solid color-mix(in srgb, var(--accent) 22%, transparent);
  border-bottom: 1px solid var(--line);
  background: color-mix(in srgb, var(--accent) 5%, transparent);
}

:global(.pro-landing .tree-detail .lbl) {
  color: var(--text-dim);
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

:global(.pro-landing .tree-detail .val) {
  color: var(--text);
  font-size: 12px;
}

:global(.pro-landing .tree-detail .accent) {
  color: var(--accent);
  font-weight: 700;
}

:global(.pro-landing .tree-detail .good) {
  color: var(--good);
}

:global(.pro-landing .audit-head) {
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  border-bottom: 1px solid var(--line);
  color: var(--text-muted);
  background: rgba(255, 255, 255, 0.02);
  font-family: var(--font-mono);
  font-size: 11px;
}

:global(.pro-landing .audit-head .actions) {
  display: flex;
  gap: 8px;
}

:global(.pro-landing .audit-head button) {
  padding: 4px 10px;
  border: 1px solid var(--line-strong);
  border-radius: 5px;
  color: var(--text-muted);
  background: transparent;
  font-family: var(--font-mono);
  font-size: 10.5px;
}

:global(.pro-landing .audit-head button.primary) {
  color: var(--accent);
  background: var(--accent-soft);
  border-color: var(--accent-soft);
}

:global(.pro-landing .audit-list) {
  padding: 4px 0;
}

:global(.pro-landing .audit-item) {
  display: grid;
  grid-template-columns: 88px 1fr auto;
  gap: 12px;
  align-items: center;
  padding: 11px 14px;
  border-bottom: 1px solid var(--line);
  font-family: var(--font-mono);
  font-size: 12px;
}

:global(.pro-landing .audit-item .time) {
  color: var(--text-dim);
  font-size: 10.5px;
}

:global(.pro-landing .audit-item .msg) {
  color: var(--text);
}

:global(.pro-landing .audit-item .tag) {
  padding: 2px 7px;
  border-radius: 3px;
  color: var(--info);
  background: color-mix(in srgb, var(--info) 12%, transparent);
  font-size: 9.5px;
  font-weight: 700;
}

:global(.pro-landing .audit-item .tag.add) {
  color: var(--good);
  background: color-mix(in srgb, var(--good) 12%, transparent);
}

:global(.pro-landing .audit-item .tag.undone) {
  color: var(--accent);
  background: var(--accent-soft);
}

:global(.pro-landing .audit-item .tag.reject) {
  color: var(--rose);
  background: color-mix(in srgb, var(--rose) 12%, transparent);
}

:global(.pro-landing .audit-item.undone .msg) {
  color: var(--text-dim);
  text-decoration: line-through;
}
</style>
