<template>
    <div id="usecases" class="use-cases">
        <section class="usecases-hero">
            <div class="container">
                <div class="eyebrow"><span class="eyebrow-dot"></span>Use Cases</div>
                <h2 class="section-title">Built for the hardest<br>data problems.</h2>
                <p class="section-sub">Every case below has been shipped by teams using RevoGrid in production. Not prototypes. Real products.</p>

                <div class="uc-tiles">
                    <article class="uc-tile">
                        <div class="uc-tile-icon">📋</div>
                        <h3 class="uc-tile-title">Project Tracker (ERP)</h3>
                        <p class="uc-tile-desc">Task management with priorities, progress bars, timelines, and grouped rows for ops teams.</p>
                    </article>
                    <article class="uc-tile">
                        <div class="uc-tile-icon">👥</div>
                        <h3 class="uc-tile-title">Customer Analytics</h3>
                        <p class="uc-tile-desc">Inline star ratings, avatar cells, segmentation filters, and column groups across 350+ rows.</p>
                    </article>
                    <article class="uc-tile">
                        <div class="uc-tile-icon">📊</div>
                        <h3 class="uc-tile-title">Analytics Platforms</h3>
                        <p class="uc-tile-desc">Pivot-ready, aggregation-first grids that scale to millions of rows.</p>
                    </article>
                    <article class="uc-tile">
                        <div class="uc-tile-icon">🗓️</div>
                        <h3 class="uc-tile-title">Operations Planning</h3>
                        <p class="uc-tile-desc">Gantt-style scheduling, resource allocation, and interactive timelines.</p>
                    </article>
                </div>
            </div>
        </section>

        <section class="uc-detail" id="uc-project-tracker">
            <div class="container">
                <div class="uc-detail-inner">
                    <div>
                        <div class="uc-detail-tag">Project Tracker · ERP</div>
                        <h2 class="uc-detail-title">ERP-grade task tracking, built on the grid.</h2>
                        <p class="uc-detail-desc">Real teams need more than a task list. RevoGrid powers ERP-style trackers with inline priority editing, progress visualization, groupable sections, and budget columns — all inside a live, virtualized grid.</p>
                        <div class="uc-features">
                            <div class="uc-feature"><span class="uc-feature-check">✓</span><span class="uc-feature-text"><strong>Row grouping</strong> — collapse and expand sections like "This Week" / "Next Week" with aggregated stats</span></div>
                            <div class="uc-feature"><span class="uc-feature-check">✓</span><span class="uc-feature-text"><strong>Inline cell editors</strong> — priority dropdowns, status selects, progress sliders — all native to the grid</span></div>
                            <div class="uc-feature"><span class="uc-feature-check">✓</span><span class="uc-feature-text"><strong>Progress column type</strong> — render bar + number inside a single cell without a custom component</span></div>
                            <div class="uc-feature"><span class="uc-feature-check">✓</span><span class="uc-feature-text"><strong>Timeline badges</strong> — date range rendering with conditional coloring based on deadline status</span></div>
                        </div>
                        <div class="uc-ctas">
                            <a href="/demo/" class="btn-primary-lg">See live demo</a>
                            <a href="/demo/" class="btn-secondary-lg">Read docs</a>
                        </div>
                    </div>

                    <div class="mock-panel">
                        <div class="mock-header">
                            <span class="mock-dot red"></span>
                            <span class="mock-dot yellow"></span>
                            <span class="mock-dot green"></span>
                            <span class="mock-title">Project Tracker · ERP-style</span>
                        </div>
                        <div class="pt-toolbar">
                            <div class="pt-search">Search task...</div>
                            <div class="pt-filter-pill"><strong>Owner</strong> All ▾</div>
                            <div class="pt-filter-pill"><strong>Priority</strong> All ▾</div>
                            <div class="pt-filter-pill"><strong>Status</strong> All ▾</div>
                            <div class="pt-add-btn">+ Add task</div>
                        </div>
                        <div class="pt-col-hdr">
                            <span>TASK</span><span>OWNER</span><span>PRIORITY</span><span>STATUS</span><span>PROGRESS</span><span>TIMELINE</span><span>BUDGET</span>
                        </div>
                        <div class="pt-group-hdr">
                            <span>▾ This Week</span><span class="pt-group-count">5 tasks</span>
                            <div class="pt-group-stats"><span>4 in progress</span><span>1 complete</span></div>
                        </div>
                        <div class="pt-row">
                            <div class="pt-task-cell">Convince AI to write better code</div><div class="center"><span class="pt-owner-av purple">JM</span></div><div><span class="pt-prio prio-high">High</span></div><div><span class="pt-status st-ip">● In Progress</span></div><div class="pt-prog"><span class="pt-prog-track"><span class="pt-prog-fill w20"></span></span><span class="pt-prog-num">20</span></div><div><span class="pt-tl tl-red">Mar 20-27</span></div><div class="pt-budget">$15,000</div>
                        </div>
                        <div class="pt-row">
                            <div class="pt-task-cell">Convert office plants to React components</div><div class="center"><span class="pt-owner-av pink">SP</span></div><div><span class="pt-prio prio-medium">Medium</span></div><div><span class="pt-status st-complete">● Complete</span></div><div class="pt-prog"><span class="pt-prog-track"><span class="pt-prog-fill w50"></span></span><span class="pt-prog-num">50</span></div><div><span class="pt-tl tl-yellow">Mar 20-27</span></div><div class="pt-budget">$15,000</div>
                        </div>
                        <div class="pt-row">
                            <div class="pt-task-cell">Humans: 1, Code: 0!</div><div class="center"><span class="pt-owner-av teal">LV</span></div><div><span class="pt-prio prio-low">Low</span></div><div><span class="pt-status st-ip">● In Progress</span></div><div class="pt-prog"><span class="pt-prog-track"><span class="pt-prog-fill w100"></span></span><span class="pt-prog-num">100</span></div><div><span class="pt-tl tl-green">Mar 20-27</span></div><div class="pt-budget">$15,000</div>
                        </div>
                        <div class="pt-row">
                            <div class="pt-task-cell">Redesign the company website</div><div class="center"><span class="pt-owner-av amber">YL</span></div><div><span class="pt-prio prio-high">High</span></div><div><span class="pt-status st-ip">● In Progress</span></div><div class="pt-prog"><span class="pt-prog-track"><span class="pt-prog-fill w40"></span></span><span class="pt-prog-num">40</span></div><div><span class="pt-tl tl-red">Apr 13-</span></div><div class="pt-budget">$12,000</div>
                        </div>
                        <div class="pt-row">
                            <div class="pt-task-cell">Migrate to cloud infrastructure</div><div class="center"><span class="pt-owner-av violet">MA</span></div><div><span class="pt-prio prio-high">High</span></div><div><span class="pt-status st-complete">● Complete</span></div><div class="pt-prog"><span class="pt-prog-track"><span class="pt-prog-fill w100"></span></span><span class="pt-prog-num">100</span></div><div><span class="pt-tl tl-green">May 7-14</span></div><div class="pt-budget">$15,000</div>
                        </div>
                        <div class="pt-group-hdr orange">
                            <span>▾ Next Week</span><span class="pt-group-count">3 tasks</span>
                            <div class="pt-group-stats"><span>1 in progress</span><span>2 complete</span></div>
                        </div>
                        <div class="pt-row">
                            <div class="pt-task-cell">Teach rubber duck to debug code</div><div class="center"><span class="pt-owner-av rose">RK</span></div><div><span class="pt-prio prio-medium">Medium</span></div><div><span class="pt-status st-ns">● Not Started</span></div><div class="pt-prog"><span class="pt-prog-track"><span class="pt-prog-fill w50"></span></span><span class="pt-prog-num">50</span></div><div><span class="pt-tl tl-yellow">Mar 28-Apr 4</span></div><div class="pt-budget">$8,000</div>
                        </div>
                        <div class="pt-row">
                            <div class="pt-task-cell">Develop new API endpoints</div><div class="center"><span class="pt-owner-av lime">CW</span></div><div><span class="pt-prio prio-medium">Medium</span></div><div><span class="pt-status st-complete">● Complete</span></div><div class="pt-prog"><span class="pt-prog-track"><span class="pt-prog-fill w100"></span></span><span class="pt-prog-num">100</span></div><div><span class="pt-tl tl-green">Apr 21-28</span></div><div class="pt-budget">$7,000</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="uc-detail" id="uc-customer-analytics">
            <div class="container">
                <div class="uc-detail-inner reverse">
                    <div>
                        <div class="uc-detail-tag">Customer Analytics</div>
                        <h2 class="uc-detail-title">Inline visualizations across real customer data.</h2>
                        <p class="uc-detail-desc">Customer-facing analytics grids need more than just numbers. RevoGrid renders avatar cells, star rating columns, segmentation pills, and column groups — all with performant re-rendering as filters update.</p>
                        <div class="uc-features">
                            <div class="uc-feature"><span class="uc-feature-check">✓</span><span class="uc-feature-text"><strong>Avatar &amp; name column</strong> — custom cell renderer combining image + text in one column</span></div>
                            <div class="uc-feature"><span class="uc-feature-check">✓</span><span class="uc-feature-text"><strong>Star rating renderer</strong> — interactive or display-only star columns — no third-party dependency</span></div>
                            <div class="uc-feature"><span class="uc-feature-check">✓</span><span class="uc-feature-text"><strong>Column groups</strong> — visually group related columns (PERSONAL, SPENDING) with a shared header row</span></div>
                            <div class="uc-feature"><span class="uc-feature-check">✓</span><span class="uc-feature-text"><strong>Inline filter toolbar</strong> — per-column filter expressions with live row count and spend aggregation</span></div>
                        </div>
                        <div class="uc-ctas">
                            <a href="/demo/" class="btn-primary-lg">See live demo</a>
                            <a href="/demo/" class="btn-secondary-lg">Read docs</a>
                        </div>
                    </div>

                    <div class="mock-panel wide-mock">
                        <div class="mock-header">
                            <span class="mock-dot red"></span>
                            <span class="mock-dot yellow"></span>
                            <span class="mock-dot green"></span>
                            <span class="mock-title">Customer Analytics · 350 rows · 11 cols</span>
                        </div>
                        <div class="ca-toolbar">
                            <div class="ca-search"><span>Gender eq "Female"...</span></div>
                            <div class="ca-tb-btn">Reset</div>
                            <div class="ca-tb-btn">Columns ▾</div>
                            <div class="ca-stat-chip">Rows <strong>350/350</strong></div>
                            <div class="ca-stat-chip">Spend <strong>$295.9K</strong></div>
                            <div class="ca-export-btn">Export</div>
                        </div>
                        <div class="ca-hint">↕ Drag columns here to group by row.</div>
                        <div class="ca-col-group">
                            <div class="ca-cg-cell span-2"></div>
                            <div class="ca-cg-span span-5">PERSONAL</div>
                            <div class="ca-cg-span span-2 blue-group">SPENDING</div>
                        </div>
                        <div class="ca-col-hdr">
                            <span>☐</span><span>ID</span><span>CUSTOMER</span><span>GENDER</span><span>CITY</span><span>AGE</span><span>MEMBERSHIP</span><span>LTV</span><span>AVG RATING</span>
                        </div>
                        <div class="ca-rows">
                            <div class="ca-row"><div class="ca-cell">☐</div><div class="ca-cell ca-id">101</div><div class="ca-cell ca-name-cell"><span class="ca-avatar purple">FN</span><span>F. Newman</span></div><div class="ca-cell"><span class="ca-gpill ca-female">● Female</span></div><div class="ca-cell ca-city">New York</div><div class="ca-cell ca-age">29</div><div class="ca-cell"><span class="ca-mpill ca-gold">● Gold</span></div><div class="ca-cell ca-ltv">$1,680</div><div class="ca-cell"><span class="ca-stars"><span class="ca-star f">★</span><span class="ca-star f">★</span><span class="ca-star f">★</span><span class="ca-star f">★</span><span class="ca-star e">★</span><span class="ca-rnum">4.6</span></span></div></div>
                            <div class="ca-row"><div class="ca-cell">☐</div><div class="ca-cell ca-id">102</div><div class="ca-cell ca-name-cell"><span class="ca-avatar teal">ML</span><span>M. Lee</span></div><div class="ca-cell"><span class="ca-gpill ca-male">● Male</span></div><div class="ca-cell ca-city">Los Angeles</div><div class="ca-cell ca-age">34</div><div class="ca-cell"><span class="ca-mpill ca-silver">● Silver</span></div><div class="ca-cell ca-ltv">$937</div><div class="ca-cell"><span class="ca-stars"><span class="ca-star f">★</span><span class="ca-star f">★</span><span class="ca-star f">★</span><span class="ca-star f">★</span><span class="ca-star e">★</span><span class="ca-rnum">4.1</span></span></div></div>
                            <div class="ca-row"><div class="ca-cell">☐</div><div class="ca-cell ca-id">103</div><div class="ca-cell ca-name-cell"><span class="ca-avatar pink">FC</span><span>F. Chen</span></div><div class="ca-cell"><span class="ca-gpill ca-female">● Female</span></div><div class="ca-cell ca-city">Chicago</div><div class="ca-cell ca-age">43</div><div class="ca-cell"><span class="ca-mpill ca-bronze">● Bronze</span></div><div class="ca-cell ca-ltv">$511</div><div class="ca-cell"><span class="ca-stars"><span class="ca-star f">★</span><span class="ca-star f">★</span><span class="ca-star f">★</span><span class="ca-star e">★</span><span class="ca-star e">★</span><span class="ca-rnum">3.4</span></span></div></div>
                            <div class="ca-row"><div class="ca-cell">☐</div><div class="ca-cell ca-id">104</div><div class="ca-cell ca-name-cell"><span class="ca-avatar violet">MS</span><span>M. Smith</span></div><div class="ca-cell"><span class="ca-gpill ca-male">● Male</span></div><div class="ca-cell ca-city">San Francisco</div><div class="ca-cell ca-age">30</div><div class="ca-cell"><span class="ca-mpill ca-gold">● Gold</span></div><div class="ca-cell ca-ltv">$2,220</div><div class="ca-cell"><span class="ca-stars"><span class="ca-star f">★</span><span class="ca-star f">★</span><span class="ca-star f">★</span><span class="ca-star f">★</span><span class="ca-star e">★</span><span class="ca-rnum">4.7</span></span></div></div>
                            <div class="ca-row"><div class="ca-cell">☐</div><div class="ca-cell ca-id">105</div><div class="ca-cell ca-name-cell"><span class="ca-avatar amber">MM</span><span>M. Muller</span></div><div class="ca-cell"><span class="ca-gpill ca-male">● Male</span></div><div class="ca-cell ca-city">Miami</div><div class="ca-cell ca-age">27</div><div class="ca-cell"><span class="ca-mpill ca-silver">● Silver</span></div><div class="ca-cell ca-ltv">$864</div><div class="ca-cell"><span class="ca-stars"><span class="ca-star f">★</span><span class="ca-star f">★</span><span class="ca-star f">★</span><span class="ca-star f">★</span><span class="ca-star e">★</span><span class="ca-rnum">4.0</span></span></div></div>
                            <div class="ca-row"><div class="ca-cell">☐</div><div class="ca-cell ca-id">106</div><div class="ca-cell ca-name-cell"><span class="ca-avatar rose">FH</span><span>F. Hayes</span></div><div class="ca-cell"><span class="ca-gpill ca-female">● Female</span></div><div class="ca-cell ca-city">Houston</div><div class="ca-cell ca-age">37</div><div class="ca-cell"><span class="ca-mpill ca-bronze">● Bronze</span></div><div class="ca-cell ca-ltv">$441</div><div class="ca-cell"><span class="ca-stars"><span class="ca-star f">★</span><span class="ca-star f">★</span><span class="ca-star f">★</span><span class="ca-star e">★</span><span class="ca-star e">★</span><span class="ca-rnum">3.1</span></span></div></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="uc-detail" id="uc-analytics">
            <div class="container">
                <div class="uc-detail-inner">
                    <div>
                        <div class="uc-detail-tag">Analytics Platforms</div>
                        <h2 class="uc-detail-title">Pivot-ready, aggregation-first.</h2>
                        <p class="uc-detail-desc">Analytics tools need more than a table — they need grouping, aggregation, sorting across millions of records, and on-the-fly pivoting. RevoGrid handles all of it without a server round-trip.</p>
                        <div class="uc-features">
                            <div class="uc-feature"><span class="uc-feature-check">✓</span><span class="uc-feature-text"><strong>Column grouping &amp; pivoting</strong> — drag-and-drop column groupings with auto-aggregation</span></div>
                            <div class="uc-feature"><span class="uc-feature-check">✓</span><span class="uc-feature-text"><strong>Custom aggregation functions</strong> — sum, avg, min/max, or bring your own</span></div>
                            <div class="uc-feature"><span class="uc-feature-check">✓</span><span class="uc-feature-text"><strong>Inline spark charts</strong> — render mini bar, line, or area charts in any cell</span></div>
                            <div class="uc-feature"><span class="uc-feature-check">✓</span><span class="uc-feature-text"><strong>Export to CSV / Excel</strong> — one-line API for full-data exports including filtered views</span></div>
                        </div>
                        <div class="uc-ctas">
                            <a href="/demo/pivot" class="btn-primary-lg">See live demo</a>
                            <a href="https://pro.rv-grid.com/guides/pivot" class="btn-secondary-lg">Read docs</a>
                        </div>
                    </div>

                    <div class="mock-panel">
                        <div class="mock-header">
                            <span class="mock-dot red"></span>
                            <span class="mock-dot yellow"></span>
                            <span class="mock-dot green"></span>
                            <span class="mock-title">Revenue Analytics · Q1</span>
                        </div>
                        <div class="analytics-row header"><div>SEGMENT</div><div>REVENUE</div><div>GROWTH</div><div>SHARE</div></div>
                        <div class="analytics-row"><div class="bar-cell"><span>Enterprise</span><span class="bar-track"><span class="bar-fill w82"></span></span></div><div class="num-cell">$4.2M</div><div class="num-cell up">+18%</div><div class="num-cell">42%</div></div>
                        <div class="analytics-row"><div class="bar-cell"><span>Mid-Market</span><span class="bar-track"><span class="bar-fill w55"></span></span></div><div class="num-cell">$2.8M</div><div class="num-cell up">+24%</div><div class="num-cell">28%</div></div>
                        <div class="analytics-row"><div class="bar-cell"><span>SMB</span><span class="bar-track"><span class="bar-fill w29"></span></span></div><div class="num-cell">$1.5M</div><div class="num-cell down">-3%</div><div class="num-cell">15%</div></div>
                        <div class="analytics-row"><div class="bar-cell"><span>Self-serve</span><span class="bar-track"><span class="bar-fill w15"></span></span></div><div class="num-cell">$0.8M</div><div class="num-cell up">+41%</div><div class="num-cell">8%</div></div>
                        <div class="analytics-row"><div class="bar-cell"><span>Partner</span><span class="bar-track"><span class="bar-fill w7"></span></span></div><div class="num-cell">$0.4M</div><div class="num-cell up">+12%</div><div class="num-cell">4%</div></div>
                        <div class="analytics-row total"><div class="bar-cell"><strong>Total</strong></div><div class="num-cell strong">$9.7M</div><div class="num-cell up strong">+19%</div><div class="num-cell strong">100%</div></div>
                    </div>
                </div>
            </div>
        </section>

        <section class="uc-detail" id="uc-ops">
            <div class="container">
                <div class="uc-detail-inner reverse">
                    <div>
                        <div class="uc-detail-tag">Operations Planning</div>
                        <h2 class="uc-detail-title">Scheduling and resource planning, reimagined.</h2>
                        <p class="uc-detail-desc">Operations teams need Gantt-style timelines, capacity views, and drag-to-schedule interactions. Build it on RevoGrid with custom column types and drag-and-drop plugins.</p>
                        <div class="uc-features">
                            <div class="uc-feature"><span class="uc-feature-check">✓</span><span class="uc-feature-text"><strong>Custom cell renderers</strong> — build Gantt bars, timelines, and capacity meters as components</span></div>
                            <div class="uc-feature"><span class="uc-feature-check">✓</span><span class="uc-feature-text"><strong>Drag &amp; drop rows</strong> — reorder tasks and resources with native row dragging</span></div>
                            <div class="uc-feature"><span class="uc-feature-check">✓</span><span class="uc-feature-text"><strong>Frozen columns</strong> — keep resource labels visible while scrolling the timeline</span></div>
                            <div class="uc-feature"><span class="uc-feature-check">✓</span><span class="uc-feature-text"><strong>Column resize &amp; reorder</strong> — users can adapt the view to their workflow</span></div>
                        </div>
                        <div class="uc-ctas">
                            <a href="/demo/gantt" class="btn-primary-lg">See live demo</a>
                            <a href="https://pro.rv-grid.com/guides/gantt/" class="btn-secondary-lg">Read docs</a>
                        </div>
                    </div>

                    <div class="mock-panel">
                        <div class="mock-header">
                            <span class="mock-dot red"></span>
                            <span class="mock-dot yellow"></span>
                            <span class="mock-dot green"></span>
                            <span class="mock-title">Sprint Planner · Q2 2025</span>
                        </div>
                        <div class="gantt-row header">
                            <div class="gantt-label">RESOURCE</div>
                            <div class="gantt-months"><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span></div>
                        </div>
                        <div class="gantt-row"><div class="gantt-label">Backend Team</div><div class="gantt-track"><span class="gantt-bar bar-blue gantt-1"></span></div></div>
                        <div class="gantt-row"><div class="gantt-label">Frontend Team</div><div class="gantt-track"><span class="gantt-bar bar-green gantt-2"></span></div></div>
                        <div class="gantt-row"><div class="gantt-label">Design</div><div class="gantt-track"><span class="gantt-bar bar-purple gantt-3"></span></div></div>
                        <div class="gantt-row"><div class="gantt-label">QA</div><div class="gantt-track"><span class="gantt-bar bar-orange gantt-4"></span></div></div>
                        <div class="gantt-row"><div class="gantt-label">DevOps</div><div class="gantt-track"><span class="gantt-bar bar-blue gantt-5"></span></div></div>
                        <div class="gantt-row"><div class="gantt-label">Data Eng.</div><div class="gantt-track"><span class="gantt-bar bar-green gantt-6"></span></div></div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.use-cases {
    --uc-bg: var(--vp-c-bg);
    --uc-bg2: var(--vp-c-bg-soft);
    --uc-bg3: var(--vp-c-bg-alt);
    --uc-surface: color-mix(in srgb, var(--vp-c-brand-1) 5%, transparent);
    --uc-surface2: color-mix(in srgb, var(--vp-c-brand-1) 8%, transparent);
    --uc-border: var(--vp-c-divider);
    --uc-border2: var(--vp-c-gutter);
    --uc-teal: var(--vp-c-brand-1);
    --uc-teal-dim: var(--vp-c-brand-soft);
    --uc-teal-glow: color-mix(in srgb, var(--vp-c-brand-1) 32%, transparent);
    --uc-blue: #1d4ed8;
    --uc-blue-glow: rgba(29, 78, 216, 0.24);
    --uc-text: var(--vp-c-text-1);
    --uc-text-dim: var(--vp-c-text-2);
    --uc-text-dimmer: var(--vp-c-text-3);
    --uc-green: #047857;
    --uc-red: #be123c;
    --uc-orange: #b45309;

    border-top: 1px solid var(--uc-border);
    background: var(--uc-bg);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 48px;

    @media (max-width: 640px) {
        padding: 0 24px;
    }
}

