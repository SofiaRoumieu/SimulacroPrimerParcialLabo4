import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidosComponent } from './general/page/bienvenidos/bienvenidos.component';
import { ContactoComponent } from './general/page/contacto/contacto.component';
import { PageNotFoundComponent } from './general/page/page-not-found/page-not-found.component';
import { PeliculaAltaComponent } from './general/peliculas/pelicula-alta/pelicula-alta.component';
import { PeliculasListadoComponent } from './general/peliculas/peliculas-listado/peliculas-listado.component';
import { ActorAltaComponent } from './general/actores/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './general/actores/actor-listado/actor-listado.component';
import { BusquedaComponent } from './general/page/busqueda/busqueda.component';

const routes: Routes=[
  {path:'Bienvenidos', component: BienvenidosComponent},
  {path:'contacto', component:ContactoComponent, pathMatch:'full'},
  {path: 'Peliculas' ,
  component: BienvenidosComponent ,
  children:
      [{path:'Alta', component: PeliculaAltaComponent},
      {path:'Listado', component: PeliculasListadoComponent}]
  },
  {path: 'Actore' ,
  component: BienvenidosComponent ,
  children:
      [{path:'Alta', component:ActorAltaComponent},
      {path:'Listado', component:ActorListadoComponent}]
  },
  {path:'Busqueda', component:BusquedaComponent},
  {path:' ', redirectTo:'bienvenidos'},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
