const swBuild = require('workbox-build');

swBuild.generateSW({
  navigateFallback: 'index.html',
  globDirectory: './dist',
  globPatterns: [
    'index.html',
    '**.js',
    '**.css',
    'assets/avatar.png',
    'assets/sda-control.svg',
    'assets/super-store.svg',
    'assets/games/**',
    'manifest.json',
    "fontawesome-webfont.af7ae505a9eed503f8b8.woff2",
    "fontawesome-webfont.fee66e712a8a08eef580.woff",
    "fontawesome-webfont.fee66e712a8a08eef580.woff"
  ],
  swDest: 'dist/sw.js',
  templatedUrls: {
    '?utm_source=pwa': ['index.html'],
  }
}).then(() => console.log('Service Worker generated')).catch(err => console.error(err, 'Service Worker failed to generate'));
