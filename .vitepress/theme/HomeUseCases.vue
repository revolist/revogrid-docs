<template>
    <section class="use-cases">
        <!-- Header -->
        <div class="uc-hero">
            <div class="container">
                <div class="eyebrow">Use Cases</div>
                <h2 class="hero-title">Built for the <em>hardest</em><br>data problems.</h2>
                <p class="hero-sub">Teams building finance dashboards, ERP tools, analytics platforms, and operational software rely on RevoGrid to handle scale without sacrificing UX.</p>
                <div class="uc-nav">
                    <a href="#uc-finance" class="uc-pill"><span class="uc-pill-dot"></span>Financial Dashboards</a>
                    <a href="#uc-erp" class="uc-pill"><span class="uc-pill-dot"></span>ERP &amp; Internal Tools</a>
                    <a href="#uc-analytics" class="uc-pill"><span class="uc-pill-dot"></span>Analytics Platforms</a>
                    <a href="#uc-ops" class="uc-pill"><span class="uc-pill-dot"></span>Operations Planning</a>
                </div>
            </div>
        </div>

        <!-- Financial Dashboards -->
        <div class="uc-section" id="uc-finance">
            <div class="container">
                <div class="uc-inner">
                    <div class="uc-content">
                        <div class="section-eyebrow">Financial Dashboards</div>
                        <h3 class="uc-title">Real-time data, zero lag.</h3>
                        <p class="uc-desc">Finance teams need live P&amp;L, order books, and portfolio managers that update at tick frequency without freezing the UI. RevoGrid's virtual scroll and batch rendering make this possible — even at 500K+ rows.</p>
                        <ul class="uc-features">
                            <li class="uc-feature">
                                <span class="uc-check">✓</span>
                                <span><strong>60fps live updates</strong> — batch cell updates without re-rendering the whole grid</span>
                            </li>
                            <li class="uc-feature">
                                <span class="uc-check">✓</span>
                                <span><strong>Conditional cell styling</strong> — flash red/green on price movements, custom renderers per column</span>
                            </li>
                            <li class="uc-feature">
                                <span class="uc-check">✓</span>
                                <span><strong>Pinned rows &amp; columns</strong> — lock headers, totals, and key tickers in view</span>
                            </li>
                            <li class="uc-feature">
                                <span class="uc-check">✓</span>
                                <span><strong>Virtual scroll</strong> — render only visible rows; handle millions of data points</span>
                            </li>
                        </ul>
                        <div class="uc-ctas">
                            <a href="/demo/" class="btn-primary">See live demo</a>
                            <a href="/guide/" class="btn-secondary">Read docs</a>
                        </div>
                    </div>
                    <div class="uc-visual">
                        <div class="mock-panel">
                            <div class="mock-header">
                                <span class="mock-dot" style="background:#ff5f57"></span>
                                <span class="mock-dot" style="background:#febc2e"></span>
                                <span class="mock-dot" style="background:#28c840"></span>
                                <span class="mock-title">Portfolio Dashboard · Live</span>
                            </div>
                            <div class="mock-body">
                                <div class="fin-stats">
                                    <div class="fin-stat">
                                        <div class="fin-label">Total P&amp;L</div>
                                        <div class="fin-value">$2.4M</div>
                                        <div class="fin-delta up">↑ 3.2%</div>
                                    </div>
                                    <div class="fin-stat">
                                        <div class="fin-label">Open Positions</div>
                                        <div class="fin-value">142</div>
                                        <div class="fin-delta dim">across 8 desks</div>
                                    </div>
                                    <div class="fin-stat">
                                        <div class="fin-label">Day P&amp;L</div>
                                        <div class="fin-value">$184K</div>
                                        <div class="fin-delta up">↑ 1.8%</div>
                                    </div>
                                    <div class="fin-stat">
                                        <div class="fin-label">Risk Score</div>
                                        <div class="fin-value">4.2</div>
                                        <div class="fin-delta down">↓ Low</div>
                                    </div>
                                </div>
                                <div class="grid-row grid-header">
                                    <span class="col-ticker">TICKER</span>
                                    <span class="col-name">NAME</span>
                                    <span class="col-price">PRICE</span>
                                    <span class="col-chg">CHG%</span>
                                </div>
                                <div class="grid-row"><span class="col-ticker accent">AAPL</span><span class="col-name">Apple Inc.</span><span class="col-price">$213.48</span><span class="col-chg up">+1.24%</span></div>
                                <div class="grid-row"><span class="col-ticker accent">MSFT</span><span class="col-name">Microsoft Corp.</span><span class="col-price">$422.90</span><span class="col-chg up">+0.87%</span></div>
                                <div class="grid-row"><span class="col-ticker accent">NVDA</span><span class="col-name">NVIDIA Corp.</span><span class="col-price">$875.32</span><span class="col-chg down">-2.11%</span></div>
                                <div class="grid-row"><span class="col-ticker accent">AMZN</span><span class="col-name">Amazon.com Inc.</span><span class="col-price">$184.07</span><span class="col-chg up">+3.40%</span></div>
                                <div class="grid-row"><span class="col-ticker accent">GOOGL</span><span class="col-name">Alphabet Class A</span><span class="col-price">$175.94</span><span class="col-chg down">-0.42%</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- ERP -->
        <div class="uc-section alt" id="uc-erp">
            <div class="container">
                <div class="uc-inner reverse">
                    <div class="uc-content">
                        <div class="section-eyebrow">ERP &amp; Internal Tools</div>
                        <h3 class="uc-title">Inline editing at enterprise scale.</h3>
                        <p class="uc-desc">Internal ops teams don't want to click into modals to edit a field. RevoGrid brings spreadsheet-level editing to web apps — inline, validated, and bulk-capable — without the engineering overhead.</p>
                        <ul class="uc-features">
                            <li class="uc-feature">
                                <span class="uc-check">✓</span>
                                <span><strong>Inline cell editing</strong> — custom editors per column: text, select, date, checkbox, numeric</span>
                            </li>
                            <li class="uc-feature">
                                <span class="uc-check">✓</span>
                                <span><strong>Bulk operations</strong> — multi-select rows, paste from Excel, drag-to-fill</span>
                            </li>
                            <li class="uc-feature">
                                <span class="uc-check">✓</span>
                                <span><strong>Validation hooks</strong> — per-cell and per-row validation with custom error display</span>
                            </li>
                            <li class="uc-feature">
                                <span class="uc-check">✓</span>
                                <span><strong>Row drag &amp; group</strong> — reorder, collapse, and group rows with drag handles</span>
                            </li>
                        </ul>
                        <div class="uc-ctas">
                            <a href="/demo/" class="btn-primary">See live demo</a>
                            <a href="/guide/" class="btn-secondary">Read docs</a>
                        </div>
                    </div>
                    <div class="uc-visual">
                        <div class="mock-panel">
                            <div class="mock-header">
                                <span class="mock-dot" style="background:#ff5f57"></span>
                                <span class="mock-dot" style="background:#febc2e"></span>
                                <span class="mock-dot" style="background:#28c840"></span>
                                <span class="mock-title">Purchase Orders · ERP</span>
                            </div>
                            <div class="erp-toolbar">
                                <span class="erp-btn primary">+ Add Row</span>
                                <span class="erp-btn">Delete</span>
                                <span class="erp-btn">Export</span>
                                <span class="erp-btn">Filter</span>
                                <span class="erp-selected">3 rows selected</span>
                            </div>
                            <div class="erp-row erp-header">
                                <span class="erp-cell">☐</span>
                                <span class="erp-cell bold">PO #</span>
                                <span class="erp-cell">VENDOR</span>
                                <span class="erp-cell">AMOUNT</span>
                                <span class="erp-cell">STATUS</span>
                                <span class="erp-cell">DATE</span>
                            </div>
                            <div class="erp-row">
                                <span class="erp-cell">☑</span>
                                <span class="erp-cell bold">PO-2841</span>
                                <span class="erp-cell">Acme Supplies</span>
                                <span class="erp-cell bold">$14,200</span>
                                <span class="erp-cell"><span class="status active">Active</span></span>
                                <span class="erp-cell">Apr 12</span>
                            </div>
                            <div class="erp-row editing">
                                <span class="erp-cell">☑</span>
                                <span class="erp-cell bold">PO-2842</span>
                                <span class="erp-cell"><span class="erp-input">Global Parts Co.</span></span>
                                <span class="erp-cell bold">$7,850</span>
                                <span class="erp-cell"><span class="status pending">Pending</span></span>
                                <span class="erp-cell">Apr 15</span>
                            </div>
                            <div class="erp-row">
                                <span class="erp-cell">☐</span>
                                <span class="erp-cell bold">PO-2843</span>
                                <span class="erp-cell">TechFlow Ltd.</span>
                                <span class="erp-cell bold">$3,200</span>
                                <span class="erp-cell"><span class="status draft">Draft</span></span>
                                <span class="erp-cell">Apr 18</span>
                            </div>
                            <div class="erp-row">
                                <span class="erp-cell">☐</span>
                                <span class="erp-cell bold">PO-2844</span>
                                <span class="erp-cell">Nordic Systems</span>
                                <span class="erp-cell bold">$22,100</span>
                                <span class="erp-cell"><span class="status active">Active</span></span>
                                <span class="erp-cell">Apr 21</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Analytics -->
        <div class="uc-section" id="uc-analytics">
            <div class="container">
                <div class="uc-inner">
                    <div class="uc-content">
                        <div class="section-eyebrow">Analytics Platforms</div>
                        <h3 class="uc-title">Pivot-ready, aggregation-first.</h3>
                        <p class="uc-desc">Analytics tools need more than a table — they need grouping, aggregation, sorting across millions of records, and on-the-fly pivoting. RevoGrid handles all of it without a server round-trip.</p>
                        <ul class="uc-features">
                            <li class="uc-feature">
                                <span class="uc-check">✓</span>
                                <span><strong>Column grouping &amp; pivoting</strong> — drag-and-drop column groupings with auto-aggregation</span>
                            </li>
                            <li class="uc-feature">
                                <span class="uc-check">✓</span>
                                <span><strong>Custom aggregation functions</strong> — sum, avg, min/max, or bring your own</span>
                            </li>
                            <li class="uc-feature">
                                <span class="uc-check">✓</span>
                                <span><strong>Inline spark charts</strong> — render mini bar, line, or area charts in any cell</span>
                            </li>
                            <li class="uc-feature">
                                <span class="uc-check">✓</span>
                                <span><strong>Export to CSV / Excel</strong> — one-line API for full-data exports including filtered views</span>
                            </li>
                        </ul>
                        <div class="uc-ctas">
                            <a href="/demo/" class="btn-primary">See live demo</a>
                            <a href="/guide/" class="btn-secondary">Read docs</a>
                        </div>
                    </div>
                    <div class="uc-visual">
                        <div class="mock-panel">
                            <div class="mock-header">
                                <span class="mock-dot" style="background:#ff5f57"></span>
                                <span class="mock-dot" style="background:#febc2e"></span>
                                <span class="mock-dot" style="background:#28c840"></span>
                                <span class="mock-title">Revenue Analytics · Q1 2025</span>
                            </div>
                            <div class="mock-body">
                                <div class="ana-row ana-header">
                                    <span class="ana-seg">SEGMENT</span>
                                    <span class="ana-num">REVENUE</span>
                                    <span class="ana-num">GROWTH</span>
                                    <span class="ana-num">SHARE</span>
                                </div>
                                <div class="ana-row">
                                    <span class="ana-bar-cell"><span class="ana-label">Enterprise</span><span class="bar-track"><span class="bar-fill" style="width:82%"></span></span></span>
                                    <span class="ana-num">$4.2M</span>
                                    <span class="ana-num up">+18%</span>
                                    <span class="ana-num">42%</span>
                                </div>
                                <div class="ana-row">
                                    <span class="ana-bar-cell"><span class="ana-label">Mid-Market</span><span class="bar-track"><span class="bar-fill" style="width:55%"></span></span></span>
                                    <span class="ana-num">$2.8M</span>
                                    <span class="ana-num up">+24%</span>
                                    <span class="ana-num">28%</span>
                                </div>
                                <div class="ana-row">
                                    <span class="ana-bar-cell"><span class="ana-label">SMB</span><span class="bar-track"><span class="bar-fill" style="width:29%"></span></span></span>
                                    <span class="ana-num">$1.5M</span>
                                    <span class="ana-num down">-3%</span>
                                    <span class="ana-num">15%</span>
                                </div>
                                <div class="ana-row">
                                    <span class="ana-bar-cell"><span class="ana-label">Self-serve</span><span class="bar-track"><span class="bar-fill" style="width:15%"></span></span></span>
                                    <span class="ana-num">$0.8M</span>
                                    <span class="ana-num up">+41%</span>
                                    <span class="ana-num">8%</span>
                                </div>
                                <div class="ana-row">
                                    <span class="ana-bar-cell"><span class="ana-label">Partner</span><span class="bar-track"><span class="bar-fill" style="width:7%"></span></span></span>
                                    <span class="ana-num">$0.4M</span>
                                    <span class="ana-num up">+12%</span>
                                    <span class="ana-num">4%</span>
                                </div>
                                <div class="ana-row total">
                                    <span class="ana-bar-cell"><span class="ana-label bold">Total</span></span>
                                    <span class="ana-num bold">$9.7M</span>
                                    <span class="ana-num up bold">+19%</span>
                                    <span class="ana-num bold">100%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Operations Planning -->
        <div class="uc-section alt" id="uc-ops">
            <div class="container">
                <div class="uc-inner reverse">
                    <div class="uc-content">
                        <div class="section-eyebrow">Operations Planning</div>
                        <h3 class="uc-title">Scheduling and resource planning, reimagined.</h3>
                        <p class="uc-desc">Operations teams need more than a table — they need Gantt-style timelines, capacity views, and drag-to-schedule interactions. Build it on RevoGrid with custom column types and drag-and-drop plugins.</p>
                        <ul class="uc-features">
                            <li class="uc-feature">
                                <span class="uc-check">✓</span>
                                <span><strong>Custom cell renderers</strong> — build Gantt bars, timelines, and capacity meters as React/Vue components</span>
                            </li>
                            <li class="uc-feature">
                                <span class="uc-check">✓</span>
                                <span><strong>Drag &amp; drop rows</strong> — reorder tasks and resources with native row dragging</span>
                            </li>
                            <li class="uc-feature">
                                <span class="uc-check">✓</span>
                                <span><strong>Frozen columns</strong> — keep resource labels visible while scrolling the timeline</span>
                            </li>
                            <li class="uc-feature">
                                <span class="uc-check">✓</span>
                                <span><strong>Column resize &amp; reorder</strong> — users can adapt the view to their workflow</span>
                            </li>
                        </ul>
                        <div class="uc-ctas">
                            <a href="/demo/" class="btn-primary">See live demo</a>
                            <a href="/guide/" class="btn-secondary">Read docs</a>
                        </div>
                    </div>
                    <div class="uc-visual">
                        <div class="mock-panel">
                            <div class="mock-header">
                                <span class="mock-dot" style="background:#ff5f57"></span>
                                <span class="mock-dot" style="background:#febc2e"></span>
                                <span class="mock-dot" style="background:#28c840"></span>
                                <span class="mock-title">Sprint Planner · Q2 2025</span>
                            </div>
                            <div class="gantt-header">
                                <span class="gantt-label-col">RESOURCE</span>
                                <span class="gantt-months"><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span></span>
                            </div>
                            <div class="gantt-row">
                                <span class="gantt-label">Backend Team</span>
                                <span class="gantt-track"><span class="gantt-bar blue" style="left:2%;width:45%"></span></span>
                            </div>
                            <div class="gantt-row">
                                <span class="gantt-label">Frontend Team</span>
                                <span class="gantt-track"><span class="gantt-bar green" style="left:20%;width:60%"></span></span>
                            </div>
                            <div class="gantt-row">
                                <span class="gantt-label">Design</span>
                                <span class="gantt-track">
                                    <span class="gantt-bar purple" style="left:5%;width:30%"></span>
                                    <span class="gantt-bar purple" style="left:55%;width:25%"></span>
                                </span>
                            </div>
                            <div class="gantt-row">
                                <span class="gantt-label">QA</span>
                                <span class="gantt-track"><span class="gantt-bar orange" style="left:40%;width:40%"></span></span>
                            </div>
                            <div class="gantt-row">
                                <span class="gantt-label">DevOps</span>
                                <span class="gantt-track">
                                    <span class="gantt-bar blue" style="left:0%;width:20%;opacity:0.4"></span>
                                    <span class="gantt-bar blue" style="left:70%;width:28%"></span>
                                </span>
                            </div>
                            <div class="gantt-row">
                                <span class="gantt-label">Data Eng.</span>
                                <span class="gantt-track"><span class="gantt-bar green" style="left:30%;width:35%;opacity:0.6"></span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.use-cases {
    border-top: 1px solid var(--vp-c-divider);
}

