import { defineConfig } from 'astro/config';
import react from '@astrojs/react'; // React-Integration importieren
import AstroPWA from '@vite-pwa/astro'

export default defineConfig({
    site: 'https://csaaro.github.io',
    base: 'checkin',
  integrations: [react(),
    AstroPWA({
        mode: 'development',
        base: '/checkin/',
        scope: '/checkin/',
        includeAssets: ['favicon.svg'],
        registerType: 'autoUpdate',
        manifest: {
          name: 'Astro PWA',
          short_name: 'Astro PWA',
          theme_color: '#ffffff',
          icons: [
            {
              src: '/checkin/pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: '/checkin/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable',
            },
          ],
        },
        workbox: {
          navigateFallback: '/',
          globPatterns: ['**/*.{css,js,html,svg,png,ico,txt}'],
        },
        devOptions: {
          enabled: true,
          navigateFallbackAllowlist: [/^\//],
        },
        experimental: {
          directoryAndTrailingSlashHandler: true,
        }
      }),
  ],
});