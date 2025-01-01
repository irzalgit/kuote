const path = require('path');

module.exports = {
  entry: './src/index.js', // File masuk utama
  output: {
    filename: 'bundle.js', // Nama file keluaran
    path: path.resolve(__dirname, 'dist'), // Folder keluaran
  },
  mode: 'development', // Pilihan: 'development', 'production', 'none'
};
