import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { BienvenidosComponent } from './general/page/bienvenidos/bienvenidos.component';
import { PageNotFoundComponent } from './general/page/page-not-found/page-not-found.component';
import { ContactoComponent } from './general/page/contacto/contacto.component';
import { AppRoutingModule } from './app-routing.module';
import { BusquedaComponent } from './general/page/busqueda/busqueda.component';
import { ActorAltaComponent } from './general/actores/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './general/actores/actor-listado/actor-listado.component';
import { PeliculasListadoComponent } from './general/peliculas/peliculas-listado/peliculas-listado.component';
//import { LoginComponent } from './general/ingreso/page/login/login.component';
//import { RegistroComponent } from './general/ingreso/page/registro/registro.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { IngresoModule } from './ingreso/ingreso.module';
import { CuadroComponent } from './general/componente/cuadro/cuadro.component';
import { TablaPeliculaComponent } from './componente/tabla-pelicula/tabla-pelicula.component';
import { ActoresComponent } from './general/page/actores/actores.component';
import { TablaPaisesComponent } from './componente/tabla-paises/tabla-paises.component';
import { FiltroPipe } from './pipes/filtro.pipe';
import { MenuComponent } from './componente/menu/menu.component';


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
    //LoginComponent,
    //RegistroComponent,
    CuadroComponent,
    TablaPeliculaComponent,
    ActoresComponent,
    TablaPaisesComponent,
    FiltroPipe,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    IngresoModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