.usecases-hero {
    padding: 96px 0 60px;
    background: var(--uc-bg);
    text-align: center;
}

.eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    background: var(--uc-teal-dim);
    border: 1px solid var(--uc-teal-glow);
    color: var(--uc-teal);
    font-size: 11px;
    font-weight: 600;
    font-family: var(--vp-font-family-mono);
    padding: 4px 12px;
    border-radius: 100px;
    margin-bottom: 20px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
}

.eyebrow-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--uc-teal);
    animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
}

.section-title {
    max-width: 520px;
    margin: 0 auto 16px;
    font-size: clamp(28px, 3vw, 42px);
    font-weight: 700;
    letter-spacing: -0.8px;
    line-height: 1.1;
    color: var(--uc-text);
}

.section-sub {
    color: var(--uc-text-dim);
    font-size: 16px;
    line-height: 1.75;
    max-width: 520px;
    margin: 0 auto;
}

.uc-tiles {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1px;
    background: var(--uc-border);
    border: 1px solid var(--uc-border);
    border-radius: 14px;
    overflow: hidden;
    margin-top: 52px;
    text-align: left;

    @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 560px) {
        grid-template-columns: 1fr;
    }
}

.uc-tile {
    background: var(--uc-bg);
    padding: 32px 26px;
    transition: background 0.18s;

    &:hover {
        background: var(--uc-bg2);
    }
}

