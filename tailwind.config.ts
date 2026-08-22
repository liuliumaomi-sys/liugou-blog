import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        cream: '#f7f1e7',
        ink: '#26342f',
        moss: '#718b78',
        blush: '#dfa9a4',
        clay: '#b87456',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      boxShadow: { gallery: '0 22px 60px rgba(68, 76, 63, 0.12)' },
    },
  },
  plugins: [],
};

export default config;
