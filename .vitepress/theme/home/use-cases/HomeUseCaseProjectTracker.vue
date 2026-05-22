<template>
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
                        <a href="https://rv-grid.com/demo/" class="rg-btn">See live demo</a>
                        <a :href="homeLink('/guide/')" class="rg-btn rg-btn-secondary">Read docs</a>
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
                        <div class="pt-add-control">+ Add task</div>
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
</template>

<script lang="ts" setup>
import { useHomeLink } from '../../useHomeLink'

const { homeLink } = useHomeLink()
</script>
