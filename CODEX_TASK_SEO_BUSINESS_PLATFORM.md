# Codex Task: Improve RevoGrid SEO positioning

## Base branch

`next`

## Goal

Improve the RevoGrid documentation site SEO so RevoGrid can be discovered not only as a JavaScript data grid, but also as a broader frontend foundation for building business applications with datagrid, Gantt, scheduler, pivot, and analytics use cases.

The positioning should be technical, developer-friendly, and credible. Avoid generic marketing language such as “game changer”, “most powerful”, or exaggerated claims. Focus on concrete capabilities, use cases, and implementation value.

## Primary positioning

RevoGrid should be presented as a high-performance frontend grid foundation for building spreadsheet-like business applications and internal tools.

Core search topics to cover naturally:

- JavaScript data grid
- datagrid
- data table
- virtual data grid
- spreadsheet-like grid
- business application UI
- internal tools
- enterprise business apps
- Gantt chart
- scheduler
- scheduling UI
- project planning UI
- pivot table
- pivot grid
- analytics grid
- aggregation
- reporting UI
- ERP grid
- financial analytics UI
- operational dashboards

## Scope

### 1. Homepage / intro docs

Improve the homepage or main introduction pages so they clearly explain RevoGrid as:

- a high-performance JavaScript datagrid
- a foundation for business application UIs
- suitable for large datasets and spreadsheet-like workflows
- extensible through plugins and custom rendering
- useful across datagrid, Gantt, scheduler, pivot, and analytics scenarios

Use keywords naturally. Do not keyword-stuff.

### 2. Metadata / VitePress SEO

Review VitePress config and page frontmatter.

Add or improve where appropriate:

- page title
- page description
- Open Graph title/description
- search-friendly descriptions

Prioritize:

- homepage
- getting started / guide pages
- Pro or business-use-case pages
- Gantt / scheduler pages if present
- pivot / analytics pages if present

### 3. Use-case pages

Create or improve lightweight SEO landing/docs pages for:

- Data Grid / Data Table
- Gantt / Scheduling
- Pivot / Analytics
- Business Applications / ERP / financial / operational apps

Each page should explain:

- the business problem
- where RevoGrid fits technically
- relevant RevoGrid capabilities:
  - virtualization
  - large datasets
  - framework integration
  - plugins
  - custom cell rendering
  - spreadsheet-like editing
  - sorting/filtering/grouping where applicable
  - export/import where applicable

### 4. Internal linking and navigation

Improve internal links between:

- core datagrid docs
- demos
- Pro/business app use cases
- Gantt/scheduler pages
- pivot/analytics pages

Update sidebar/navigation if necessary so new pages are discoverable.

### 5. Keep documentation quality high

Rules:

- Keep tone developer-oriented and direct.
- Avoid fluffy claims.
- Avoid keyword stuffing.
- Do not make unsupported claims.
- Prefer concrete capability mapping.
- Keep page copy concise but useful.

### 6. Validation

Run the closest available validation commands, for example:

```bash
npm install
npm run build
```

Fix any broken links, imports, or VitePress errors introduced by the SEO changes.

If there is an existing unrelated build issue, document it clearly in the PR.

## Expected PR output

Open a PR into `next` with:

- summary of SEO/metadata/content changes
- list of added or updated pages
- build/test result
- any remaining follow-up SEO opportunities

## Acceptance criteria

- RevoGrid is clearly positioned as a platform/foundation for building business applications, not only as a table component.
- The docs naturally cover datagrid, Gantt, scheduler, pivot, and analytics use cases.
- New or updated pages are linked from navigation where appropriate.
- VitePress build passes, or any unrelated build issue is clearly documented.
- The final tone is technical, direct, and credible.