.uc-tile-icon {
    width: 40px;
    height: 40px;
    border-radius: 9px;
    background: var(--uc-teal-dim);
    border: 1px solid var(--uc-teal-glow);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    margin-bottom: 16px;
}

.uc-tile-title {
    font-size: 15px;
    font-weight: 600;
    color: var(--uc-text);
    margin-bottom: 7px;
}

.uc-tile-desc {
    font-size: 13px;
    color: var(--uc-text-dim);
    line-height: 1.6;
    margin: 0;
}

.uc-detail {
    padding: 92px 0;
    border-top: 1px solid var(--uc-border);

    &:nth-child(even) {
        background: var(--uc-bg2);
    }
}

.uc-detail-inner {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 72px;
    align-items: center;

    &.reverse {
        direction: rtl;

        > * {
            direction: ltr;
        }
    }

    @media (max-width: 980px) {
        grid-template-columns: 1fr;
        gap: 44px;

        &.reverse {
            direction: ltr;
        }
    }
}

.uc-detail-tag {
    font-size: 11px;
    font-family: var(--vp-font-family-mono);
    font-weight: 600;
    color: var(--uc-teal);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 12px;
}

.uc-detail-title {
    font-size: clamp(24px, 2.8vw, 36px);
    font-weight: 700;
    letter-spacing: -0.8px;
    line-height: 1.1;
    color: var(--uc-text);
    margin-bottom: 14px;
}

