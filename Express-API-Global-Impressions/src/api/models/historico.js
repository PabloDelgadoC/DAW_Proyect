const mongoose = require('mongoose');

const HistoricoSchema = new mongoose.Schema({
  nombre: String,
  talla: String,
  imagen: String,
  precio: Number,
  descripcion: String,
  vistas: Number,
  likes: Number
});

module.exports = mongoose.model('historico', HistoricoSchema);
