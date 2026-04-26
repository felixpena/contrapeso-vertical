# Contrapeso Vertical SpA

Landing page institucional para firma de consultoría técnica independiente de ascensores.

## Stack

- **Next.js 14** — App Router
- **Tailwind CSS** — estilos
- **Formspree** — formulario de contacto
- **Vercel** — despliegue

## Estructura

```
app/
  layout.tsx        # Fuentes, metadata SEO, JSON-LD
  page.tsx          # Página principal
  globals.css       # Estilos base
  sitemap.ts        # Sitemap automático
  robots.ts         # robots.txt

components/
  Navbar.tsx        # Navegación sticky con logo SVG
  Hero.tsx          # Sección principal con CTA
  ElProblema.tsx    # El conflicto de interés estructural
  QuienesSomos.tsx  # Identidad y política de independencia
  Servicios.tsx     # Cuatro servicios con CTA individual
  Independencia.tsx # Por qué la independencia importa
  Contacto.tsx      # Formulario con Formspree
  Footer.tsx        # Pie de página

public/
  logo-dark.svg     # Logo para navbar (fondo oscuro)
  logo-light.svg    # Logo para fondos claros
  favicon.svg       # Símbolo CV para pestaña del browser
```

## Desarrollo local

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Variables de entorno

No requiere variables de entorno. El endpoint de Formspree está definido directamente en `components/Contacto.tsx`.

## Despliegue

El proyecto está conectado a Vercel mediante el repositorio de GitHub. Cada push a `main` genera un despliegue automático.

```bash
git push origin main
```

## Dominio

Actualizar `siteUrl` en estos tres archivos cuando el dominio esté activo:

- `app/layout.tsx`
- `app/sitemap.ts`
- `app/robots.ts`
