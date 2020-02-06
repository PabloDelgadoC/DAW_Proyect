const connection = require('../../../dbMysql');

const UsuarioModel =  {};

UsuarioModel.listar = callback => {
  if (connection){
    connection.query('SELECT * FROM Usuario', (error, results, fields) => {
      if (error){ throw error;}
      else {
        callback(null, results);
      }
    });
  }
}

UsuarioModel.listarById = (id,callback) => {
  if (connection){
    connection.query(`SELECT * FROM Usuario WHERE idUsuario = ${connection.escape(id)}`, (error, results) => {
      if (error){ throw error;}
      else {
        callback(null, results);
      }
    });
  }
}

UsuarioModel.crear = (usuario, callback) => {
  const query = 'INSERT INTO Usuario SET ?';
  if (connection) {
    connection.query(query, usuario, (error, result) => {
      if(error){ throw error;}
      else{
        callback(null, result);
      }
    });
  }
}

UsuarioModel.actualizar = (objetoEmpleado,callback) => {
  const sql = `
    UPDATE Usuario SET
    usuario = ${connection.escape(objetoEmpleado.usuario)},
    contraseña = ${connection.escape(objetoEmpleado.contraseña)},
    idEmpleado = ${connection.escape(objetoEmpleado.idEmpleado)},
    WHERE idUsuario = ${connection.escape(objetoEmpleado.idUsuario)}
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

UsuarioModel.borrarById = (id, callback) => {
  if(connection) {
    let querySelect = `SELECT * FROM Usuario WHERE idUsuario = ${connection.escape(id)}`;
    connection.query(querySelect, (error, result) => {
      if(result){
        const queryDelete = `DELETE FROM Usuario WHERE idUsuario = ${id}`;
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

UsuarioModel.validar = (user, pass, callback) => {
  if(connection) {
    let query = `SELECT ${connection.escape(pass)} FROM Usuario WHERE usuario = ${connection.escape(user)}`;
    connection.query(query, (error, result) => {
      if(error) {throw error;}
      else{
        callback(null,{'msg':'si'});
      }
    });
  }
}

module.exports = UsuarioModel
