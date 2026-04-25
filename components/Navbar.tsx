'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'El problema', href: '#el-problema' },
  { label: 'Quiénes somos', href: '#quienes-somos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-charcoal/96 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#inicio"
          className="font-serif text-cream text-base md:text-lg tracking-wide hover:text-bronze transition-colors duration-300"
        >
          Contrapeso Vertical
        </a>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-[11px] text-cream/60 tracking-widest uppercase hover:text-cream transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-0"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <span
            className={`block w-5 h-px bg-cream transition-all duration-300 ${
              menuOpen ? 'translate-y-[5px] rotate-45' : ''
            }`}
          />
          <span
            className={`block w-5 h-px bg-cream my-[5px] transition-all duration-300 ${
              menuOpen ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-px bg-cream transition-all duration-300 ${
              menuOpen ? '-translate-y-[5px] -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-charcoal border-t border-cream/10 ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-xs text-cream/60 tracking-widest uppercase hover:text-cream transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