.container {
    max-width: 1152px;
    margin: 0 auto;
    padding: 0 48px;

    @media (max-width: 640px) {
        padding: 0 24px;
    }
}

/* ── Hero header ── */
.uc-hero {
    padding: 80px 0 60px;
    text-align: center;
    background: var(--vp-c-bg-soft);
    border-bottom: 1px solid var(--vp-c-divider);
}

.eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: var(--vp-c-brand-soft);
    border: 1px solid var(--vp-c-brand-2);
    color: var(--vp-c-brand-1);
    font-size: 11px;
    font-weight: 500;
    font-family: var(--vp-font-family-mono);
    padding: 4px 12px;
    border-radius: 100px;
    margin-bottom: 24px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
}

.hero-title {
    font-size: clamp(32px, 4vw, 52px);
    font-weight: 700;
    letter-spacing: -1.5px;
    line-height: 1.08;
    color: var(--vp-c-text-1);
    margin-bottom: 18px;

    em {
        font-style: normal;
        color: var(--vp-c-brand-1);
    }
}

.hero-sub {
    font-size: 17px;
    color: var(--vp-c-text-2);
    max-width: 560px;
    margin: 0 auto 36px;
    line-height: 1.7;
}

.uc-nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    flex-wrap: wrap;
}

.uc-pill {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    background: var(--vp-c-bg);
    border: 1px solid var(--vp-c-divider);
    border-radius: 100px;
    padding: 7px 16px;
    font-size: 13px;
    font-weight: 500;
    color: var(--vp-c-text-2);
    text-decoration: none;
    transition: all 0.2s;

    &:hover {
        border-color: var(--vp-c-brand-2);
        color: var(--vp-c-text-1);
        background: var(--vp-c-bg-elv);
    }
}

