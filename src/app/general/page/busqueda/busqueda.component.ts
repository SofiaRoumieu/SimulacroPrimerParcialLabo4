import { Component, OnInit } from '@angular/core';
import { PeliculaModel } from 'src/app/modelos/models';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  public pelicula:PeliculaModel;
  
  constructor() { }

  tomarPeliculaParaDetalles(pelicula: PeliculaModel) {
    this.pelicula = pelicula;
    console.log("llega bien perri")
    console.info(this.pelicula)
}

  ngOnInit(): void {
  }

}
