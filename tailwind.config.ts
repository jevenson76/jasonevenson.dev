import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        // Mapping of design tokens to CSS variables for consistent palette usage
        primary: 'var(--color-primary)',
        teal: 'var(--color-teal)',
        lime: 'var(--color-lime)',
        dark: 'var(--color-dark)',
        black: 'var(--color-black)',
        neon: 'var(--color-neon)',
        lav: 'var(--color-lav)',
        gold: 'var(--color-gold)',

        'quantum-deep': 'var(--quantum-deep)',
        'quantum-dark': 'var(--quantum-dark)',
        'quantum-glow': 'var(--quantum-glow)',
        'quantum-cyan': 'var(--quantum-cyan)',
        'quantum-purple': 'var(--quantum-purple)',
      },
      spacing: {
        19: '4.75rem', // Custom spacing used for tighter sections (~76px)
        29: '7.25rem', // Custom spacing for larger section padding (~116px)
      },
      animation: {
        'float': 'float 20s infinite linear',
        'rotate': 'rotate 20s infinite linear',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translate3d(0, 100vh, 0) scale(0)', opacity: '0' },
          '10%, 90%': { opacity: '1' },
          '100%': { transform: 'translate3d(100vw, -100vh, 0) scale(1.5)', opacity: '0' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
export default config