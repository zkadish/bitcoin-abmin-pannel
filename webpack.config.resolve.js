const path = require('path');

module.exports = {
  extensions: ['*', '.js', '.jsx'],
  modules: [
    'node_modules',
    path.join(__dirname, 'src')],
  alias: {
    src: path.resolve(__dirname, 'src/'),
    components: path.resolve(__dirname, 'src/components/'),
  },
};
