'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="relative z-50 sci-fi-bg glow-border border-b">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold glow-text text-purple-300 hover:text-purple-200 transition-all duration-300">
              &lt;BRENNAN MCFARLAND /&gt;
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link 
              href="/" 
              className={`relative px-4 py-2 border border-transparent hover:border-purple-500/40 rounded-md transition-all duration-300 group ${
                pathname === '/' 
                  ? 'text-purple-300 glow-text border-purple-500/60 sci-fi-bg' 
                  : 'text-slate-300 hover:text-purple-300'
              }`}
            >
              <span className="relative z-10">HOME</span>
              {pathname === '/' && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-purple-600/10 rounded-md pulse-glow"></div>
              )}
            </Link>
            <Link 
              href="/projects" 
              className={`relative px-4 py-2 border border-transparent hover:border-purple-500/40 rounded-md transition-all duration-300 group ${
                pathname === '/projects' 
                  ? 'text-purple-300 glow-text border-purple-500/60 sci-fi-bg' 
                  : 'text-slate-300 hover:text-purple-300'
              }`}
            >
              <span className="relative z-10">PROJECTS</span>
              {pathname === '/projects' && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-purple-600/10 rounded-md pulse-glow"></div>
              )}
            </Link>
            <Link 
              href="/about-site" 
              className={`relative px-4 py-2 border border-transparent hover:border-purple-500/40 rounded-md transition-all duration-300 group ${
                pathname === '/about-site' 
                  ? 'text-purple-300 glow-text border-purple-500/60 sci-fi-bg' 
                  : 'text-slate-300 hover:text-purple-300'
              }`}
            >
              <span className="relative z-10">ABOUT</span>
              {pathname === '/about-site' && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-purple-600/10 rounded-md pulse-glow"></div>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}