const mongoose = require('mongoose');

const HistoricoSchema = new mongoose.Schema({
  nombre: String,
  imagen: String,
  precio: Number,
  descripcion: String,
  likes: Number,
  autor: Number
});

module.exports = mongoose.model('historico', HistoricoSchema);