.uc-pill-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--vp-c-brand-1);
    opacity: 0.7;
}

/* ── Use case sections ── */
.uc-section {
    padding: 96px 0;
    border-top: 1px solid var(--vp-c-divider);
    background: var(--vp-c-bg);

    &.alt {
        background: var(--vp-c-bg-soft);
    }
}

.uc-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 72px;
    align-items: center;

    &.reverse {
        .uc-content { order: 2; }
        .uc-visual { order: 1; }
    }

    @media (max-width: 960px) {
        grid-template-columns: 1fr;
        gap: 48px;

        &.reverse {
            .uc-content { order: 1; }
            .uc-visual { order: 2; }
        }
    }
}

.section-eyebrow {
    font-size: 11px;
    font-family: var(--vp-font-family-mono);
    font-weight: 500;
    color: var(--vp-c-brand-1);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 12px;
}

.uc-title {
    font-size: clamp(22px, 2.5vw, 34px);
    font-weight: 700;
    letter-spacing: -0.8px;
    line-height: 1.15;
    color: var(--vp-c-text-1);
    margin-bottom: 14px;
}

.uc-desc {
    font-size: 15px;
    color: var(--vp-c-text-2);
    line-height: 1.75;
    margin-bottom: 24px;
}

.uc-features {
    list-style: none;
    padding: 0;
    margin: 0 0 28px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.uc-feature {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 14px;
    color: var(--vp-c-text-2);
    line-height: 1.55;

    strong {
        color: var(--vp-c-text-1);
        font-weight: 600;
    }
}

.uc-check {
    width: 20px;
    height: 20px;
    border-radius: 5px;
    background: var(--vp-c-brand-soft);
    border: 1px solid var(--vp-c-brand-2);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    color: var(--vp-c-brand-1);
    flex-shrink: 0;
    margin-top: 1px;
}

.uc-ctas {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}

.btn-primary {
    background: var(--vp-c-brand-2);
    color: #fff;
    border: none;
    padding: 9px 20px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    transition: all 0.2s;

    &:hover {
        filter: brightness(1.1);
        transform: translateY(-1px);
    }
}

.btn-secondary {
    background: var(--vp-c-bg-elv);
    border: 1px solid var(--vp-c-divider);
    color: var(--vp-c-text-1);
    padding: 9px 20px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    transition: all 0.2s;

    &:hover {
        background: var(--vp-c-bg-soft);
    }
}

/* ── Mock panels ── */
.mock-panel {
    background: var(--vp-c-bg-elv);
    border: 1px solid var(--vp-c-divider);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);

    &::before {
        content: '';
        display: block;
        height: 2px;
        background: linear-gradient(90deg, transparent, var(--vp-c-brand-1), transparent);
    }
}

