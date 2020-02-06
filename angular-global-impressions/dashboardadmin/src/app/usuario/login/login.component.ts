import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserInterface } from '../../models/user-interface';
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

  private user: UserInterface = {
    name: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  onLogin() {
    this.authService.loginUser(this.user.user, this.user.password)
    .subscribe(data => {
      console.log(data);
      this.authService.setUser(data.user);
      const token = data.id;
      this.authService.setToken(token);
      this.router.navigate(['/usuario/perfil']);
    },
    error => console.log(error)
  );
  };

}
