from django.contrib import admin


# Register your models here.
from .models import Usuario, Empleado, Rol, Producto, TipoProducto, Reaccion, Local, TipoLocal

#Clases para mejorar el administrador
class UsuarioAdmin(admin.ModelAdmin):
    list_display = (
    'id',
    'user',
    'password',
    'empleadoFK',
    'rolFK'
    )

    search_fields = ('user',)

class EmpleadoAdmin(admin.ModelAdmin):
    list_display = (
    'cedula',
    'nombres',
    'apellidos',
    'telefono'
    )

    search_fields = ('nombres', 'apellidos', 'cedula',)

class RolAdmin(admin.ModelAdmin):
    list_display = (
    'rol',
    'descripcion'
    )

    search_fields = ('rol',)

class ProductoAdmin(admin.ModelAdmin):
    list_display = (
    'imagePath',
    'precio',
    'detalle',
    'descripcion'
    )

    search_fields = ('imagePath',)

class TipoProductoAdmin(admin.ModelAdmin):
    list_display = (
    'tipo',
    'descripcion',
    )

    search_fields = ('tipo',)

class ReaccionAdmin(admin.ModelAdmin):
    list_display = (
    'vistas',
    'likes',
    )

class LocalAdmin(admin.ModelAdmin):
    list_display = (
    'tipoLocalFK',
    'nombreLocal',
    'direccion',
    'latitud',
    'longitud',
    'telefeno'
    )

    search_fields = ('nombreLocal',)

class TipoLocalAdmin(admin.ModelAdmin):
    list_display = (
    'local'
    )

    search_fields = ('local',)

admin.site.register(Usuario)
admin.site.register(Empleado)
admin.site.register(Rol)
admin.site.register(Producto)
admin.site.register(TipoProducto)
admin.site.register(Reaccion)
admin.site.register(Local)
admin.site.register(TipoLocal)
