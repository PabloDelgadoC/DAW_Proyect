import { Component, OnInit } from '@angular/core';
import { Productos } from "../../../Productos";
import * as $ from 'jquery';
import { TemplateDefinitionBuilder } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  bandera = false;
  filtro = false;
  btnBuscar = false;
  divBuscar = false;


  constructor() { }

  ngOnInit() {
    fetch('http://my-json-server.typicode.com/leomk1998/testd1/productos')
      .then(response => response.json())
      .then(data => {
        let arreglo = data;

        for (let objeto of arreglo) {
          let producto: Productos = new Productos(objeto["detalle"], objeto["tipo"], objeto["precio"], objeto["image_path"])
          document.getElementById("products").innerHTML += producto.renderizarPlantilla()
        }
      })
      .catch(function (error) {
        console.log('Hubo un problema con la petición Fetch:' + error.message);
      });
  }

  filtrarMujer() {
    $("#products").empty();
    fetch('http://my-json-server.typicode.com/leomk1998/testd1/productos')
      .then(response => response.json())
      .then(data => {
        let arreglo = data;

        for (let objeto of arreglo) {
          if (objeto["tipo"] == "women") {
            let producto: Productos = new Productos(objeto["detalle"], objeto["tipo"], objeto["precio"], objeto["image_path"])
            document.getElementById("products").innerHTML += producto.renderizarPlantilla()
          }
        }
      })
      .catch(function (error) {
        console.log('Hubo un problema con la petición Fetch:' + error.message);
      });
  }

  filtrarHombre() {
    $("#products").empty();
    fetch('http://my-json-server.typicode.com/leomk1998/testd1/productos')
      .then(response => response.json())
      .then(data => {
        let arreglo = data;

        for (let objeto of arreglo) {
          if (objeto["tipo"] == "men") {
            let producto: Productos = new Productos(objeto["detalle"], objeto["tipo"], objeto["precio"], objeto["image_path"])
            document.getElementById("products").innerHTML += producto.renderizarPlantilla()
          }
        }
      })
      .catch(function (error) {
        console.log('Hubo un problema con la petición Fetch:' + error.message);
      });
  }

  filtrarGorras() {
    $("#products").empty();
    fetch('http://my-json-server.typicode.com/leomk1998/testd1/productos')
      .then(response => response.json())
      .then(data => {
        let arreglo = data;

        for (let objeto of arreglo) {
          if (objeto["tipo"] == "bag") {
            let producto: Productos = new Productos(objeto["detalle"], objeto["tipo"], objeto["precio"], objeto["image_path"])
            document.getElementById("products").innerHTML += producto.renderizarPlantilla()
          }
        }
      })
      .catch(function (error) {
        console.log('Hubo un problema con la petición Fetch:' + error.message);
      });
  }

  filtrarTodos() {
    $("#products").empty();
    fetch('http://my-json-server.typicode.com/leomk1998/testd1/productos')
      .then(response => response.json())
      .then(data => {
        let arreglo = data;
        for (let objeto of arreglo) {
          let producto: Productos = new Productos(objeto["detalle"], objeto["tipo"], objeto["precio"], objeto["image_path"])
          document.getElementById("products").innerHTML += producto.renderizarPlantilla()
        }
      })
      .catch(function (error) {
        console.log('Hubo un problema con la petición Fetch:' + error.message);
      });
  }

  buscar() {
    //let tag:HTMLElement = document.getElementById("txtBuscador");
    var tag = (<HTMLInputElement>document.getElementById("txtBuscador")).value;
    let texto:string = tag.toLocaleLowerCase();
    console.log(texto)
    $("#products").empty();
    fetch('http://my-json-server.typicode.com/leomk1998/testd1/productos')
      .then(response => response.json())
      .then(data => {
        let arreglo = data;
        for (let objeto of arreglo) {
          let detalle:string=objeto["detalle"].toLocaleLowerCase()
          if (detalle.lastIndexOf(texto) !=-1) {
            console.log(texto)
            let producto: Productos = new Productos(objeto["detalle"], objeto["tipo"], objeto["precio"], objeto["image_path"])
            document.getElementById("products").innerHTML += producto.renderizarPlantilla()
          }
        }
      })
      .catch(function (error) {
        console.log('Hubo un problema con la petición Fetch:' + error.message);
      });
  }

  habilitarBuscar() {
    this.divBuscar = !this.divBuscar;
    this.btnBuscar = !this.btnBuscar;
  }
}

