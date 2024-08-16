# Pin/Freeze (Fixed columns)

[<Badge type="tip">Interface: ColumnRegular</Badge>](../types/Interface.ColumnRegular) [<Badge type="tip">Type: DimensionColPin</Badge>](../types/TypeAlias.DimensionColPin)


<!--@include: ../parts/column.pin.md-->

``` ts

const columns = [
  { name: 'Name', prop: 'name', },
  { name: 'Eyes', prop: 'eyeColor', pin: 'colPinStart', },
  { name: 'Company', prop: 'company', pin: 'colPinEnd', },
];

```