const servicios = [
  {
    numero: '01',
    nombre: 'Segunda Opinión Técnica',
    descripcion:
      'La mantenedora le entregó un diagnóstico. ¿Es verdad? En una semana le decimos qué es real, qué está exagerado y qué no corresponde.',
  },
  {
    numero: '02',
    nombre: 'Auditoría de Mantención',
    descripcion:
      '¿Realmente están haciendo las mantenciones que declaran? Revisamos el historial completo y verificamos en terreno.',
  },
  {
    numero: '03',
    nombre: 'Auditoría de Licitación',
    descripcion:
      'Su edificio recibió propuestas de modernización. Analizamos cada una con criterio independiente. Detectamos sesgos, comparamos y le decimos cuál conviene y por qué.',
  },
  {
    numero: '04',
    nombre: 'Acompañamiento Integral',
    descripcion:
      'Desde el diagnóstico inicial hasta el cierre del contrato. Estamos en todo el proceso, de su lado.',
  },
]

export default function Servicios() {
  return (
    <section id="servicios" className="bg-cream py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <p className="font-sans text-bronze text-[11px] tracking-widest uppercase mb-5">
            Servicios
          </p>
          <h2 className="font-serif text-charcoal font-light leading-tight text-balance text-3xl md:text-4xl lg:text-5xl">
            Criterio técnico independiente en cada etapa
          </h2>
        </div>

        {/* Service grid */}
        <div className="grid md:grid-cols-2 gap-px bg-charcoal/10">
          {servicios.map((s) => (
            <article
              key={s.numero}
              className="bg-cream p-10 md:p-12 flex flex-col group hover:bg-cream-dark transition-colors duration-300"
            >
              <span className="font-sans text-bronze/40 text-[10px] tracking-widest uppercase block mb-5">
                {s.numero}
              </span>
              <h3 className="font-serif text-charcoal text-2xl md:text-3xl font-light leading-snug mb-5">
                {s.nombre}
              </h3>
              <p className="font-sans text-charcoal/55 text-sm leading-relaxed mb-8 flex-1">
                {s.descripcion}
              </p>
              <a
                href="#contacto"
                className="font-sans text-[11px] tracking-widest uppercase text-bronze inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
              >
                Consultar
                <span className="block w-4 h-px bg-bronze" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