.uc-detail-desc {
    font-size: 16px;
    color: var(--uc-text-dim);
    line-height: 1.75;
    margin-bottom: 24px;
}

.uc-features {
    display: flex;
    flex-direction: column;
    gap: 11px;
    margin-bottom: 28px;
}

.uc-feature {
    display: flex;
    align-items: flex-start;
    gap: 10px;
}

.uc-feature-check {
    width: 19px;
    height: 19px;
    border-radius: 5px;
    flex-shrink: 0;
    margin-top: 1px;
    background: var(--uc-teal-dim);
    border: 1px solid var(--uc-teal-glow);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    color: var(--uc-teal);
    font-weight: 700;
}

.uc-feature-text {
    font-size: 14px;
    color: var(--uc-text-dim);
    line-height: 1.55;

    strong {
        color: var(--uc-text);
        font-weight: 600;
    }
}

.uc-ctas {
    display: flex;
    gap: 11px;
    flex-wrap: wrap;
}

.btn-primary-lg,
.btn-secondary-lg {
    padding: 10px 20px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
}

.btn-primary-lg {
    background: var(--uc-teal);
    color: #fff;
    border: none;
    box-shadow: 0 4px 14px color-mix(in srgb, var(--uc-teal) 28%, transparent);

    &:hover {
        filter: brightness(1.08);
        transform: translateY(-1px);
    }
}

