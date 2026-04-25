const navLinks = [
  { label: 'El problema', href: '#el-problema' },
  { label: 'Quiénes somos', href: '#quienes-somos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-charcoal border-t border-cream/8 py-14 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-0 mb-12">
          {/* Brand */}
          <div>
            <p className="font-serif text-cream text-lg mb-1">Contrapeso Vertical SpA</p>
            <p className="font-sans text-cream/35 text-xs tracking-wide">
              Consultoría Técnica Independiente de Ascensores
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-[10px] text-cream/35 tracking-widest uppercase hover:text-cream/70 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-cream/8 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="font-sans text-cream/25 text-xs">
            © {year} Contrapeso Vertical SpA. Chile.
          </p>
          <p className="font-sans text-cream/20 text-xs">
            Sin vínculos con mantenedoras ni fabricantes.
          </p>
        </div>
      </div>
    </footer>
  )
}
