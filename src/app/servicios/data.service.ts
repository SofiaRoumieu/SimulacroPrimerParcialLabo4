import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ActorModel, PeliculaModel } from "../modelos/models";
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  user: any;
  dbPelisRef: AngularFirestoreCollection<any>;
  dbActores: AngularFirestoreCollection<any>;
  dbPaises: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore, private http:HttpClient) { 
    this.dbPelisRef = this.db.collection("peliculas");
    this.dbActores = this.db.collection("actores");
    this.dbPaises = this.db.collection("paises");
  } 

  getPelis() {
    return this.dbPelisRef.valueChanges();
   }

  addActores(actores:ActorModel){
    return this.db.collection("actores").ref.orderBy('id',"desc").limit(1).get().then(res =>{
      res.forEach( a =>{
        console.log("info id");
        let id = Number(a.id) + 1;
        console.log(id);
         this.db.collection("actores").doc(id.toString()).set({
          nombre: actores.nombre,
          id:id,
          estado:1,
          apellido:actores.apellido,
          sexo:actores.sexo,
          fecha: actores.fecha,
          nacionalidad:actores.nacionalidad,
          foto: "https://ignaciosantiago.com/wp-content/uploads/2013/08/Sabes-cuando-es-la-calidad-de-una-pelicula-en-internet-mejor-o-peor-2.jpg"
         })
      })
     })
   }
   
}
