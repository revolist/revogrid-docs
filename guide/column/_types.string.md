### String

String is the default RevoGrid column format. Use it for plain text, identifiers, labels, and any editable cell that does not need a specialized editor.

No package or registration is required:

```ts
const columns = [
  { prop: 'name', name: 'Name' },
  { prop: 'email', name: 'Email' },
]
```

Values are read as text for display. If a column needs custom rendering, validation, parsing, or editing behavior, define those options directly on the column or move them into a reusable `columnTypes` preset.
