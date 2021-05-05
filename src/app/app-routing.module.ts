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
import { LoginComponent } from './general/ingreso/page/login/login.component';
import { RegistroComponent } from './general/ingreso/page/registro/registro.component';

const routes: Routes=[
  {path:'Bienvenidos', component: BienvenidosComponent},
  {path:'Contacto', component:ContactoComponent, pathMatch:'full'},
  /*{path:'Ingreso',
  children:
  [{path:'Login', component:LoginComponent},
   {path:'Registro', component:RegistroComponent},
   {path:'', redirectTo:'Login', pathMatch:'full'}]  
  },*/
  {path: 'Peliculas' ,
  children:
      [{path:'Alta', component: PeliculaAltaComponent},
      {path:'Listado', component: PeliculasListadoComponent},
      {path:'', redirectTo:'Listado', pathMatch:'full'}]
  },
  {path: 'Actores' ,
   children:
      [{path:'Alta', component:ActorAltaComponent},
      {path:'Listado', component:ActorListadoComponent},
      {path:'', redirectTo:'Listado', pathMatch:'full'}]
  },
  {path:'Busqueda', component:BusquedaComponent},
  {path:'', redirectTo:'Bienvenidos', pathMatch:'full'},
  { path: 'Ingreso', loadChildren: () => import('./ingreso/ingreso.module').then(m => m.IngresoModule) },
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
