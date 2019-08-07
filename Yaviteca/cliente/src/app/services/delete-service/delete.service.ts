import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(protected http: HttpClient) { }

  deleteLibro(libroInfo){
    return this.http.put('http://localhost:3000/delete-libro/' + libroInfo.id, {
      eliminado: libroInfo.eliminado,
    })
  }
}
