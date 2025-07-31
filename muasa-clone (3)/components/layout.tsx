import type React from "react"
import Header from "./header"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Stars background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-1 h-1 bg-white rounded-full opacity-60"></div>
        <div className="absolute top-32 left-32 w-1 h-1 bg-white rounded-full opacity-40"></div>
        <div className="absolute top-16 right-20 w-1 h-1 bg-white rounded-full opacity-80"></div>
        <div className="absolute top-40 right-40 w-1 h-1 bg-white rounded-full opacity-50"></div>
        <div className="absolute bottom-32 left-20 w-1 h-1 bg-white rounded-full opacity-70"></div>
        <div className="absolute bottom-20 right-32 w-1 h-1 bg-white rounded-full opacity-60"></div>
        <div className="absolute top-60 left-1/4 w-1 h-1 bg-white rounded-full opacity-40"></div>
        <div className="absolute bottom-40 right-1/4 w-1 h-1 bg-white rounded-full opacity-80"></div>
        <div className="absolute top-80 right-1/3 w-1 h-1 bg-white rounded-full opacity-50"></div>
        <div className="absolute bottom-60 left-1/3 w-1 h-1 bg-white rounded-full opacity-70"></div>
      </div>

      <Header />
      {children}
    </div>
  )
}
