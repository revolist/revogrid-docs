---
title: RevoGrid MCP for AI Agents
description: Connect Codex, Cursor, Claude Code, and VS Code to the RevoGrid MCP server for version-aware docs, examples, migration notes, and typed API context.
head:
  - - meta
    - name: keywords
      content: RevoGrid MCP, AI agents, Codex, Cursor, Claude Code, VS Code MCP, TypeScript data grid, RevoGrid docs
---

# RevoGrid MCP for AI Agents

RevoGrid MCP gives AI coding tools a structured way to work with RevoGrid instead of guessing from stale training data. It exposes version-aware documentation, runnable examples, migration notes, feature availability, and typed API context in a format that agents can query directly.

This is especially useful when you want an AI tool to:

- start from a working RevoGrid example instead of inventing setup code
- verify whether a feature exists in Core or Pro before suggesting it
- use current event names, options, and types such as `ColumnRegular` or `BeforeEdit`
- follow migration guidance between RevoGrid versions

## What the MCP server provides

The RevoGrid MCP server is read-only and focused on retrieval quality. It currently exposes:

- structured documentation search
- example search across frameworks
- feature matrix resolution for Core vs Pro support
- migration notes between versions
- typed API context derived from RevoGrid source

Agents can use this to retrieve:

- docs and guides
- live examples and demo sources
- feature availability
- migration records
- version metadata
- TypeScript-driven API symbols and configuration hints

## Why this works well with RevoGrid

RevoGrid already has strong typing and a source-driven API surface. That makes MCP especially effective here: the agent can ground its answers in real interfaces, events, and examples instead of relying on fuzzy pattern matching.

When you use RevoGrid with AI tools, the best results usually come from this order:

1. ask the agent to inspect RevoGrid MCP results first
2. ask it to use RevoGrid types as the source of truth
3. ask it to adapt the result to your framework and version

## Install in AI coding tools

Use the hosted RevoGrid MCP endpoint:

```text
https://mcp.rv-grid.com
```

This is the primary endpoint for RevoGrid docs, examples, migrations, feature availability, and typed API retrieval. The legacy `/mcp` path remains compatible, but new client setup should prefer the root URL.

### Claude Code

```bash
claude mcp add --transport http revogrid https://mcp.rv-grid.com
```

### Codex

```bash
codex mcp add revogrid --url https://mcp.rv-grid.com
```

### Cursor

Open MCP settings and add this entry to `.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "RevoGrid": {
      "url": "https://mcp.rv-grid.com",
      "type": "http"
    }
  }
}
```

### VS Code

Open `MCP: Add Server...` and choose a remote HTTP MCP server, or add this to `.vscode/mcp.json`:

```json
{
  "servers": {
    "RevoGrid MCP": {
      "url": "https://mcp.rv-grid.com",
      "type": "http"
    }
  },
  "inputs": []
}
```

## Prompt patterns that work well

These are good starting prompts for Codex, Cursor, Claude Code, VS Code MCP clients, or similar tools.

### Start from examples

- `Create an editable React RevoGrid using the best matching public examples and docs.`
- `Find the best Vue example for a custom column type and implement it.`
- `Show the Angular getting-started resources for RevoGrid and use the latest matching setup.`

### Ground work in types

- `Before writing code, look up the RevoGrid MCP docs and types for ColumnRegular, editors, and BeforeEdit.`
- `Use RevoGrid types as the source of truth for props, events, and plugin configuration.`

### Check features before implementing

- `Does RevoGrid support beforeedit in this version? Show docs, examples, and relevant types.`
- `Does pivot exist, and is it Core or Pro? If Pro is unavailable, recommend the closest public fallback.`

### Migrate safely

- `I am upgrading RevoGrid from 3.x to 4.x. Find migration notes, renamed symbols, and changed defaults that affect editing and events.`

## Recommended workflow for agents

If you are using an AI coding assistant on a RevoGrid codebase, ask it to:

1. search RevoGrid MCP before writing code
2. prefer public examples over free-form code generation
3. confirm Core vs Pro availability before suggesting a feature
4. check RevoGrid types when property names or event payloads matter
5. link back to the relevant docs or examples in the answer

This workflow tends to produce smaller, more accurate patches with fewer invented APIs.

## What to ask for explicitly

To get the highest-quality output from an agent, be specific about:

- framework: React, Vue, Angular, Svelte, or vanilla
- version: if you are pinned to a RevoGrid release line
- licensing: whether the solution must stay public/Core-only
- behavior: editing, pinning, grouping, virtualization, filtering, export, or plugins

For example:

```text
Create a Core-only React RevoGrid with editable cells and custom column types. Use RevoGrid MCP results first, prefer runnable examples, and validate the final config against RevoGrid types.
```

## Related pages

- [Quick Start](/guide/)
- [Overview](/guide/overview)
- [Examples](/demo/)
- [Migration](/guide/migration)
- [Typings](/guide/types/README)
