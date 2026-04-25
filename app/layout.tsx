import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const siteUrl = 'https://www.contrapesoverticale.cl'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Contrapeso Vertical SpA — Consultoría Técnica Independiente de Ascensores Chile',
    template: '%s | Contrapeso Vertical SpA',
  },
  description:
    'Consultoría técnica independiente de ascensores en Chile. Segunda opinión técnica, auditoría de mantención y licitación. Sin vínculos con mantenedoras ni fabricantes. Trabajamos exclusivamente para edificios.',
  keywords: [
    'consultoría ascensores Chile',
    'segunda opinión técnica ascensores',
    'auditoría mantención ascensores',
    'licitación modernización ascensores',
    'asesor independiente ascensores',
    'inspección ascensores edificios',
    'consultor ascensores Santiago',
    'Contrapeso Vertical',
    'perito ascensores Chile',
    'comité administración ascensores',
  ],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  authors: [{ name: 'Contrapeso Vertical SpA' }],
  creator: 'Contrapeso Vertical SpA',
  publisher: 'Contrapeso Vertical SpA',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: siteUrl,
    siteName: 'Contrapeso Vertical SpA',
    title: 'Contrapeso Vertical SpA — Consultoría Técnica Independiente de Ascensores',
    description:
      'Consultoría técnica independiente de ascensores en Chile. Sin vínculos con mantenedoras ni fabricantes. Trabajamos exclusivamente para edificios.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Contrapeso Vertical SpA — Consultoría Técnica Independiente de Ascensores Chile',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contrapeso Vertical SpA — Consultoría Técnica Independiente de Ascensores',
    description:
      'Consultoría técnica independiente de ascensores en Chile. Sin vínculos con mantenedoras ni fabricantes.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      'es-CL': siteUrl,
    },
  },
  category: 'business',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CL" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        {/* Structured data — LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Contrapeso Vertical SpA',
              description:
                'Consultoría técnica independiente de ascensores en Chile. Sin vínculos con mantenedoras ni fabricantes.',
              url: siteUrl,
              areaServed: {
                '@type': 'Country',
                name: 'Chile',
              },
              serviceType: [
                'Segunda opinión técnica de ascensores',
                'Auditoría de mantención de ascensores',
                'Auditoría de licitación de ascensores',
                'Acompañamiento integral en modernización de ascensores',
              ],
              knowsAbout: 'Ascensores, elevadores, mantenimiento de elevadores, modernización de ascensores',
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Servicios de consultoría independiente de ascensores',
              },
            }),
          }}
        />
      </head>
      <body className="font-sans bg-cream text-charcoal antialiased">{children}</body>
    </html>
  )
}
