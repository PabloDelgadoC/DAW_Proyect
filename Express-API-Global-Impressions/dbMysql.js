const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Pablo*1997#',
  database : 'globalimpressions'
});

connection.connect( err => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('CONEXION A MYSQL CON EXITO');
});

// Insertar una contraseña con AES:
// mysql> INSERT INTO usuarios VALUES('usuario',AES_ENCRYPT('contraseña','llave'));
// Para desencriptar:
// mysql> INSERT INTO usuarios VALUES('usuario',AES_DECRYPT('contraseña','llave'));

module.exports = connection;
