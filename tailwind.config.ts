import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFC700',
        secondary: '#FFD700',
        dark: '#000000',
        'dark-light': '#0a0a0a',
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
        display: ['system-ui', 'sans-serif'],
      },
      fontSize: {
        'heading-1': ['4.5rem', { lineHeight: '1.1', fontWeight: '900' }],
        'heading-2': ['3.75rem', { lineHeight: '1.1', fontWeight: '900' }],
        'heading-3': ['2.25rem', { lineHeight: '1.2', fontWeight: '700' }],
        'body': ['1rem', { lineHeight: '1.6' }],
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-30px)' },
        },
        glow: {
          '0%, 100%': { 'box-shadow': '0 0 20px rgba(255, 199, 0, 0.5)' },
          '50%': { 'box-shadow': '0 0 40px rgba(255, 199, 0, 0.8)' },
        },
      },
      boxShadow: {
        'glow-sm': '0 0 20px rgba(255, 199, 0, 0.3)',
        'glow-md': '0 0 40px rgba(255, 199, 0, 0.5)',
        'glow-lg': '0 0 60px rgba(255, 199, 0, 0.7)',
      },
      backdropBlur: {
        xl: '20px',
      },
    },
  },
  plugins: [],
}

export default config
