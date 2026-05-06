<template>
  <footer class="pivot-site-footer">
    <div class="container">
      <div class="footer-top">
        <a :href="privacyUrl" target="_blank" rel="noopener">Privacy Policy</a>
        <a :href="termsUrl" target="_blank" rel="noopener">Terms of Service</a>
        <a :href="securityUrl" target="_blank" rel="noopener">Security Policy</a>
        <a :href="quickStartUrl" target="_blank" rel="noopener">Quick Start</a>
        <a :href="aboutUrl" target="_blank" rel="noopener">About us</a>
        <a :href="servicesUrl" target="_blank" rel="noopener">Services</a>
        <a :href="contactUrl" target="_blank" rel="noopener">Contact us</a>
      </div>
      <div class="footer-bottom">
        RevoGrid is a powerful data grid library made by
        <a :href="revolistUrl" target="_blank" rel="noopener">Revolist OU</a>.
        Copyright © {{ year }}-present.
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { RV_GRID_BASE_URL } from './pivotLandingData'

const year = new Date().getFullYear()
const revoGridBaseUrl = `${RV_GRID_BASE_URL}/`
const privacyUrl = `${RV_GRID_BASE_URL}/pro/policies/privacy`
const termsUrl = `${RV_GRID_BASE_URL}/pro/policies/terms`
const securityUrl = `${RV_GRID_BASE_URL}/pro/policies/security`
const quickStartUrl = `${RV_GRID_BASE_URL}/guide/`
const aboutUrl = `${RV_GRID_BASE_URL}/about/`
const servicesUrl = `${RV_GRID_BASE_URL}/services/`
const contactUrl = 'mailto:contact@revolist.eu'
const revolistUrl = 'https://revolist.com'
</script>
