import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BienvenidosComponent } from './general/page/bienvenidos/bienvenidos.component';
import { PageNotFoundComponent } from './general/page/page-not-found/page-not-found.component';
import { ContactoComponent } from './general/page/contacto/contacto.component';
import { AppRoutingModule } from './app-routing.module';
import { BusquedaComponent } from './general/page/busqueda/busqueda.component';
import { ActorAltaComponent } from './general/actores/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './general/actores/actor-listado/actor-listado.component';
import { PeliculasListadoComponent } from './general/peliculas/peliculas-listado/peliculas-listado.component';
import { LoginComponent } from './general/ingreso/page/login/login.component';
import { RegistroComponent } from './general/ingreso/page/registro/registro.component';
import { ComponentePruebaComponent } from './componente-prueba/componente-prueba.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidosComponent,
    PageNotFoundComponent,
    ContactoComponent,
    BusquedaComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    PeliculasListadoComponent,
    LoginComponent,
    RegistroComponent,
    ComponentePruebaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
