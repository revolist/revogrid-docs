When rendering multiple child elements in a header template, provide unique keys:

```ts
const columns: ColumnRegular[] = [
    {
        name: 'Actions',
        prop: 'actions',
        columnTemplate: (
            createElement: HyperFunc<VNode>,
            props: ColumnTemplateProp,
            additionalData?: any
        ) => {
            const actions = ['sort', 'filter', 'settings'];
            return createElement(
                'div',
                { key: `header-${props.column.name}` },
                actions.map((action, index) =>
                    createElement(
                        'button',
                        {
                            key: `action-${props.column.name}-${action}`,
                            class: `action-btn action-${action}`,
                        },
                        action
                    )
                )
            );
        },
    },
]
```