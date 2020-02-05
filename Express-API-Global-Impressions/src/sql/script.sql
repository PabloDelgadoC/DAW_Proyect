USE globalimpressions;


DELETE FROM Producto;
DELETE FROM Usuario;
DELETE FROM EmpleadoLocal;
DELETE FROM Empleado;
DELETE FROM Local;
DELETE FROM TipoProducto;
DELETE FROM TipoLocal;





INSERT INTO TipoLocal(idTipoLocal, Local)
VALUES (1, "Mayorista");

INSERT INTO TipoLocal(idTipoLocal, Local)
VALUES (2, "Minorista");

INSERT INTO TipoLocal(idTipoLocal, Local)
VALUES (3, "Mayorista y Minorista");

INSERT INTO TipoProducto(idTipoProducto, nombreTipo, descripcion)
VALUES (1, "Gorra", "Accesorio unisex para la cabeza");

INSERT INTO TipoProducto(idTipoProducto, nombreTipo, descripcion)
VALUES (2, "Mujer", "Accesorios para mujeres");

INSERT INTO TipoProducto(idTipoProducto, nombreTipo, descripcion)
VALUES (3, "Hombre", "Accesorios para hombres");

INSERT INTO Local(idLocal, nombreLocal, direccion,latitud,longitud,telefono,idTipoLocal)
VALUES (1, "Malecon", "Malecon 2000",-2.1985391,-79.8809507,"022222",2);

INSERT INTO Local(idLocal, nombreLocal, direccion,latitud,longitud,telefono,idTipoLocal)
VALUES (2, "Taller", "Alborada 12va etapa",-2.1376476,-79.9063379,"022222",1);

INSERT INTO Empleado(cedula,nombres,apellidos,telefono,idLocal,rol)
VALUES ("130000000","Fabian", "Vargas","099999999",1,"Guardia");

INSERT INTO Empleado(cedula,nombres,apellidos,telefono,idLocal,rol)
VALUES ("130000001","Diana", "Lucas","099999999",1,"Cajera");

INSERT INTO Empleado(cedula,nombres,apellidos,telefono,idLocal,rol)
VALUES ("130000002","Luis", "Salazar","099999999",2,"Artista");

INSERT INTO EmpleadoLocal(idEmpleado,idLocal)
VALUES ("130000000",1);

INSERT INTO EmpleadoLocal(idEmpleado,idLocal)
VALUES ("130000001",1);

INSERT INTO EmpleadoLocal(idEmpleado,idLocal)
VALUES ("130000002",2);

INSERT INTO Usuario(idUsuario,usuario,contraseña,idEmpleado)
VALUES (1,"dianaaa",AES_ENCRYPT('dianaaaa','123'),"130000001");

INSERT INTO Usuario(idUsuario,usuario,contraseña,idEmpleado)
VALUES (2,"luissal",AES_ENCRYPT('lucho123','123'),"130000001");

INSERT INTO Producto(idProducto,imagePath,precio,detalle,idAutor,descripcion,idTipoProducto,likes)
VALUES (1,"assets/productos/mujeres/joker.jpg",16.64,"Camiseta Joker",1,"",2,0);

INSERT INTO Producto(idProducto,imagePath,precio,detalle,idAutor,descripcion,idTipoProducto,likes)
VALUES (2,"assets/productos/mujeres/joker.jpg",16.64,"Camiseta Joker",1,"",2,0);

INSERT INTO Producto(idProducto,imagePath,precio,detalle,idAutor,descripcion,idTipoProducto,likes)
VALUES (3,"assets/productos/mujeres/starwars.png",35.31,"Camiseta Star Wars",1,"",2,0);

INSERT INTO Producto(idProducto,imagePath,precio,detalle,idAutor,descripcion,idTipoProducto,likes)
VALUES (4,"assets/productos/gorras/guayaquil.jpg",10.72,"Gorra Guayaquil",1,"",1,0);

INSERT INTO Producto(idProducto,imagePath,precio,detalle,idAutor,descripcion,idTipoProducto,likes)
VALUES (5,"assets/productos/hombres/joker.png",25.50,"Camiseta Joker",1,"",3,0);

