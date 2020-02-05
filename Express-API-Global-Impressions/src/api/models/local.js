const connection = require('../../../dbMysql');

const LocalModel =  {};

LocalModel.listar = callback => {
  if (connection){
    connection.query('SELECT * FROM Local', (error, results, fields) => {
      if (error){ throw error;}
      else {
        callback(null, results);
      }
    });
  }
}
LocalModel.crear = (objetoLocal,callback) => {
  if (connection){
    connection.query('INSERT INTO Local SET ?',objetoLocal, (error, results, fields) => {
      if (error){ throw error;}
      else {
        callback(null, results);
      }
    });
  }
}
LocalModel.actualizar = (objetoLocal,callback) => {
  const sql = `
            UPDATE Local SET 
            nombreLocal = ${connection.escape(objetoLocal.nombreLocal)},
            direccion = ${connection.escape(objetoLocal.direccion)},
            telefono = ${connection.escape(objetoLocal.telefono)},
            idTipoLocal = ${connection.escape(objetoLocal.idTipoLocal)},
            latitud = ${connection.escape(objetoLocal.latitud)},
            longitud = ${connection.escape(objetoLocal.longitud)}
            WHERE idLocal= ${connection.escape(objetoLocal.idLocal)}
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
LocalModel.borrar = (idLocal,callback) => {
  if (connection){
    let sql = `SELECT * FROM Local WHERE idLocal=${idLocal}`
    connection.query(sql, (err,row)=>{
      if(row){
          let sql =`DELETE FROM Local WHERE idLocal=${idLocal}`;
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


module.exports = LocalModel