.mock-header {
    background: var(--vp-c-bg-soft);
    padding: 9px 14px;
    display: flex;
    align-items: center;
    gap: 5px;
    border-bottom: 1px solid var(--vp-c-divider);
}

.mock-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    display: inline-block;
}

.mock-title {
    font-size: 11px;
    font-family: var(--vp-font-family-mono);
    color: var(--vp-c-text-3);
    margin-left: 6px;
}

.mock-body {
    padding: 14px;
}

/* ── Financial mock ── */
.fin-stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 6px;
    margin-bottom: 12px;

    @media (max-width: 480px) {
        grid-template-columns: repeat(2, 1fr);
    }
}

.fin-stat {
    background: var(--vp-c-bg-soft);
    border: 1px solid var(--vp-c-divider);
    border-radius: 6px;
    padding: 8px 10px;
}

.fin-label {
    font-size: 9px;
    color: var(--vp-c-text-3);
    font-family: var(--vp-font-family-mono);
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.fin-value {
    font-size: 16px;
    font-weight: 700;
    color: var(--vp-c-text-1);
    margin-top: 2px;
    letter-spacing: -0.5px;
}

.fin-delta {
    font-size: 10px;
    font-family: var(--vp-font-family-mono);
    margin-top: 1px;

    &.up { color: #28c840; }
    &.down { color: #ff5f57; }
    &.dim { color: var(--vp-c-text-3); }
}

.grid-row {
    display: grid;
    grid-template-columns: 52px 1fr 88px 70px;
    padding: 6px 0;
    border-bottom: 1px solid var(--vp-c-divider);
    font-size: 12px;
    align-items: center;
    gap: 6px;

    &:last-child { border-bottom: none; }
    &.grid-header {
        background: var(--vp-c-bg-soft);
        border-radius: 4px 4px 0 0;
        padding: 5px 4px;
    }
}

.col-ticker {
    font-family: var(--vp-font-family-mono);
    font-weight: 600;
    font-size: 11px;
    color: var(--vp-c-text-3);

    &.accent { color: var(--vp-c-brand-1); }
}

.col-name {
    font-size: 12px;
    color: var(--vp-c-text-2);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.col-price {
    font-family: var(--vp-font-family-mono);
    text-align: right;
    font-size: 12px;
    color: var(--vp-c-text-1);
}

.col-chg {
    font-family: var(--vp-font-family-mono);
    text-align: right;
    font-size: 11px;
    font-weight: 600;

    &.up { color: #28c840; }
    &.down { color: #ff5f57; }
}

/* ── ERP mock ── */
.erp-toolbar {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 14px;
    border-bottom: 1px solid var(--vp-c-divider);
    flex-wrap: wrap;
}

.erp-btn {
    padding: 3px 9px;
    border-radius: 4px;
    font-size: 11px;
    font-weight: 500;
    border: 1px solid var(--vp-c-divider);
    color: var(--vp-c-text-2);
    background: var(--vp-c-bg-soft);
    font-family: var(--vp-font-family-mono);

    &.primary {
        background: var(--vp-c-brand-soft);
        border-color: var(--vp-c-brand-2);
        color: var(--vp-c-brand-1);
    }
}

.erp-selected {
    margin-left: auto;
    font-size: 10px;
    color: var(--vp-c-text-3);
    font-family: var(--vp-font-family-mono);
}

.erp-row {
    display: grid;
    grid-template-columns: 20px 68px 1fr 68px 64px 52px;
    padding: 7px 14px;
    border-bottom: 1px solid var(--vp-c-divider);
    align-items: center;
    gap: 6px;

    &:last-child { border-bottom: none; }
    &.erp-header { background: var(--vp-c-bg-soft); }
    &.editing { background: color-mix(in srgb, var(--vp-c-brand-1) 6%, transparent); }
}

.erp-cell {
    font-size: 11px;
    color: var(--vp-c-text-2);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &.bold { color: var(--vp-c-text-1); font-weight: 600; }
}

.erp-input {
    background: var(--vp-c-bg);
    border: 1px solid var(--vp-c-brand-2);
    border-radius: 3px;
    padding: 2px 5px;
    font-size: 11px;
    color: var(--vp-c-text-1);
    font-family: var(--vp-font-family-mono);
    display: inline-block;
    width: 100%;
}

.status {
    display: inline-block;
    padding: 2px 7px;
    border-radius: 100px;
    font-size: 10px;
    font-weight: 600;
    font-family: var(--vp-font-family-mono);

    &.active { background: rgba(40, 200, 64, 0.12); color: #28c840; }
    &.pending { background: rgba(254, 188, 46, 0.15); color: #febc2e; }
    &.draft { background: var(--vp-c-bg-soft); color: var(--vp-c-text-3); }
}

/* ── Analytics mock ── */
.ana-row {
    display: grid;
    grid-template-columns: 1fr 64px 64px 52px;
    padding: 7px 14px;
    border-bottom: 1px solid var(--vp-c-divider);
    align-items: center;
    gap: 6px;

    &:last-child { border-bottom: none; }
    &.ana-header { background: var(--vp-c-bg-soft); }
    &.total {
        border-top: 1px solid var(--vp-c-divider);
        background: var(--vp-c-bg-soft);
    }
}

.ana-seg, .ana-num {
    font-size: 10px;
    color: var(--vp-c-text-3);
    font-family: var(--vp-font-family-mono);
    text-align: right;
}

.ana-num {
    text-align: right;
    font-size: 11px;
    color: var(--vp-c-text-1);

    &.up { color: #28c840; }
    &.down { color: #ff5f57; }
    &.bold { font-weight: 700; }
}

.ana-bar-cell {
    display: flex;
    align-items: center;
    gap: 8px;
    overflow: hidden;
}

.ana-label {
    font-size: 12px;
    color: var(--vp-c-text-1);
    min-width: 68px;
    flex-shrink: 0;

    &.bold { font-weight: 700; }
}

.bar-track {
    flex: 1;
    height: 4px;
    background: var(--vp-c-divider);
    border-radius: 2px;
    min-width: 40px;
}

.bar-fill {
    height: 100%;
    border-radius: 2px;
    background: var(--vp-c-brand-1);
    display: block;
}

/* ── Gantt mock ── */
.gantt-header {
    display: flex;
    align-items: center;
    padding: 7px 14px;
    border-bottom: 1px solid var(--vp-c-divider);
    background: var(--vp-c-bg-soft);
    gap: 10px;
}

.gantt-label-col {
    width: 90px;
    font-size: 9px;
    color: var(--vp-c-text-3);
    font-family: var(--vp-font-family-mono);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    flex-shrink: 0;
}

.gantt-months {
    flex: 1;
    display: flex;
    justify-content: space-between;
    font-size: 10px;
    color: var(--vp-c-text-3);
    font-family: var(--vp-font-family-mono);
}

.gantt-row {
    display: flex;
    align-items: center;
    padding: 7px 14px;
    border-bottom: 1px solid var(--vp-c-divider);
    gap: 10px;

    &:last-child { border-bottom: none; }
}

.gantt-label {
    width: 90px;
    font-size: 11px;
    color: var(--vp-c-text-2);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-shrink: 0;
}

.gantt-track {
    flex: 1;
    height: 20px;
    background: var(--vp-c-bg-soft);
    border-radius: 4px;
    position: relative;
}

.gantt-bar {
    position: absolute;
    top: 3px;
    height: 14px;
    border-radius: 3px;

    &.blue { background: var(--vp-c-brand-1); opacity: 0.8; }
    &.green { background: #28c840; opacity: 0.7; }
    &.orange { background: #febc2e; opacity: 0.7; }
    &.purple { background: #a855f7; opacity: 0.7; }
}

.up { color: #28c840; }
.down { color: #ff5f57; }
</style>
