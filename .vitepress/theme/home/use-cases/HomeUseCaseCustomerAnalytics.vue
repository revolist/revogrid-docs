<template>
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
                        <a :href="homeLink('/demo/ecommerce')" class="btn-primary-lg">See live demo</a>
                        <a :href="docsUrl" class="btn-secondary-lg">Read docs</a>
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
</template>

<script lang="ts" setup>
import { useHomeLink } from '../../useHomeLink'
import { useData } from 'vitepress'

const { homeLink } = useHomeLink()
const { frontmatter } = useData()
const docsUrl = frontmatter.value.externalHomeLinks
    ? homeLink('/pro/')
    : 'https://pro.rv-grid.com/guides/data-manage/tree/'
</script>
