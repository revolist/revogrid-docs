import type { ReactNode } from 'react'
import '@revolist/ui/styles.css'
import '@revolist/ui/dropdown/editor-dropdown.style.scss'
import './style.css'
export const metadata = {
  title: 'Next.js order line editor · RevoGrid',
  description: 'Versioned row saving with a persistent local demo database.',
}
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
