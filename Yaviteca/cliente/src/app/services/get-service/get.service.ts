import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetService {

  constructor(protected http: HttpClient) { }

  getLibros(){
    return this.http.get('http://localhost:3000/libro');
  }

  getEstadosConservacion(){
    return this.http.get('http://localhost:3000/estado-conservacion');
  }

  getLibrosAlquilados(){
    return this.http.get('http://localhost:3000/libro-alquilado');
  }

  getLibrosDisponibles(){
    return this.http.get('http://localhost:3000/libro-disponible');
  }

  getRegistrosEntrada(desde){
    return this.http.get('http://localhost:3000/registro-entrada/' + desde);
  }

  getRegistrosExistentes(desde){
    return this.http.get('http://localhost:3000/registro-existente/' + desde);
  }

  getRegistrosSalida(){
    return this.http.get('http://localhost:3000/registro-salida');
  }
}
