'use client'

import { useState } from 'react'

type FormState = 'idle' | 'sending' | 'success' | 'error'

const inputClass =
  'w-full bg-transparent border-b border-charcoal/20 focus:border-bronze outline-none py-3 font-sans text-sm text-charcoal placeholder-charcoal/30 transition-colors duration-300'

const labelClass =
  'block font-sans text-[10px] text-charcoal/40 tracking-widest uppercase mb-2'

export default function Contacto() {
  const [estado, setEstado] = useState<FormState>('idle')
  const [form, setForm] = useState({
    nombre: '',
    edificio: '',
    email: '',
    telefono: '',
    mensaje: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setEstado('sending')

    try {
      const res = await fetch('https://formspree.io/f/mnjlrjzk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          nombre: form.nombre,
          edificio_o_empresa: form.edificio,
          email: form.email,
          telefono: form.telefono,
          mensaje: form.mensaje,
        }),
      })

      if (res.ok) {
        setEstado('success')
        setForm({ nombre: '', edificio: '', email: '', telefono: '', mensaje: '' })
      } else {
        setEstado('error')
      }
    } catch {
      setEstado('error')
    }
  }

  return (
    <section id="contacto" className="bg-cream-dark py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          {/* Left — header */}
          <div className="md:col-span-4">
            <p className="font-sans text-bronze text-[11px] tracking-widest uppercase mb-5">
              Contacto
            </p>
            <h2 className="font-serif text-charcoal font-light leading-tight text-3xl md:text-4xl mb-6">
              Hablemos
            </h2>
            <div className="w-10 h-px bg-bronze mb-6" />
            <p className="font-sans text-charcoal/55 text-sm leading-relaxed">
              Si está enfrentando una decisión sobre sus ascensores y quiere una opinión independiente, escríbanos.
            </p>
          </div>

          {/* Right — form */}
          <div className="md:col-span-8">
            {estado === 'success' ? (
              <div className="border border-bronze/30 p-10 md:p-14 flex flex-col items-start justify-center min-h-64">
                <div className="w-8 h-px bg-bronze mb-6" />
                <p className="font-serif text-charcoal text-2xl md:text-3xl font-light mb-3">
                  Mensaje recibido
                </p>
                <p className="font-sans text-charcoal/55 text-sm leading-relaxed">
                  Nos pondremos en contacto a la brevedad.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid sm:grid-cols-2 gap-8 mb-8">
                  <div>
                    <label htmlFor="nombre" className={labelClass}>
                      Nombre <span className="text-bronze">*</span>
                    </label>
                    <input
                      id="nombre"
                      type="text"
                      name="nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                      placeholder="Su nombre completo"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="edificio" className={labelClass}>
                      Edificio o empresa
                    </label>
                    <input
                      id="edificio"
                      type="text"
                      name="edificio"
                      value={form.edificio}
                      onChange={handleChange}
                      placeholder="Nombre del edificio o empresa"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-8 mb-8">
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email <span className="text-bronze">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                      placeholder="correo@ejemplo.com"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="telefono" className={labelClass}>
                      Teléfono
                    </label>
                    <input
                      id="telefono"
                      type="tel"
                      name="telefono"
                      value={form.telefono}
                      onChange={handleChange}
                      autoComplete="tel"
                      placeholder="+56 9 1234 5678"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="mb-10">
                  <label htmlFor="mensaje" className={labelClass}>
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Cuéntenos sobre su situación"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {estado === 'error' && (
                  <p className="font-sans text-sm text-red-600 mb-6">
                    Hubo un problema al enviar el formulario. Por favor intente nuevamente.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={estado === 'sending'}
                  className="font-sans text-[11px] tracking-widest uppercase bg-charcoal text-cream px-8 py-4 hover:bg-charcoal-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {estado === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
