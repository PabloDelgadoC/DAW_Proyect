const mongoose = require('mongoose');

const HistoricoSchema = new mongoose.Schema({
  nombre: String,
  imagen: String,
  precio: Number,
  descripcion: String,
  likes: Number,
  autor: Number
});

HistoricoSchema.statics = {

  listar() {
    console.log(this.find().getFilter());
    return this.find({}, (err, data) => {
      JSON.stringify(data);
    });
  },

  async listarById(id) {
    let dato;
    dato = await this.findById(id).exec();
    if(dato){
      return dato;
    }
  },
};
module.exports = mongoose.model('historico', HistoricoSchema);
