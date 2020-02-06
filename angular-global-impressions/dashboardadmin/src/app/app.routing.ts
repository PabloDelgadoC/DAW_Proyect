import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { NewLoginComponent } from './new-login/new-login.component';
import { PerfilComponent } from './usuario/perfil/perfil.component';
import { RegistroComponent } from './usuario/registro/registro.component';
import { UsuarioNoRegistradoComponent } from './usuario-no-registrado/usuario-no-registrado.component';


/*
const routes: Routes =[
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
*/

const routes: Routes = [
  // {path: '', component: LoginComponent},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full', },
  {path: '', component: AdminLayoutComponent, children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
  {path: '**', redirectTo: 'dashboard' },
  { path: 'usuario/login', component: NewLoginComponent },
  { path: 'usuario/registro', component: RegistroComponent },
  { path: 'usuario/perfil', component: PerfilComponent },
  { path: 'usuario-no-registrado', component: UsuarioNoRegistradoComponent },
  // {path: 'dashboard', component: AdminLayoutComponent, children: [{
  //     path: '',
  //     loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  //     }]
  // }
  // {path: '**', component: LoginComponent}
];


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
