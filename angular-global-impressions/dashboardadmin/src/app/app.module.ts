import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './usuario/login/login.component';
import { PerfilComponent } from './usuario/perfil/perfil.component';
import { RegistroComponent } from './usuario/registro/registro.component';
import { UsuarioNoRegistradoComponent } from './usuario-no-registrado/usuario-no-registrado.component';
import { NewLoginComponent } from './new-login/new-login.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    PerfilComponent,
    RegistroComponent,
    UsuarioNoRegistradoComponent,
    NewLoginComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
