import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainComponent } from './index/main/main.component';
import { TeamDevelopmentComponent } from './secundarias/team-development/team-development.component';
import { ContactComponent } from './secundarias/contact/contact.component';
import { AboutComponent } from './secundarias/about/about.component';
import { ProductsComponent } from './secundarias/products/products.component';
import { NewsComponent } from './secundarias/news/news.component';
// import { DashboardComponent } from '../../dashboardadmin/src/app/app.component';
import { Page404Component } from './secundarias/page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    MainComponent,
    TeamDevelopmentComponent,
    ContactComponent,
    AboutComponent,
    ProductsComponent,
    NewsComponent,
    // DashboardComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDr7jwLB9HYmrqZnEYX6nGwkilDaXAc10g'
    })
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