.btn-secondary-lg {
    background: var(--uc-surface2);
    border: 1px solid var(--uc-border2);
    color: var(--uc-text);

    &:hover {
        background: var(--uc-bg3);
    }
}

.mock-panel {
    min-width: 0;
    background: var(--uc-bg);
    border: 1px solid var(--uc-border2);
    border-radius: 13px;
    overflow: hidden;
    box-shadow: 0 12px 40px rgba(12, 40, 110, 0.11), 0 4px 12px rgba(12, 40, 110, 0.06);

    &::before {
        content: '';
        display: block;
        height: 2px;
        background: linear-gradient(90deg, transparent, var(--uc-teal) 40%, #3b82f6, transparent);
    }
}

.mock-header {
    background: var(--uc-bg2);
    padding: 10px 14px;
    display: flex;
    align-items: center;
    gap: 6px;
    border-bottom: 1px solid var(--uc-border);
}

.mock-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    display: inline-block;

    &.red { background: #ff5f57; }
    &.yellow { background: #febc2e; }
    &.green { background: #28c840; }
}

.mock-title {
    font-size: 11px;
    font-family: var(--vp-font-family-mono);
    color: var(--uc-text-dimmer);
    margin-left: 5px;
}

.center {
    display: flex;
    justify-content: center;
}

.pt-toolbar {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 9px 12px;
    border-bottom: 1px solid var(--uc-border);
    flex-wrap: wrap;
    background: var(--uc-bg);
}

.pt-search {
    display: flex;
    align-items: center;
    gap: 5px;
    background: var(--uc-surface);
    border: 1px solid var(--uc-border2);
    border-radius: 5px;
    padding: 4px 9px;
    font-size: 11px;
    color: var(--uc-text-dimmer);
    flex: 1;
    min-width: 80px;

    &::before {
        content: '⌕';
        color: var(--uc-text-dimmer);
    }
}

.pt-filter-pill {
    border: 1px solid var(--uc-border2);
    border-radius: 5px;
    padding: 3px 7px;
    font-size: 10px;
    color: var(--uc-text-dim);
    background: var(--uc-bg);
    white-space: nowrap;

    strong {
        color: var(--uc-text);
        font-weight: 600;
    }
}

.pt-add-btn {
    background: var(--uc-teal);
    color: #fff;
    border-radius: 5px;
    padding: 4px 9px;
    font-size: 10px;
    font-weight: 700;
    margin-left: auto;
    white-space: nowrap;
}

.pt-col-hdr,
.pt-row {
    display: grid;
    grid-template-columns: minmax(120px, 1fr) 44px 56px 70px 88px 68px 50px;
    gap: 6px;
    align-items: center;
}

.pt-col-hdr {
    padding: 5px 12px;
    background: var(--uc-bg2);
    border-bottom: 1px solid var(--uc-border);
    font-size: 9px;
    font-weight: 700;
    color: var(--uc-text-dimmer);
    text-transform: uppercase;
    letter-spacing: 0.07em;
}

.pt-group-hdr {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 6px 12px;
    background: var(--uc-bg2);
    border-bottom: 1px solid var(--uc-border);
    border-left: 3px solid var(--uc-teal);
    font-size: 11px;
    font-weight: 700;
    color: var(--uc-text);

    &.orange {
        border-left-color: #d97706;
    }
}

.pt-group-count {
    font-size: 10px;
    font-weight: 400;
    color: var(--uc-text-dimmer);
}

.pt-group-stats {
    margin-left: auto;
    font-size: 9px;
    color: var(--uc-text-dimmer);
    display: flex;
    gap: 8px;
}

.pt-row {
    padding: 6px 12px;
    border-bottom: 1px solid var(--uc-border);
    font-size: 11px;
    transition: background 0.1s;

    &:hover {
        background: var(--uc-surface);
    }
}

.pt-task-cell {
    font-size: 11px;
    font-weight: 500;
    color: var(--uc-text);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.pt-owner-av,
.ca-avatar {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 7px;
    font-weight: 800;
    color: #fff;
}

.purple { background: #6366f1; }
.pink { background: #ec4899; }
.teal { background: #10b981; }
.amber { background: #f59e0b; }
.violet { background: #8b5cf6; }
.rose { background: #ef4444; }
.lime { background: #84cc16; }

.pt-prio,
.pt-status {
    display: inline-flex;
    align-items: center;
    gap: 2px;
    padding: 2px 6px;
    border-radius: 100px;
    font-size: 9px;
    font-weight: 600;
    white-space: nowrap;
}

.prio-high { background: rgba(190, 18, 60, 0.1); color: #be123c; border: 1px solid rgba(190, 18, 60, 0.2); }
.prio-medium { background: rgba(180, 83, 9, 0.1); color: #b45309; border: 1px solid rgba(180, 83, 9, 0.2); }
.prio-low { background: rgba(4, 120, 87, 0.1); color: #047857; border: 1px solid rgba(4, 120, 87, 0.2); }
.st-ip { background: rgba(180, 83, 9, 0.09); color: #b45309; border: 1px solid rgba(180, 83, 9, 0.2); }
.st-complete { background: rgba(4, 120, 87, 0.09); color: #047857; border: 1px solid rgba(4, 120, 87, 0.2); }
.st-ns { background: var(--uc-surface2); color: var(--uc-text-dimmer); border: 1px solid var(--uc-border2); }

.pt-prog {
    display: flex;
    align-items: center;
    gap: 4px;
}

.pt-prog-track,
.bar-track {
    flex: 1;
    background: var(--uc-surface2);
    border-radius: 100px;
    overflow: hidden;
}

.pt-prog-track {
    height: 4px;
}

.pt-prog-fill,
.bar-fill {
    height: 100%;
    border-radius: 100px;
    display: block;
}

.pt-prog-fill {
    background: var(--uc-teal);
}

.pt-prog-num {
    font-size: 9px;
    font-family: var(--vp-font-family-mono);
    color: var(--uc-text-dimmer);
    width: 18px;
    flex-shrink: 0;
    text-align: right;
}

.pt-tl {
    display: inline-block;
    padding: 2px 5px;
    border-radius: 4px;
    font-size: 8px;
    font-weight: 600;
    white-space: nowrap;
}

.tl-green { background: rgba(4, 120, 87, 0.12); color: #047857; }
.tl-red { background: rgba(190, 18, 60, 0.1); color: #be123c; }
.tl-yellow { background: rgba(180, 83, 9, 0.1); color: #b45309; }

.pt-budget {
    font-size: 10px;
    font-family: var(--vp-font-family-mono);
    color: var(--uc-text-dim);
    text-align: right;
}

.ca-toolbar {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 7px 12px;
    border-bottom: 1px solid var(--uc-border);
    background: var(--uc-bg);
}

.ca-search {
    flex: 1;
    min-width: 0;
    border: 1px solid var(--uc-border2);
    border-radius: 5px;
    padding: 3px 8px;
    font-size: 10px;
    color: var(--uc-text-dimmer);
    font-family: var(--vp-font-family-mono);
    display: flex;
    align-items: center;
    gap: 4px;
    overflow: hidden;

    &::before {
        content: '⌕';
    }

    span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}

.ca-tb-btn,
.ca-stat-chip {
    padding: 3px 8px;
    border-radius: 5px;
    font-size: 10px;
    border: 1px solid var(--uc-border2);
    color: var(--uc-text-dim);
    background: var(--uc-bg);
    white-space: nowrap;
}

.ca-tb-btn {
    font-weight: 600;
}

.ca-stat-chip {
    font-weight: 500;

    strong {
        color: var(--uc-text);
    }
}

.ca-export-btn {
    padding: 3px 9px;
    border-radius: 5px;
    font-size: 10px;
    font-weight: 700;
    background: var(--uc-teal);
    color: #fff;
}

.ca-hint {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 5px 12px;
    border-bottom: 1px dashed var(--uc-border2);
    font-size: 10px;
    color: var(--uc-text-dimmer);
}

.ca-col-group,
.ca-col-hdr,
.ca-row {
    display: grid;
    grid-template-columns: 26px 24px 88px 56px 80px 24px 70px 70px 78px;
}

.ca-col-group {
    background: var(--uc-bg2);
    border-bottom: 1px solid var(--uc-border);
}

.ca-cg-cell,
.ca-cg-span {
    padding: 3px 7px;
    font-size: 9px;
    font-weight: 700;
    color: var(--uc-text-dimmer);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    border-right: 1px solid var(--uc-border);
}

.ca-cg-span {
    color: var(--uc-teal);
    border-bottom: 2px solid var(--uc-teal-glow);
}

.blue-group {
    color: var(--uc-blue);
    border-bottom-color: var(--uc-blue-glow);
}

.span-2 { grid-column: span 2; }
.span-5 { grid-column: span 5; }

.ca-col-hdr {
    background: var(--uc-surface);
    border-bottom: 1px solid var(--uc-border2);

    span {
        padding: 4px 7px;
        font-size: 9px;
        font-weight: 700;
        color: var(--uc-text-dimmer);
        text-transform: uppercase;
        letter-spacing: 0.06em;
    }
}

.ca-row {
    border-bottom: 1px solid var(--uc-border);
    align-items: center;
    transition: background 0.1s;

    &:hover {
        background: var(--uc-surface);
    }
}

.ca-cell {
    padding: 5px 7px;
    font-size: 11px;
    color: var(--uc-text-dim);
    min-width: 0;
}

.ca-id {
    font-family: var(--vp-font-family-mono);
    font-size: 10px;
    color: var(--uc-text-dimmer);
}

.ca-name-cell {
    display: flex;
    align-items: center;
    gap: 5px;

    span:last-child {
        font-size: 10px;
        color: var(--uc-text);
        font-weight: 500;
        white-space: nowrap;
    }
}

.ca-gpill,
.ca-mpill {
    display: inline-flex;
    align-items: center;
    gap: 2px;
    padding: 2px 6px;
    border-radius: 100px;
    font-size: 9px;
    font-weight: 600;
    white-space: nowrap;
}

.ca-female { background: rgba(190, 18, 60, 0.09); color: #be123c; border: 1px solid rgba(190, 18, 60, 0.2); }
.ca-male { background: rgba(29, 78, 216, 0.09); color: #1d4ed8; border: 1px solid rgba(29, 78, 216, 0.2); }
.ca-gold { background: rgba(180, 83, 9, 0.1); color: #b45309; border: 1px solid rgba(180, 83, 9, 0.2); }
.ca-silver { background: rgba(107, 114, 128, 0.1); color: #4b5563; border: 1px solid rgba(107, 114, 128, 0.2); }
.ca-bronze { background: rgba(120, 53, 15, 0.1); color: #92400e; border: 1px solid rgba(120, 53, 15, 0.2); }

.ca-ltv {
    font-family: var(--vp-font-family-mono);
    font-size: 11px;
    color: var(--uc-text);
    font-weight: 500;
}

.ca-age {
    font-family: var(--vp-font-family-mono);
    font-size: 11px;
    color: var(--uc-text-dim);
    text-align: center;
}

.ca-city {
    font-size: 10px;
    color: var(--uc-text);
    font-weight: 500;
}

.ca-stars {
    display: flex;
    align-items: center;
    gap: 1px;
}

.ca-star {
    font-size: 10px;
    line-height: 1;

    &.f { color: #d97706; }
    &.e { color: var(--uc-border2); }
}

.ca-rnum {
    font-size: 9px;
    font-family: var(--vp-font-family-mono);
    color: var(--uc-text-dim);
    margin-left: 2px;
}

.analytics-row {
    display: grid;
    grid-template-columns: 1fr 72px 56px 44px;
    padding: 7px 14px;
    border-bottom: 1px solid var(--uc-border);
    font-size: 12px;
    align-items: center;
    gap: 8px;

    &.header {
        background: var(--uc-bg2);
        font-size: 10px;
        color: var(--uc-text-dimmer);
        font-weight: 600;
    }

    &.total {
        border-top: 1px solid var(--uc-border2);
        background: var(--uc-surface);
    }
}

.bar-cell {
    display: flex;
    align-items: center;
    gap: 8px;

    span:first-child,
    strong {
        font-size: 12px;
        color: var(--uc-text);
        min-width: 72px;
        flex-shrink: 0;
    }
}

.bar-track {
    height: 5px;
}

.bar-fill {
    background: linear-gradient(90deg, var(--uc-teal), #3b82f6);
}

.num-cell {
    font-family: var(--vp-font-family-mono);
    text-align: right;
    color: var(--uc-text-dim);

    &.strong {
        font-weight: 700;
        color: var(--uc-text);
    }
}

.up { color: var(--uc-green); }
.down { color: var(--uc-red); }

.gantt-row {
    display: flex;
    align-items: center;
    padding: 7px 14px;
    border-bottom: 1px solid var(--uc-border);
    gap: 10px;

    &.header {
        background: var(--uc-surface);

        .gantt-label {
            font-size: 10px;
            color: var(--uc-text-dimmer);
            text-transform: uppercase;
            letter-spacing: 0.06em;
        }
    }
}

.gantt-label {
    font-size: 12px;
    color: var(--uc-text-dim);
    width: 88px;
    flex-shrink: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.gantt-months {
    flex: 1;
    display: flex;
    justify-content: space-between;
    font-size: 10px;
    color: var(--uc-text-dimmer);
    font-family: var(--vp-font-family-mono);
}

.gantt-track {
    flex: 1;
    position: relative;
    height: 20px;
}

.gantt-bar {
    position: absolute;
    height: 14px;
    border-radius: 4px;
    top: 3px;
}

.bar-blue { background: rgba(29, 78, 216, 0.65); }
.bar-green { background: rgba(4, 120, 87, 0.65); }
.bar-purple { background: rgba(109, 40, 217, 0.65); }
.bar-orange { background: rgba(180, 83, 9, 0.65); }

.w7 { width: 7%; }
.w15 { width: 15%; }
.w20 { width: 20%; }
.w29 { width: 29%; }
.w40 { width: 40%; }
.w50 { width: 50%; }
.w55 { width: 55%; }
.w82 { width: 82%; }
.w100 { width: 100%; }

.gantt-1 { left: 2%; width: 45%; }
.gantt-2 { left: 20%; width: 60%; }
.gantt-3 { left: 5%; width: 30%; }
.gantt-4 { left: 40%; width: 40%; }
.gantt-5 { left: 70%; width: 28%; }
.gantt-6 { left: 30%; width: 35%; }

@media (max-width: 760px) {
    .uc-detail {
        padding: 72px 0;
    }

    .mock-panel {
        overflow-x: auto;
    }

    .pt-toolbar,
    .ca-toolbar {
        min-width: 620px;
    }

    .pt-col-hdr,
    .pt-row,
    .ca-col-group,
    .ca-col-hdr,
    .ca-row {
        min-width: 620px;
    }

    .analytics-row {
        min-width: 420px;
    }
}
</style>
