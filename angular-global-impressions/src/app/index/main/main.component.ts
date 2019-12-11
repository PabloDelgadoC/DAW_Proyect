import { Component, OnInit } from '@angular/core';
import { Productos } from "../../../Productos";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      fetch('http://my-json-server.typicode.com/leomk1998/testd1/productos')
      .then( response => response.json())
      .then( data => {
      let arreglo = data;
    
      for (let i=0;i<4;i++) {
        let producto:Productos = new Productos(data[i]["detalle"], data[i]["tipo"], data[i]["precio"], data[i]["image_path"])
        document.getElementById("products").innerHTML += producto.renderizarPlantilla()
    }
  })
  .catch(function(error) {
    console.log('Hubo un problema con la petición Fetch:' + error.message);
  });
  }

}
