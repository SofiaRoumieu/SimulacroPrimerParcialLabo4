import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-cuadro',
  templateUrl: './cuadro.component.html',
  styleUrls: ['./cuadro.component.css']
})
export class CuadroComponent implements OnInit {

  @Input() colorPorInput:string;
  @Output() eventoCambioDeColor: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  CambiarColorTexto(){
    this.eventoCambioDeColor.emit("Verde");
  }

}
