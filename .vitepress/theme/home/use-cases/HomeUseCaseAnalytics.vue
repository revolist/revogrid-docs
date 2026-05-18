<template>
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
                        <a href="https://rv-grid.com/demo/pivot" class="btn-primary-lg">See live demo</a>
                        <a :href="homeLink('/pivot')" class="btn-secondary-lg">Read docs</a>
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
</template>

<script lang="ts" setup>
import { useHomeLink } from '../../useHomeLink'

const { homeLink } = useHomeLink()
</script>
