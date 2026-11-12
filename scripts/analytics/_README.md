# Feature interest and purchase attribution

This measures consented visitors on rv-grid.com and its public demos. It does not add telemetry to customer installations.

## Reporting contract

- `interest_screen_view`: one view for each page visit; exposure, not proof of feature usage.
- `feature_interest`: `preview`, `explore`, `interact`, or `trial`. Count unique users at each stage; do not sum stages into an interest score.
- `checkout_start` is an application dataLayer event. GTM sends one `begin_checkout` and one `buy_click` from it. Neither is a purchase.
- `purchase` is sent only from the signed Stripe webhook through a persistent outbox, using the Checkout Session ID as `transaction_id`.

Use `interest_category` to separate `product`, `grid_feature`, general `grid` screens, and `unmapped` previews. Use `product_id` for Gantt, Pivot, Scheduler, Kanban, Charts and RevoGrid; use `feature_group` and canonical `feature_id` for individual capabilities. `screen_id` and `screen_type` locate the interaction. `source_page` is the page where the event occurred.

Grid event listeners record column expansion/collapse, column reordering, row reordering, editing, filtering and sorting after a recent user input inside that grid. Master-detail toggles and owned demo control clicks use `action_status=requested`; cancelable requests are not described as successful mutations. Other supported after-events use `completed`. Each action/feature emits once per page visit to avoid measuring repeated clicking as greater demand.

The purchase context contains the most recently explored product/feature. This is an observed touchpoint, not evidence that the feature caused the purchase. Campaign attribution comes from GA4's client/session join. Safe first-session landing path, campaign taxonomy and referrer domain are retained as separate purchase parameters for inspection. No raw query strings, row/cell values, names, emails or searches are collected.

Recommended GA4 explorations:

1. Interest table: rows `product_id`, `feature_group`, `feature_id`; columns `interest_stage`; metric Total users; filter the two interest events. Compare `interact` users with exposed users for the same feature and period. Generic product views are not a denominator for a grid feature's conversion rate.
2. Journey: screen view → preview/explore → interact → trial → begin_checkout → purchase. Use ordered user/session segments; a flat event-count ratio is not a funnel.
3. Purchase acquisition: Transaction ID, Session source/medium, first user source/medium, `landing_page`, `source_page`, product/feature, `attribution_status`, purchase revenue. An absent feature is a real coverage/consent gap, not a zero-interest feature.

Register EVENT custom dimensions: `product_id`, `feature_group`, `interest_category`, `interest_stage`, `screen_id`, `screen_type`, `action_status`, `attribution_status`, `landing_page`, `acquisition_source`, `acquisition_medium`, `acquisition_campaign`, `referrer_domain`. Reuse existing `feature_id`, `action_id`, `source_page` and `plan`. Do not register client IDs, session IDs or transaction IDs as custom dimensions. Keep page views and feature interactions as regular events; purchase remains a key event.

## Ordered rollout

1. Deploy billing service migration V7 and backend changes. The service waits for Flyway completion. Confirm the new CORS endpoint at `https://pro.rv-grid.com/account/analytics/checkout` and configured GA4 measurement ID/API secret without logging the secret.
2. Preserve every current Stripe webhook event and add `checkout.session.async_payment_succeeded` to the existing endpoint.
3. Deploy the site changes. Known Stripe anchors are decorated before activation, including copy/new-tab paths. Missing attribution service falls back to the real GA client/session IDs; checkout never waits on it. Consent withdrawal removes references from current anchors.
4. Import `gtm-purchase-interest-import.json` using Merge / Overwrite conflicting entities. The import pauses the legacy feature tag and the Ads conversion that incorrectly fired on a checkout click, replaces the two checkout tags' triggers, and adds canonical interest events. It does not create an Ads purchase conversion; verify/import the GA4 purchase conversion in Ads separately before relying on bidding.
5. Preview new site events before publishing GTM. Confirm one begin_checkout per activation and correct Lite/Advanced IDs regardless of link text and page. Register the custom definitions and verify DebugView, then processed reports after the normal GA4 delay.

## Limits and gap checks

Google requires Measurement Protocol session joins within 24 hours of session start; retries preserve the actual payment timestamp and stop at 72 hours. Older sessions are explicitly flagged `session_window_expired`. A 204 response confirms transport only, not GA4 ingestion. Blocked analytics, denied consent, copied undecorated links, cross-device purchases and existing Stripe links shared outside the site cannot be retroactively attributed. Historical unreferenced payments are not backfilled as invented users or given fabricated sources.

The billing outbox exposes `pending`, `sending`, `sent`, `unattributed`, and `expired` states. Reconcile paid Stripe Checkout Session IDs with the outbox and GA4 transaction IDs. Track pending age, expired deliveries and the share of unattributed checkouts. `unmapped` interest events expose taxonomy gaps. Add explicit mappings and source-verified demo events as new screens/capabilities are released.

Attribution references expire after 30 days; terminal outbox records are retained for 90 days. The captured landing/campaign context and last feature are scoped to the current browser tab's sessionStorage; this does not claim cross-device or lifetime first-touch tracking.
