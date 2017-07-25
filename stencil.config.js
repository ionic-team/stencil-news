exports.config = {
  publicPath: 'build',
  bundles: [
    { components: ['app-list', 'share-button', 'lazy-ad', 'lazy-img'] },
    { components: ['app-header', 'main-page', 'app-login'] },
    { components: ['app-toast']}
  ]
};
