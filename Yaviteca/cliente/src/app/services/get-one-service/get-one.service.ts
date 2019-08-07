import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetOneService {

  constructor() { }

  book: object = [];

  regresarLibro(){
    return this.book
  }
}
