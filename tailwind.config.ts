import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: {
          DEFAULT: '#F7F3EC',
          dark: '#EDE8DB',
        },
        charcoal: {
          DEFAULT: '#1C1C1A',
          800: '#2A2A27',
          700: '#3A3A36',
          600: '#56564F',
          400: '#8A8A80',
        },
        bronze: {
          DEFAULT: '#9B8360',
          light: '#C4A97A',
          dark: '#7A6445',
        },
      },
      letterSpacing: {
        widest: '0.2em',
      },
    },
  },
  plugins: [],
}

export default config
