export type Tipo = 'terror' | 'comedia' | 'amor' | 'otros';

export class ActorModel {
    id: string;
    nombre: string;
    apellido: string;
    sexo: string;
    fecha: string;
    nacionalidad:any;
    foto: string;
    estado:number;
}

export class PeliculaModel {
    id: string;
    nombre: string;
    tipo: Tipo;
    fechaEstreno: string;
    publico: number;
    foto?: string;
    actor?: ActorModel = new ActorModel();
    estado:number;
    nacionalidad:any;
}

export class Productos{
    id:number;
    descripcion:string;
    tipo:string;
    fechaV:string;
    precio:number;
    foto:string;
}

export class Nacionalidad{
    id:number;
    nombre:string;
    bandera:string;
}
