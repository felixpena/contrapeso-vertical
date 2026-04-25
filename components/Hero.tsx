export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-charcoal flex flex-col justify-center px-6 pt-24 pb-20"
    >
      {/* Subtle top rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-bronze/20" />

      <div className="max-w-5xl mx-auto w-full">
        {/* Eyebrow */}
        <p className="font-sans text-bronze text-[11px] tracking-widest uppercase mb-10 md:mb-12">
          Consultoría Técnica Independiente de Ascensores — Chile
        </p>

        {/* Headline */}
        <h1 className="font-serif text-cream font-light leading-tight text-balance mb-10 text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem]">
          Cuando le dicen que necesita modernizar sus ascensores, ¿tiene usted manera de saber si es verdad?
        </h1>

        {/* Divider */}
        <div className="w-14 h-px bg-bronze mb-10" />

        {/* Subheadline */}
        <p className="font-sans text-cream/60 text-base md:text-lg leading-relaxed max-w-2xl mb-14">
          Somos ex-industria. Conocemos cómo se construyen esos argumentos. Ahora trabajamos exclusivamente para el edificio.
        </p>

        {/* CTA */}
        <a
          href="#contacto"
          className="inline-block font-sans text-[11px] tracking-widest uppercase bg-bronze text-cream px-8 py-4 hover:bg-bronze-light transition-colors duration-300"
        >
          Solicitar consulta independiente
        </a>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-cream/5 pointer-events-none" />
    </section>
  )
}
