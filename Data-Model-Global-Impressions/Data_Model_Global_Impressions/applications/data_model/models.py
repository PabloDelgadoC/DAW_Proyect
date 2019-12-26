from django.db import models

##USE ABOUT MD5 TO ENCRYPT PASSOWRD EXAMPLE
#from django.db.models.functions import MD5
#Author.objects.create(name='Margaret Smith')
#author = Author.objects.annotate(name_md5=MD5('name')).get()
#print(author.name_md5)
#NOTA: SI SE USA ESTO, SE DEBE TBN DESENCRIPTAR AL MOMENTO DE VERIFICAR

# Create your models here.
class Usuario(models.Model):
    user = models.CharField('User', blank=True, max_length=30)
    paswword = models.CharField('Password', blank=True, max_length=20)

    def __str__(self):
        return self.user

class Empleado(models.Model):
    nombres = models.CharField('Nombres', blank=True, max_length=50)
    apellidos = models.CharField('Apellidos', blank=True, max_length=50)
    cedula = models.PositiveSmallIntegerField('Cedula', blank=True)
    telefono = models.PositiveSmallIntegerField('Telefono')


    def __str__(self):
        return self.cedula

class Rol(models.Model):
    rol = models.CharField('Rol', blank=True, max_length=30)
    descripcion = models.TextField('Descripcion')

    def __str__(self):
        return self.rol

class Producto(models.Model):
    imagePath = models.ImageField('Imagen', blank=True)
    precio = models.FloatField('Precio', blank=True)
    detalle = models.CharField('Detalle', max_length=80)
    descripcion = models.TextField('Descripcion')

    def __str__(self):
        return self.imagePath

class TipoProducto(models.Model):
    tipo = models.CharField('Tipo', blank=True, max_length=50)
    descripcion = models.TextField('Descripcion')

    def __str__(self):
        return self.tipo

class Reaccion(models.Model):
    vistas = models.PositiveIntegerField('Vistas')
    likes = models.PositiveIntegerField('Likes')

    def __str__(self):
        return self.vistas

class EmpleadoLocal(models.Model):
    idLocal = models.PositiveIntegerField('idLocal',blank=True)
    idEmpleado = models.PositiveIntegerField('idEmpleado', blank=True)

    def __str__(self):
        return self.idLocal

class Local(models.Model):
    nombreLocal = models.CharField('Local', max_length=50)
    direccion = models.CharField('Direccion', max_length=60)
    latitud = models.FloatField('Latitud')
    longitud = models.FloatField('Longitud')
    telefono = models.PositiveSmallIntegerField('Telefono')

    def __str__(self):
        return self.nombreLocal

class TipoLocal(models.Model):
    local = models.CharField('TipoLocal', max_length=50)
    mayorista = models.BooleanField('TallerMayorista', default=False)
    minorista = models.BooleanField('TallerMinorista', default=False)

    def __str__(self):
        return self.local
