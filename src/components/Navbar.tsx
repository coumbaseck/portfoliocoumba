'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const linkClass = (path: string) =>
    `px-4 py-2 rounded-full text-sm font-medium transition ${
      pathname === path
        ? 'bg-gradient-to-r from-purple-500 to-pink-400 text-white shadow-md'
        : 'text-purple-700 hover:bg-purple-100'
    }`

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-400">
          Portfolio Coumba
        </div>
        <div className="space-x-3">
          <Link href="/" className={linkClass('/')}>Accueil</Link>
          <Link href="/about" className={linkClass('/about')}>À propos</Link>
          <Link href="/projects" className={linkClass('/projects')}>Projets</Link>
          <Link href="/contact" className={linkClass('/contact')}>Contact</Link>
        </div>
      </div>
    </nav>
  )
}
