export default function Independencia() {
  return (
    <section id="independencia" className="bg-charcoal-800 py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          {/* Label column */}
          <div className="md:col-span-3">
            <p className="font-sans text-bronze text-[11px] tracking-widest uppercase">
              Por qué importa
            </p>
          </div>

          {/* Content column */}
          <div className="md:col-span-9">
            <h2 className="font-serif text-cream font-light leading-tight text-balance text-3xl md:text-4xl lg:text-[2.75rem] mb-8">
              La independencia no es un atributo. Es la condición de posibilidad del servicio.
            </h2>
            <div className="w-10 h-px bg-bronze mb-8" />
            <div className="space-y-5 max-w-2xl">
              <p className="font-sans text-cream/60 text-sm leading-relaxed">
                Un asesor que recibe comisiones de proveedores no es un asesor: es un vendedor con otro nombre. Cada recomendación que haga estará contaminada por ese vínculo, aunque no sea consciente de ello.
              </p>
              <p className="font-sans text-cream/60 text-sm leading-relaxed">
                Nosotros no recibimos comisiones. No tenemos acuerdos con mantenedoras. No vendemos equipos. Nuestro único ingreso es el honorario que paga el cliente.
              </p>
              <p className="font-sans text-cream/60 text-sm leading-relaxed">
                Eso nos permite decir lo que ningún otro actor del mercado puede permitirse: la verdad técnica, sin filtros comerciales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
