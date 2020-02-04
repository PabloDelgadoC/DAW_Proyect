const connection = require('../../../dbMysql');

const ProductoModel =  {};

ProductoModel.listar = callback => {
  if (connection){
    connection.query('SELECT * FROM Producto', (error, results, fields) => {
      if (error){ throw error;}
      else {
        callback(null, results);
      }
    });
  }
}



module.exports = ProductoModel
