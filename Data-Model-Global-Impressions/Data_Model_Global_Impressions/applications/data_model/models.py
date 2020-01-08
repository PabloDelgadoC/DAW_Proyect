from django.db import models

##USE ABOUT MD5 TO ENCRYPT PASSOWRD EXAMPLE
#from django.db.models.functions import MD5
#Author.objects.create(name='Margaret Smith')
#author = Author.objects.annotate(name_md5=MD5('name')).get()
#print(author.name_md5)
#NOTA: SI SE USA ESTO, SE DEBE TBN DESENCRIPTAR AL MOMENTO DE VERIFICAR

# Create your models here.
class Empleado(models.Model):
    nombres = models.CharField('Nombres', blank=True, max_length=50, help_text='Ej: Juan Carlos')
    apellidos = models.CharField('Apellidos', blank=True, max_length=50, help_text='Ej: Castro Fernandez')
    cedula = models.PositiveIntegerField('Cedula', primary_key=True, blank=True, help_text='Ej: 0123456789')
    telefono = models.PositiveSmallIntegerField('Telefono', help_text='Ej: 0987654321')
    rol = models.CharField('Rol', blank=True, max_length=35, help_text='Ej: Vendedor|Cliente')

    def __str__(self):
        return self.nombres

class Usuario(models.Model):
    user = models.CharField('User', blank=True, max_length=30)
    paswword = models.CharField('Password', blank=True, max_length=20)
    empleadoFK = models.ForeignKey(Empleado, on_delete=models.CASCADE)

    def __str__(self):
        return self.user

class TipoProducto(models.Model):
    #idTipoProducto = models.AutoField(primary_key=True)
    tipo = models.CharField('Tipo', blank=True, max_length=50)
    descripcion = models.TextField('Descripcion')

    def __str__(self):
        return self.tipo

class Producto(models.Model):
    userFK = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    imagePath = models.ImageField('Imagen', blank=True)
    precio = models.FloatField('Precio', blank=True, help_text='Ej: 10.50')
    detalle = models.CharField('Detalle', max_length=80)
    descripcion = models.TextField('Descripcion')
    tipoProductoFK = models.ForeignKey(TipoProducto, on_delete=models.CASCADE)
    vistas = models.PositiveIntegerField('Vistas')
    likes = models.PositiveIntegerField('Likes')

    def __str__(self):
        return self.imagePath

class TipoLocal(models.Model):
    local = models.CharField('TipoLocal', max_length=50)

    def __str__(self):
        return self.local

class Local(models.Model):
    nombreLocal = models.CharField('Local', primary_key=True, max_length=50, blank=True)
    direccion = models.CharField('Direccion', max_length=60, blank=True)
    latitud = models.FloatField('Latitud')
    longitud = models.FloatField('Longitud')
    telefono = models.PositiveSmallIntegerField('Telefono')
    tipoLocalFK = models.ForeignKey(TipoLocal, on_delete=models.CASCADE, related_name='+')

    def __str__(self):
        return self.nombreLocal

class EmpleadoLocal(models.Model):
    idLocal = models.ForeignKey(Local, on_delete=models.CASCADE)
    idEmpleado = models.ForeignKey(Empleado, on_delete=models.CASCADE)

    def __str__(self):
        return self.idLocal
