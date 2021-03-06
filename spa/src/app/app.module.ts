
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



//Rutas
import { app_routing } from "./app.routes";

//Servicios
import { HerosService } from './Services/heros.service';





//Componentes

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscarComponent } from './components/buscar/buscar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscarComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [HerosService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
