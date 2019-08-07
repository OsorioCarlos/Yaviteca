import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PutService {

  constructor(protected http: HttpClient) { }

  editarLibro(libroInfo){
    return this.http.put('http://localhost:3000/libro/' + libroInfo.id, {
      nombre: libroInfo.nombre,
      editorial: libroInfo.editorial,
      autor: libroInfo.autor,
      fecha_publicacion: libroInfo.fecha,
      genero: libroInfo.genero,
      estado_conservacion: libroInfo.conservacion,
      estado: libroInfo.estado
    })
  }

  alquilarLibro(libroInfo){
    return this.http.put('http://localhost:3000/alquilar-libro/' + libroInfo.id, {
      estado: libroInfo.estado
    })
  }

  devolverLibro(alquilerInfo){
    return this.http.put('http://localhost:3000/devolver-libro/' + alquilerInfo.id, {
      fecha_devolucion: alquilerInfo.devolucion
    })
  }

  cambiarEstado(libroInfo){
    return this.http.put('http://localhost:3000/cambiar-estado/' + libroInfo.id, {
      estado: libroInfo.estado
    })
  }
  
}
