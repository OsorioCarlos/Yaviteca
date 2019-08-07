import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(protected http: HttpClient) { }

  agregarLibro(libroInfo){
    return this.http.post('http://localhost:3000/libro', {
      codigo_isbn: libroInfo.isbn,
      nombre: libroInfo.nombre,
      editorial: libroInfo.editorial,
      autor: libroInfo.autor,
      fecha_publicacion: libroInfo.fecha,
      genero: libroInfo.genero,
      estado_conservacion: libroInfo.conservacion,
      estado: libroInfo.estado,
      eliminado: libroInfo.eliminado,
      fecha_creacion: libroInfo.creacion
    });
  }

  agregarPrestamo(prestamoInfo){
    return this.http.post('http://localhost:3000/prestamo', {
      nombre_usuario: prestamoInfo.usuario,
      libro: prestamoInfo.libro,
      fecha_alquiler: prestamoInfo.alquiler,
      fecha_maxima_devolucion: prestamoInfo.devolucion,
    })
  }
  
}
