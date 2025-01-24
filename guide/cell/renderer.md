# Cell renderer [<Badge type="tip">Interface: CellTemplate</Badge>](../types/Interface.CellTemplate) [<Badge type="tip">Interface: CellTemplateProp</Badge>](../types/Interface.CellTemplateProp)

This article explains how to use a [custom cell function](../types/Interface.CellTemplate) to display HTML content in a cell.
<br>Alternatively, you can use [predefined column types](../column/types.md).

> [!WARNING]
> Remember to escape any HTML code that could be used for XSS attacks.

<!--@include: ../parts/_framework.cell.md-->

<br/>

> [!TIP]
> Use [JSX](../jsx.template.md) to simplify your code and render HTML content.

```ts
const columns: ColumnRegular[] = [
    {
        name: 'Person name',
        prop: 'name',
        cellTemplate: (
            createElement: HyperFunc<VNode>,
            props: CellTemplateProp,
            additionalData?: any
        ) => {
            return createElement(
                'span',
                {
                    style: {
                        color: 'red',
                    },
                },
                props.model[props.prop]
            )
        },
    },
]
```
