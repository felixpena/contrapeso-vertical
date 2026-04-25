const problemas = [
  {
    titulo: 'Conflicto de interés estructural',
    texto:
      'La empresa que mantiene sus ascensores es la misma que diagnostica los problemas y vende las soluciones. Su incentivo es vender, no asesorar. No existe razón comercial para que le digan que su ascensor está bien.',
  },
  {
    titulo: 'El Comité no tiene a nadie de su lado',
    texto:
      'Los administradores y Comités de Administración toman decisiones técnicas complejas sin ningún asesor independiente que los represente. Negocian en terreno completamente ajeno, con información que viene del mismo proveedor.',
  },
  {
    titulo: 'Decisiones de $30M a $80M sin información real',
    texto:
      'Una modernización de ascensores puede comprometer presupuestos de años. Estas decisiones se toman, habitualmente, con una sola fuente de información: el proveedor que vende el servicio.',
  },
]

export default function ElProblema() {
  return (
    <section id="el-problema" className="bg-cream py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <p className="font-sans text-bronze text-[11px] tracking-widest uppercase mb-5">
            El problema
          </p>
          <h2 className="font-serif text-charcoal font-light leading-tight text-balance text-3xl md:text-4xl lg:text-5xl">
            El mismo que diagnostica es el mismo que vende la solución
          </h2>
        </div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-charcoal/10">
          {problemas.map((p, i) => (
            <div key={i} className="py-10 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0">
              <span className="font-sans text-bronze/50 text-[10px] tracking-widest uppercase block mb-5">
                0{i + 1}
              </span>
              <h3 className="font-serif text-charcoal text-xl md:text-2xl font-light leading-snug mb-5">
                {p.titulo}
              </h3>
              <p className="font-sans text-charcoal/55 text-sm leading-relaxed">{p.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
