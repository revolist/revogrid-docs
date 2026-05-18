<template>
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
                        <a href="https://rv-grid.com/demo/gantt" class="btn-primary-lg">See live demo</a>
                        <a :href="homeLink('/gantt')" class="btn-secondary-lg">Read docs</a>
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
</template>

<script lang="ts" setup>
import { useHomeLink } from '../../useHomeLink'

const { homeLink } = useHomeLink()
</script>
