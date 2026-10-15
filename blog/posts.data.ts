import { createContentLoader } from 'vitepress'
import { createBlogPost, type BlogPost } from './blog'

export declare const data: BlogPost[]
export default createContentLoader(['blog/*.md', '!blog/_*.md', '!blog/*_feature.md'], {
  includeSrc: true,
  transform(pages) {
    return pages
      .filter(page => !/^\/blog\/(?:index(?:\.html)?)?$/.test(page.url))
      .map(page => createBlogPost(page.url, page.frontmatter, page.src))
      .sort((a, b) => (b.date || '').localeCompare(a.date || '') || a.title.localeCompare(b.title))
  },
})
