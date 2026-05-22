<template>
    <div id="usecases" class="use-cases">
        <HomeUseCasesHero />

        <HomeUseCaseProjectTracker />

        <HomeUseCaseCustomerAnalytics />

        <HomeUseCaseAnalytics />

        <HomeUseCaseOperations />
    </div>
</template>

<script lang="ts" setup>
import HomeUseCasesHero from './use-cases/HomeUseCasesHero.vue'
import HomeUseCaseProjectTracker from './use-cases/HomeUseCaseProjectTracker.vue'
import HomeUseCaseCustomerAnalytics from './use-cases/HomeUseCaseCustomerAnalytics.vue'
import HomeUseCaseAnalytics from './use-cases/HomeUseCaseAnalytics.vue'
import HomeUseCaseOperations from './use-cases/HomeUseCaseOperations.vue'
</script>

<style lang="scss">
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

.use-cases {

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
    font-weight: 600;
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
    display: block;
    background: var(--uc-bg);
    padding: 32px 26px;
    color: inherit;
    text-decoration: none;
    transition: background 0.18s;

    &:hover,
    &:focus-visible {
        background: var(--uc-bg2);
    }

    &:focus-visible {
        outline: 2px solid var(--uc-teal);
        outline-offset: -2px;
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
    scroll-margin-top: 80px;

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
    font-weight: 600;
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
    font-weight: 600;
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

.pt-add-control {
    background: var(--uc-teal);
    color: #fff;
    border-radius: 5px;
    padding: 4px 9px;
    font-size: 10px;
    font-weight: 600;
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
    font-weight: 600;
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
    font-weight: 600;
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
    font-weight: 600;
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

.ca-toolbar-control,
.ca-stat-chip {
    padding: 3px 8px;
    border-radius: 5px;
    font-size: 10px;
    border: 1px solid var(--uc-border2);
    color: var(--uc-text-dim);
    background: var(--uc-bg);
    white-space: nowrap;
}

.ca-toolbar-control {
    font-weight: 600;
}

.ca-stat-chip {
    font-weight: 500;

    strong {
        color: var(--uc-text);
    }
}

.ca-export-control {
    padding: 3px 9px;
    border-radius: 5px;
    font-size: 10px;
    font-weight: 600;
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
    font-weight: 600;
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
        font-weight: 600;
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
        font-weight: 600;
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
}

</style>
