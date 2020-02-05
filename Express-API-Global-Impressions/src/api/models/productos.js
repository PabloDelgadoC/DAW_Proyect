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

ProductoModel.listarById = (id, callback) => {
  if(connection){
    //connection.escape(valor) es para evtar los ataques sql injection
    const query = `SELECT * FROM Producto WHERE idProducto = ${connection.escape(id)}`;
    connection.query(query, (error, result) => {
      if(error){ throw error;}
      else{
        callback(null, result);
      }
    });
  }
}

ProductoModel.crear = (producto, callback) => {
  const query = 'INSERT INTO Producto SET ?';
  if (connection) {
    connection.query(query, producto, (error, result) => {
      if(error){ throw error;}
      else{
        callback(null, {
          'detalle': result.id
        });
      }
    });
  }
}

ProductoModel.actualizar = (producto, callback) => {
  if(connection) {
    const query = `
      UPDATE Producto SET
      imagePath = ${connection.escape(producto.imagePath)},
      precio = ${connection.escape(producto.precio)},
      detalle = ${connection.escape(producto.detalle)},
      idAutor = ${connection.escape(producto.idAutor)},
      descripcion = ${connection.escape(producto.descripcion)},
      idTipoProducto = ${connection.escape(producto.idTipoProducto)},
      likes = ${connection.escape(producto.likes)}
      WHERE idProducto = ${connection.escape(producto.idProducto)}
    `;
    connection.query(query, (error, result) => {
      if(error){ throw error;}
      else{
        callback(null,result);
      }
    });
  }
}

ProductoModel.borrarById = (id, callback) => {
  if(connection) {
    let querySelect = `SELECT * FROM Producto WHERE idProducto = ${connection.escape(id)}`;
    connection.query(querySelect, (error, result) => {
      if(result){
        const queryDelete = `DELETE FROM Producto WHERE idProducto = ${id}`;
        connection.query(queryDelete, (error, result) => {
          if(error) {throw error;}
          else{
            callback(null, {'msg': 'BORRADO CON EXITO'});
          }
        });
      }else{
        callback(null,{'msg':'NO EXISTE EL ID'})
      }
    });
  }
}

module.exports = ProductoModel
