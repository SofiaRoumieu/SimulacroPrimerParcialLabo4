import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public colorMensaje:string ="ningun color";

  constructor() { }

  ngOnInit(): void {
  }
 
  CambiarColor(color:string){
    this.colorMensaje=color;
  }
}
