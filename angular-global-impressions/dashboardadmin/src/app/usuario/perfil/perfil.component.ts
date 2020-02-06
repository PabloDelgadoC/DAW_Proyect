import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInterface } from '../../models/user-interface';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: UserInterface = {
    name: '',
    apellido: '',
    correo: '',
    user: '',
    telefono: '',
    direccion: '',
  }
  constructor(private httpClient: HttpClient) { }


  ngOnInit() {
    this.perfil();
  }
/*${localStorage.getItem("accessToken")}*/
  perfil() {
    this.httpClient.get(`http://localhost:3000/usuarios/${localStorage.getItem('accessToken')}`)
        .subscribe(
        (data:any[]) => {
          console.log(data)
            data.forEach(element => {
                this.usuario.name=element.name;
                this.usuario.apellido=element.apellido;
                this.usuario.user=element.user;
                this.usuario.telefono=element.telefono;
                this.usuario.correo=element.correo;
                this.usuario.direccion=element.direccion;

            /*this.imagenes.push(element.imagen);
            this.titulos.push(element.titulo);
            this.descripciones.push(element.contenido);*/
            })
        })
  }
}
