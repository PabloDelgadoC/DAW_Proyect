import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserInterface } from '../models/user-interface';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { isError } from 'util';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit() { 
    fetch('http://localhost:3000/usuarios')
      .then(response => response.json())
      .then(data => {
        //console.log(data);
        let arreglo = data;
        
      })
      .catch(function (error) {
        console.log('Hubo un problema con la petición:' + error.message);
      });
  }

  onLogin() {
    

  }

}

