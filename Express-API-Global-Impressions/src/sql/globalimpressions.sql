CREATE DATABASE globalimpressions;

USE globalimpressions;

CREATE TABLE TipoLocal(
  idTipoLocal INT AUTO_INCREMENT PRIMARY KEY,
  local VARCHAR(30)
);

CREATE TABLE Local(
  idLocal INT AUTO_INCREMENT PRIMARY KEY,
  nombreLocal VARCHAR(50),
  direccion VARCHAR(50),
  latitud FLOAT,
  longitud FLOAT,
  telefono VARCHAR(15),
  idTipoLocal INT,
  FOREIGN KEY(idTipoLocal) REFERENCES TipoLocal(idTipoLocal)
);

CREATE TABLE Empleado(
  cedula VARCHAR(10) PRIMARY KEY,
  nombres VARCHAR(50),
  apellidos VARCHAR(50),
  telefono VARCHAR(15),
  idLocal INT,
  rol VARCHAR(50)
);

CREATE TABLE EmpleadoLocal(
  idLocal INT,
  idEmpleado VARCHAR(10),
  FOREIGN KEY(idLocal) REFERENCES Local(idLocal),
  FOREIGN KEY(idEmpleado) REFERENCES Empleado(cedula)
);

CREATE TABLE Usuario(
  idUsuario INT AUTO_INCREMENT PRIMARY KEY,
  usuario VARCHAR(30),
  contraseña BLOB,
  idEmpleado VARCHAR(10),
  FOREIGN KEY(idEmpleado) REFERENCES Empleado(cedula)
);

CREATE TABLE TipoProducto(
  idTipoProducto INT AUTO_INCREMENT PRIMARY KEY,
  nombreTipo VARCHAR(50),
  descripcion TEXT
);

CREATE TABLE Producto(
  idProducto INT AUTO_INCREMENT PRIMARY KEY,
  imagePath VARCHAR(60),
  precio FLOAT,
  detalle VARCHAR(80),
  idAutor INT,
  descripcion TEXT,
  idTipoProducto INT,
  likes INT,
  FOREIGN KEY(idAutor) REFERENCES Usuario(idUsuario),
  FOREIGN KEY(idTipoProducto) REFERENCES TipoProducto(idTipoProducto)
);
