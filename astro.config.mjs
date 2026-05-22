// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://labs.etern.co.kr',
  vite: {
    plugins: [tailwind()],
  },
});
