### Why Keys Matter

Keys allow the virtual DOM to:
- **Identify unique nodes** - Distinguish between different items even when content is similar
- **Optimize updates** - Efficiently update only the nodes that have changed
- **Preserve state** - Maintain component state when items are reordered or filtered

### Basic Key Usage

When rendering multiple child elements, provide unique keys:

```ts
const columns: ColumnRegular[] = [
    {
        name: 'Tags',
        prop: 'tags',
        cellTemplate: (
            createElement: HyperFunc<VNode>,
            props: CellTemplateProp,
            additionalData?: any
        ) => {
            const tags = props.model[props.prop] || [];
            return createElement(
                'div',
                null,
                tags.map((tag: any, index: number) => 
                    createElement(
                        'span',
                        {
                            key: tag.id || `tag-${props.rowIndex}-${index}`,
                            class: 'tag',
                        },
                        tag.label
                    )
                )
            );
        },
    },
]
```

### Using Keys with Row and Column Identifiers

For cells that may be reordered or filtered, combine row and column identifiers:

```ts
const columns: ColumnRegular[] = [
    {
        name: 'Status',
        prop: 'status',
        cellTemplate: (
            createElement: HyperFunc<VNode>,
            props: CellTemplateProp,
            additionalData?: any
        ) => {
            return createElement(
                'div',
                {
                    key: `cell-${props.rowIndex}-${props.colIndex}`,
                    class: `status-${props.model[props.prop]}`,
                },
                props.model[props.prop]
            );
        },
    },
]
```

### Best Practices

1. **Use stable identifiers** - Prefer IDs from your data model over array indices when possible
2. **Combine identifiers** - For cells, combine `rowIndex` and `colIndex` or use a unique row ID
3. **Keep keys consistent** - The same data item should always have the same key across renders
4. **Avoid random keys** - Never use `Math.random()` or similar as keys

### Example: Complex Cell with Multiple Elements

```ts
const columns: ColumnRegular[] = [
    {
        name: 'Details',
        prop: 'details',
        cellTemplate: (
            createElement: HyperFunc<VNode>,
            props: CellTemplateProp,
            additionalData?: any
        ) => {
            const details = props.model[props.prop] || [];
            const cellKey = `details-${props.rowIndex}-${props.colIndex}`;
            
            return createElement(
                'div',
                { key: cellKey },
                [
                    createElement('span', { key: `${cellKey}-title` }, props.model.name),
                    createElement(
                        'ul',
                        { key: `${cellKey}-list` },
                        details.map((detail: any, index: number) =>
                            createElement(
                                'li',
                                { key: detail.id || `${cellKey}-item-${index}` },
                                detail.text
                            )
                        )
                    )
                ]
            );
        },
    },
]
```
