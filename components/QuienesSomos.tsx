const principios = [
  'Sin acuerdos comerciales con mantenedoras ni fabricantes',
  'Sin comisiones de proveedores de ningún tipo',
  'No vendemos ascensores, repuestos ni equipamiento',
  'No realizamos mantención preventiva ni correctiva',
  'Nuestro único ingreso es el honorario del cliente',
]

export default function QuienesSomos() {
  return (
    <section id="quienes-somos" className="bg-charcoal py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left column — narrative */}
          <div>
            <p className="font-sans text-bronze text-[11px] tracking-widest uppercase mb-5">
              Quiénes somos
            </p>
            <h2 className="font-serif text-cream font-light leading-tight text-balance text-3xl md:text-4xl lg:text-5xl mb-8">
              Experiencia interna en la industria. Lealtad exclusiva al edificio.
            </h2>
            <div className="w-10 h-px bg-bronze mb-8" />
            <p className="font-sans text-cream/60 text-sm leading-relaxed mb-6">
              Contrapeso Vertical es una firma de consultoría técnica fundada por un especialista que trabajó dentro de la industria de ascensores. Conocemos los procesos desde adentro: cómo se elaboran los diagnósticos, cómo se estructuran las propuestas, qué márgenes se manejan en cada cotización.
            </p>
            <p className="font-sans text-cream/60 text-sm leading-relaxed mb-6">
              Ese conocimiento está ahora disponible exclusivamente para los edificios. Sin vinculación con mantenedoras ni fabricantes. Sin comisión de terceros. Nuestro único interlocutor es quien nos contrata.
            </p>
            <p className="font-sans text-cream/60 text-sm leading-relaxed">
              No somos intermediarios. No somos representantes. Somos el asesor técnico independiente que el Comité debería haber tenido desde el primer día.
            </p>
          </div>

          {/* Right column — policy box */}
          <div className="border border-bronze/25 p-8 md:p-10">
            <p className="font-sans text-bronze text-[11px] tracking-widest uppercase mb-6">
              Política de independencia
            </p>
            <ul className="space-y-5">
              {principios.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-bronze mt-0.5 text-sm leading-none select-none">—</span>
                  <span className="font-sans text-cream/60 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
