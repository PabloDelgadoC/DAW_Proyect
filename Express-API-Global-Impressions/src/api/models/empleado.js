const connection = require('../../../dbMysql');

const EmpleadoModel =  {};

EmpleadoModel.listar = callback => {
  if (connection){
    connection.query('SELECT * FROM Empleado', (error, results, fields) => {
      if (error){ throw error;}
      else {
        callback(null, results);
      }
    });
  }
}
EmpleadoModel.crear = obejtoEmpleado,callback => {
  if (connection){
    connection.query('INSERT INTO Empleado SET ?',obejtoEmpleado, (error, results, fields) => {
      if (error){ throw error;}
      else {
        callback(null, results);
      }
    });
  }
}
EmpleadoModel.listarById = callback => {
  if (connection){
    connection.query('SELECT * FROM Empleado', (error, results, fields) => {
      if (error){ throw error;}
      else {
        callback(null, results);
      }
    });
  }
}
EmpleadoModel.actualizar = callback => {
  if (connection){
    connection.query('SELECT * FROM Empleado', (error, results, fields) => {
      if (error){ throw error;}
      else {
        callback(null, results);
      }
    });
  }
}
EmpleadoModel.borrar = callback => {
  if (connection){
    connection.query('SELECT * FROM Empleado', (error, results, fields) => {
      if (error){ throw error;}
      else {
        callback(null, results);
      }
    });
  }
}

// ProductModel.insertar = (producto, callback) => {
//   if (connection) {
//     // connection.query('INSERT INTO Producto');
//   }
// }

module.exports = EmpleadoModel
