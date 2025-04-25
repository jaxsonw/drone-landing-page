import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "智能开发无人机系统 - 革命性算控一体无人机平台",
  description: "智能开发无人机系统，革命性算控一体无人机平台，解锁无限开发可能",
  generator: 'v0.dev',
  icons: [
    { rel: "icon", url: "/web-17.png" },
    { rel: "shortcut icon", url: "/web-17.png" },
    { rel: "apple-touch-icon", url: "/web-17.png" }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-white">{children}</body>
    </html>
  )
}
