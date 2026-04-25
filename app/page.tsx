import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ElProblema from '@/components/ElProblema'
import QuienesSomos from '@/components/QuienesSomos'
import Servicios from '@/components/Servicios'
import Independencia from '@/components/Independencia'
import Contacto from '@/components/Contacto'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ElProblema />
        <QuienesSomos />
        <Servicios />
        <Independencia />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
