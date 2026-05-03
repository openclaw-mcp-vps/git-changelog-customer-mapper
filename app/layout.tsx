import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Git Changelog Customer Mapper — Map commits to customer feature requests',
  description: 'Connects git commits to support tickets and feature requests to auto-generate customer-facing changelogs with impact tracking.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1b3f1c8d-8836-4b57-b82f-5072865c4f81"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
