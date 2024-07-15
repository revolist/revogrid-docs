## Column Template

This article explaines how to use custom header function to display HTML content in a header.
This is a powerful feature.

`Remember` to escape any HTML code that could be used for XSS attacks.

:::tip
Check [Type: ColumnTemplateFunc](../types/TypeAlias.ColumnTemplateFunc) for more information.
:::

```ts
const columns: ColumnRegular[] = [
    {
        name: 'Person name',
        prop: 'name',

        // use this to return custom html per column
        columnTemplate: (
            createElement: HyperFunc<VNode>,
            props: ColumnTemplateProp,
            additionalData?: any
        ) => {
            return createElement(
                'span',
                {
                    style: {
                        color: 'red',
                    },
                },
                column.name
            )
        },
    },
]
```
