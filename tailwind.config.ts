import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'hippie-blue': 'hsla(192, 37%, 48%, 1)',
        deluge: 'hsla(268, 34%, 53%, 1)',
        'ebony-clay': 'hsla(240, 21%, 20%, 1)',
        manatee: 'hsla(240, 10%, 57%, 1)',
        malibu: 'hsla(192, 90%, 77%, 1)',
        mauve: 'hsla(268, 100%, 86%, 1)',
        alabaster: 'hsla(0, 0%, 98%, 1)',
      },
    },
    fontFamily: {
      'red-hat-display': ['Red Hat Display', 'sans-serif'],
    },
  },
  plugins: [],
} satisfies Config
