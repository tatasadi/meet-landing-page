import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsla(192, 37%, 48%, 1)',
        secondary: 'hsla(268, 34%, 53%, 1)',
        dark: 'hsla(240, 21%, 20%, 1)',
        light: 'hsla(240, 10%, 57%, 1)',
        'primary-bright': 'hsla(192, 90%, 77%, 1)',
        'secondary-bright': 'hsla(268, 100%, 86%, 1)',
        'very-light': 'hsla(0, 0%, 98%, 1)',
      },
    },
    fontFamily: {
      'red-hat-display': ['Red Hat Display', 'sans-serif'],
    },
  },
  plugins: [],
} satisfies Config
