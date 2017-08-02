exports.config = {
  publicPath: 'build',
  bundles: [
    { components: ['app-list', 'share-button', 'lazy-ad', 'lazy-img', 'list-page'] },
    { components: ['routes-page', 'stencil-router', 'stencil-route-link', 'stencil-route', 'app-header', 'main-page'] },
    { components: ['app-toast']}
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
