<script setup lang="ts">
import { computed, ref } from 'vue'
import { useData } from 'vitepress'
import { useLayout } from 'vitepress/dist/client/theme-default/composables/layout.js'
import ContactForm from '../../pro/ContactForm.vue'
import FontAwesomeSvgIcon from './home-v2/FontAwesomeSvgIcon.vue'
import VPImage from './VPImage.vue'
import { useHomeLink } from './useHomeLink'

const showForm = ref(false)
const { site, theme, frontmatter } = useData()
const { hasSidebar } = useLayout()
const { homeLink } = useHomeLink()

const footerLink = (text: string, link: string) => {
  if (!frontmatter.value.externalHomeLinks) return homeLink(link)
  if (text === 'About us') return homeLink('/about/')
  if (text === 'Services') return homeLink('/services/')
  return homeLink(link)
}

const footerSections = computed(() =>
  (theme.value.footer?.items ?? []).map((section) => ({
    ...section,
    links: section.links.map((item) => ({
      ...item,
      link: item.link ? footerLink(item.text, item.link) : undefined,
    })),
  })),
)

const homeUrl = computed(() => homeLink('/'))
const contactUrl = computed(() => homeLink('/contact/'))
</script>

<template>
  <ContactForm key="footer-contact" :is-visible="showForm" @close="showForm = false" />
  <footer
    v-if="theme.footer && frontmatter.footer !== false"
    class="VPFooter"
    :class="{ 'has-sidebar': hasSidebar }"
  >
    <div class="footer-container">
      <div class="footer-main">
        <div class="footer-brand">
          <a class="logo-container" :href="homeUrl" aria-label="RevoGrid home">
            <VPImage v-if="theme.logo" class="logo" :image="theme.logo" />
            <span v-if="theme.siteTitle" v-html="theme.siteTitle"></span>
            <strong v-else>{{ site.title }}</strong>
          </a>
          <p>Enterprise-grade data grid for modern web applications.</p>
          <div class="social-links" aria-label="RevoGrid social links">
            <a
              href="https://github.com/revolist/revogrid"
              target="_blank"
              rel="noopener"
              aria-label="RevoGrid on GitHub"
            >
              <FontAwesomeSvgIcon name="github" />
            </a>
            <a
              href="https://www.linkedin.com/company/revogrid-dev"
              target="_blank"
              rel="noopener"
              aria-label="RevoGrid on LinkedIn"
            >
              <FontAwesomeSvgIcon name="linkedin" />
            </a>
          </div>
        </div>

        <nav v-if="footerSections.length" class="footer-sections" aria-label="Footer navigation">
          <section v-for="section in footerSections" :key="section.title" class="footer-section">
            <h2>{{ section.title }}</h2>
            <ul>
              <li v-for="item in section.links" :key="item.text">
                <a :href="item.link">{{ item.text }}</a>
              </li>
              <li v-if="section.title === 'Company'">
                <a v-if="frontmatter.externalHomeLinks" :href="contactUrl">Contact</a>
                <button v-else type="button" @click="showForm = true">Contact</button>
              </li>
            </ul>
          </section>
        </nav>
      </div>

      <div v-if="theme.footer.message" class="footer-meta">
        <p v-html="theme.footer.message"></p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.VPFooter {
  position: relative;
  z-index: var(--vp-z-index-footer);
  overflow: hidden;
  border-top: 1px solid color-mix(in srgb, var(--vp-c-brand-1) 18%, #334155);
  background:
    radial-gradient(circle at 20% 0%, rgba(71, 85, 105, 0.24), transparent 34%),
    linear-gradient(110deg, #1f2d3d, #172433);
  color: #cbd5e1;
}

.VPFooter.has-sidebar {
  display: none;
}

.footer-container {
  width: min(1240px, calc(100% - 48px));
  margin: 0 auto;
  padding: 42px 0 18px;
}

.footer-main {
  display: grid;
  grid-template-columns: minmax(230px, 1.35fr) minmax(0, 3.65fr);
  gap: clamp(54px, 8vw, 120px);
}

.footer-brand {
  .logo-container {
    display: inline-flex;
    align-items: center;
    gap: 11px;
    color: #f8fafc;
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
  }

  > p {
    max-width: 230px;
    margin: 16px 0 20px;
    color: #cbd5e1;
    font-size: 13px;
    line-height: 1.75;
  }
}

:deep(.logo) {
  width: 28px;
  height: 28px;
  filter: brightness(0) invert(1);
}

.social-links {
  display: flex;
  gap: 10px;

  a {
    display: grid;
    width: 36px;
    height: 36px;
    place-items: center;
    border: 1px solid rgba(203, 213, 225, 0.22);
    border-radius: 8px;
    color: #f8fafc;
    text-decoration: none;
    transition: border-color 0.2s, background-color 0.2s, color 0.2s;

    &:hover {
      border-color: var(--vp-c-brand-2);
      background: rgba(255, 255, 255, 0.06);
      color: var(--vp-c-brand-2);
    }

    &:focus-visible {
      outline: 2px solid var(--vp-c-brand-2);
      outline-offset: 3px;
    }
  }
}

:deep(.social-links .fa-svg-icon) {
  width: 18px;
  height: 18px;
}

:deep(.social-links svg) {
  fill: currentColor;
  opacity: 1;
}

.footer-sections {
  display: grid;
  grid-template-columns: repeat(4, minmax(120px, 1fr));
  gap: clamp(28px, 5vw, 72px);
}

.footer-section {
  h2 {
    margin: 0 0 14px;
    color: #f8fafc;
    font-size: 13px;
    font-weight: 600;
    line-height: 1.4;
  }

  ul {
    display: grid;
    gap: 9px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a,
  button {
    padding: 0;
    border: 0;
    background: transparent;
    color: #aebdce;
    font: inherit;
    font-size: 12px;
    line-height: 1.5;
    text-align: left;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: #fff;
    }

    &:focus-visible {
      border-radius: 2px;
      outline: 2px solid var(--vp-c-brand-2);
      outline-offset: 3px;
    }
  }
}

.footer-meta {
  margin-top: 34px;
  padding-top: 15px;
  border-top: 1px solid rgba(203, 213, 225, 0.13);

  p {
    margin: 0;
    color: #8191a4;
    font-size: 10px;
    line-height: 1.6;
  }

  :deep(a) {
    color: #aebdce;
    text-decoration: none;

    &:hover {
      color: #fff;
    }
  }
}

@media (max-width: 900px) {
  .footer-main {
    grid-template-columns: minmax(0, 1fr);
    gap: 38px;
  }

  .footer-brand > p {
    max-width: 360px;
  }
}

@media (max-width: 680px) {
  .footer-container {
    width: min(100% - 36px, 1240px);
    padding-top: 34px;
  }

  .footer-sections {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 32px 28px;
  }
}

@media (max-width: 380px) {
  .footer-sections {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
