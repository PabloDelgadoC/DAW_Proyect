import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainComponent } from './index/main/main.component';
import { AboutComponent } from './secundarias/about/about.component';
import { ContactComponent } from './secundarias/contact/contact.component';
import { ProductsComponent } from './secundarias/products/products.component';
import { TeamDevelopmentComponent } from './secundarias/team-development/team-development.component';
import { NewsComponent } from './secundarias/news/news.component';
// import { DashboardComponent } from '../../dashboardadmin/src/app/app.component';
import { Page404Component } from './secundarias/page404/page404.component';

const appRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'Inicio', component: MainComponent},
  {path: 'SobreNosotros', component: AboutComponent},
  {path: 'Productos', component: ProductsComponent},
  {path: 'Contactanos', component: ContactComponent},
  {path: 'Desarrolladores', component: TeamDevelopmentComponent},
  {path: 'Noticias', component: NewsComponent},
  // {path: 'Dashboard', component: DashboardComponent},
  {path: '**', component: Page404Component} // SE DEBE CAMBIAR POR EL COMPONENTE PAGE404
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
