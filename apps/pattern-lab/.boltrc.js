module.exports = {
  // Environmental variable / preset to use
  env: 'pl',
  buildDir: '../../www/pattern-lab/build',
  wwwDir: '../../www/',
  startPath: 'pattern-lab/index.html',
  plConfigFile: './config/config.yml',
  verbosity: 1,
  extraTwigNamespaces: {
    'bolt': {
      recursive: true,
      paths: ['./src'],
    },
    'bolt-assets': {
      recursive: true,
      paths: ['../../www/pattern-lab/build'],
    },
    utils: {
      recursive: true,
      paths: ['src/_includes'],
    },
  },
  images: {
    sets: [
      {
        base: './src/assets/images',
        glob: '**',
        dist: '../../www/pattern-lab/images/',
      },
    ],
  },
  components: {
    global: [
      './src/styles/pl.scss',
      './src/scripts/pl.js',
      './src/_patterns/04-pages/80-pega-world/pega-world.scss',
      '@bolt/core',
      '@bolt/global',
      '@bolt/components-action-blocks',
      '@bolt/components-background',
      '@bolt/components-background-shapes',
      '@bolt/components-band',
      '@bolt/components-blockquote',
      '@bolt/components-breadcrumb',
      '@bolt/components-button',
      '@bolt/components-button-group',
      '@bolt/components-card',
      '@bolt/components-chip',
      '@bolt/components-chip-list',
      '@bolt/components-device-viewer',
      '@bolt/components-figure',
      '@bolt/components-form',
      '@bolt/components-headline',
      '@bolt/components-icon',
      '@bolt/components-icons',
      '@bolt/components-image',
      '@bolt/components-link',
      '@bolt/components-nav-bar',
      '@bolt/components-logo',
      '@bolt/components-ordered-list',
      '@bolt/components-page-footer',
      '@bolt/components-page-header',
      '@bolt/components-site',
      '@bolt/components-smooth-scroll',
      '@bolt/components-sticky',
      '@bolt/components-teaser',
      '@bolt/components-unordered-list',
      '@bolt/components-video',
    ],
    individual: [
      '@bolt/components-critical-fonts'
    ],
  },
};
