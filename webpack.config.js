const path = require('path');

module.exports = {
  entry: './src/index.js', // File masuk utama
cache: {
  type: 'filesystem',
  buildDependencies: {
    config: [__filename],
  },
},
module: {
    rules: [
      {
        test: /\.handlebars$/,
        loader: 'handlebars-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.mjs', '.handl>
  },
  output: {
    filename: 'bundle.js', // Nama file keluaran
    path: path.resolve(__dirname, 'dist'), // Folder keluaran
  },
  mode: 'development', // Pilihan: 'development', 'production', 'none'
};




