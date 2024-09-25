# Pin/Freeze (Fixed columns)

[<Badge type="tip">Interface: ColumnRegular</Badge>](../types/Interface.ColumnRegular) [<Badge type="tip">Type: DimensionColPin</Badge>](../types/TypeAlias.DimensionColPin)


<!--@include: ../parts/pin.warning.md-->

<!--@include: ../parts/column.pin.md-->

``` ts

const columns = [
  { name: 'First Name', prop: 'firstName', },
  { name: 'Status', prop: 'status', pin: 'colPinStart', },
  { name: 'Age', prop: 'age', pin: 'colPinEnd', },
];

```


<!--@include: ../../demo/js/js.column.pin.md-->
