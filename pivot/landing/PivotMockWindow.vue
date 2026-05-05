<template>
  <div class="mock-window">
    <div class="mock-titlebar">
      <div class="window-dots"><span class="red"></span><span class="yellow"></span><span class="green"></span></div>
      <span class="mock-title">Sales Pivot · RevoGrid</span>
      <span class="live-pill">Live</span>
    </div>
    <div class="mock-fields">
      <span class="field-tag blue">Region</span>
      <span class="field-tag blue">Product</span>
      <span class="field-tag green">Quarter</span>
      <span class="field-tag amber">Revenue</span>
      <div class="agg-tabs mini">
        <button class="on" type="button">SUM</button>
        <button type="button">AVG</button>
        <button type="button">COUNT</button>
      </div>
    </div>
    <div class="table-wrap">
      <table class="pivot-table mock">
        <thead>
          <tr>
            <th>Region / Product</th>
            <th class="quarter">Q1</th>
            <th class="quarter">Q2</th>
            <th class="quarter">Q3</th>
            <th class="quarter">Q4</th>
            <th class="total-head">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="group-label">EMEA</td>
            <td class="num">$208.7K</td>
            <td class="num">$230.1K</td>
            <td class="num">$196.0K</td>
            <td class="num">$260.1K</td>
            <td class="row-total">$894.9K</td>
          </tr>
          <tr>
            <td class="sub-label">Pro</td>
            <td class="num muted">$84.2K</td>
            <td class="num muted">$91.4K</td>
            <td class="num muted">$76.8K</td>
            <td class="num muted">$102.3K</td>
            <td class="row-total muted">$354.7K</td>
          </tr>
          <tr>
            <td class="sub-label">Advanced</td>
            <td class="num muted">$124.5K</td>
            <td class="num muted">$138.7K</td>
            <td class="num muted">$119.2K</td>
            <td class="num muted">$157.8K</td>
            <td class="row-total muted">$540.2K</td>
          </tr>
          <tr>
            <td class="group-label">Americas</td>
            <td class="num">$295.0K</td>
            <td class="num">$277.1K</td>
            <td class="num">$330.3K</td>
            <td class="num">$385.7K</td>
            <td class="row-total">$1.29M</td>
          </tr>
          <tr>
            <td class="sub-label">Pro</td>
            <td class="num muted">$93.6K</td>
            <td class="num muted">$88.2K</td>
            <td class="num muted">$105.7K</td>
            <td class="num muted">$118.4K</td>
            <td class="row-total muted">$405.9K</td>
          </tr>
          <tr>
            <td class="sub-label">Advanced</td>
            <td class="num muted">$201.4K</td>
            <td class="num muted">$188.9K</td>
            <td class="num muted">$224.6K</td>
            <td class="num muted">$267.3K</td>
            <td class="row-total muted">$882.2K</td>
          </tr>
          <tr class="grand-row">
            <td>Grand Total</td>
            <td>$557.8K</td>
            <td>$570.8K</td>
            <td>$588.5K</td>
            <td>$710.3K</td>
            <td>$2.43M</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="mock-foot">
      <span>24 rows -> 8 pivot cells</span>
      <span class="powered">Powered by RevoGrid</span>
    </div>
  </div>
</template>
