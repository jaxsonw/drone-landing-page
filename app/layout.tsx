import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "智能无人机系统 - 革命性智能一体无人机平台",
  description: "智能无人机系统，革命性智能一体无人机平台，解锁无限开发可能",
    generator: 'v0.dev'
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
