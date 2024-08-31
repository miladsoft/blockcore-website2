import defaultTheme from 'tailwindcss/defaultTheme';
import typographyPlugin from '@tailwindcss/typography';

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--blockcore-color-primary)',
        secondary: 'var(--blockcore-color-secondary)',
        accent: 'var(--blockcore-color-accent)',
        default: 'var(--blockcore-color-text-default)',
        muted: 'var(--blockcore-color-text-muted)',
      },
      fontFamily: {
        sans: ['var(--blockcore-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--blockcore-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--blockcore-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [typographyPlugin],
  darkMode: 'class',
};
