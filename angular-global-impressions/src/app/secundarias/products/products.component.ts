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
    fetch('http://localhost:3000/productos')
      .then(response => response.json())
      .then(data => {
        //console.log(data);
        let arreglo = data;

        for (let objeto of arreglo) {
          let producto: Productos = new Productos(objeto["detalle"], objeto["idTipoPrducto"], objeto["precio"], objeto["imagePath"])
          document.getElementById("products").innerHTML += producto.renderizarPlantilla()
        }
      })
      .catch(function (error) {
        console.log('Hubo un problema con la petición:' + error.message);
      });
  }

  filtrarMujer() {
    $("#products").empty();
    fetch('http://localhost:3000/productos')
      .then(response => response.json())
      .then(data => {
        let arreglo = data;

        for (let objeto of arreglo) {
          if (objeto["idTipoProducto"] == 2) {
            let producto: Productos = new Productos(objeto["detalle"], objeto["idTipoProducto"], objeto["precio"], objeto["imagePath"])
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
    fetch('http://localhost:3000/productos')
      .then(response => response.json())
      .then(data => {
        let arreglo = data;

        for (let objeto of arreglo) {
          if (objeto["idTipoProducto"] == 3) {
            let producto: Productos = new Productos(objeto["detalle"], objeto["idTipoProducto"], objeto["precio"], objeto["imagePath"])
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
    fetch('http://localhost:3000/productos')
      .then(response => response.json())
      .then(data => {
        let arreglo = data;

        for (let objeto of arreglo) {
          if (objeto["idTipoProducto"] == 1) {
            let producto: Productos = new Productos(objeto["detalle"], objeto["idTipoProducto"], objeto["precio"], objeto["imagePath"])
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
    fetch('http://localhost:3000/productos')
      .then(response => response.json())
      .then(data => {
        let arreglo = data;
        for (let objeto of arreglo) {
          let producto: Productos = new Productos(objeto["detalle"], objeto["idTipoProducto"], objeto["precio"], objeto["imagePath"])
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
    fetch('http://localhost:3000/productos')
      .then(response => response.json())
      .then(data => {
        let arreglo = data;
        for (let objeto of arreglo) {
          let detalle:string=objeto["detalle"].toLocaleLowerCase()
          if (detalle.lastIndexOf(texto) !=-1) {
            console.log(texto)
            let producto: Productos = new Productos(objeto["detalle"], objeto["idTipoProducto"], objeto["precio"], objeto["imagePath"])
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

  filtrar() {
    this.bandera = !this.bandera;
    this.filtro = !this.filtro;
  }
}
