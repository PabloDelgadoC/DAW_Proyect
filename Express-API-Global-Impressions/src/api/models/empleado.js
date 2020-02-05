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
EmpleadoModel.crear = (objetoEmpleado,callback) => {
  if (connection){
    connection.query('INSERT INTO Empleado SET ?',objetoEmpleado, (error, results, fields) => {
      if (error){ throw error;}
      else {
        callback(null, results);
      }
    });
  }
}
EmpleadoModel.listarById = (cedulaEmpleado,callback) => {
  if (connection){
    connection.query(`SELECT * FROM Empleado WHERE cedula=${cedulaEmpleado}`, (error, results) => {
      if (error){ throw error;}
      else {
        callback(null, results);
      }
    });
  }
}
EmpleadoModel.actualizar = (objetoEmpleado,callback) => {
  const sql = `
            UPDATE Empleado SET 
            nombres = ${connection.escape(objetoEmpleado.nombres)},
            apellidos = ${connection.escape(objetoEmpleado.apellidos)},
            telefono = ${connection.escape(objetoEmpleado.telefono)},
            idLocal = ${connection.escape(objetoEmpleado.idLocal)},
            rol = ${connection.escape(objetoEmpleado.rol)}
            WHERE cedula= ${connection.escape(objetoEmpleado.cedula)}
        `
  if (connection){
    connection.query(sql, (error, results, fields) => {
      if (error){ throw error;}
      else {
        callback(null, results);
      }
    });
  }
}
EmpleadoModel.borrar = (cedulaEmpleado,callback) => {
  if (connection){
    let sql = `DELETE * FROM Empleado WHERE cedula=${cedulaEmpleado}`
    connection.query(sql, (err,row)=>{
      if(row){
          let sql =`DELETE FROM Empleado WHERE cedula=${cedulaEmpleado}`;
          connection.query(sql,(err,result)=>{
              if(err){
                  throw err;

              }else{
                  callback(null,{msg: 'deleted'});
              }
          });
      }else{
          callback(null,{msg: 'not exists'})
      }
  });
  }
}


module.exports = EmpleadoModel
