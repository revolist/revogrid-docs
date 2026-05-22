<template>
  <section id="cmp" class="section">
    <div class="section-label">Compare</div>
    <h2>How RevoGrid Pivot <span>stacks up</span></h2>
    <p class="section-copy">Compared against AG Grid Enterprise and generic pivot libraries on architecture, flexibility, and pricing.</p>
    <div class="compare-wrap">
      <table class="compare-table">
        <thead>
          <tr><th>Feature</th><th>RevoGrid Pivot</th><th>AG Grid Enterprise</th><th>Generic pivot libs</th></tr>
        </thead>
        <tbody>
          <tr v-for="row in COMPARE" :key="row.feature">
            <td>{{ row.feature }}</td><td class="highlight">{{ row.revo }}</td><td>{{ row.ag }}</td><td>{{ row.generic }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { COMPARE } from './pivotLandingData'
</script>
