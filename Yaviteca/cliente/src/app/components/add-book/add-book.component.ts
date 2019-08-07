import { Component, OnInit } from '@angular/core';
import { GetService } from '../../services/get-service/get.service';
import { PostService } from '../../services/post-service/post.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  estadosConservacion: object = [];
  conservacionSelect: number;

  constructor(protected getService: GetService, protected postService: PostService) { }

  ngOnInit() {

    this.getService.getEstadosConservacion()
    .subscribe(
      (data) => {
        this.estadosConservacion = data;
      },
      (error) => {
        console.error(error);
      }
    )

  }

  agregarLibro(){
    var input = document.getElementsByTagName('input');
    var isbn = input[0].value
    var nombre = input[1].value
    var editorial = input[2].value
    var autor = input[3].value
    var fecha = input[4].value
    var genero = input[5].value
    var creacion = new Date();

    var libroInfo = {
      isbn: isbn,
      nombre: nombre,
      editorial: editorial,
      autor: autor,
      fecha: fecha,
      genero: genero,
      conservacion: this.conservacionSelect,
      estado: 1,
      eliminado: 1,
      creacion: creacion
    }

    if((isbn && nombre && editorial && autor && fecha && genero) != '' && this.conservacionSelect !== undefined){
      this.postService.agregarLibro(libroInfo).subscribe();
      input[0].value = '';
      input[1].value = '';
      input[2].value = '';
      input[3].value = '';
      input[4].value = '';
      input[5].value = '';
      this.conservacionSelect = undefined;
      alert('El libro ' + '"'+ libroInfo.nombre + '"' + ' fue agregado con éxito');
    } else {
      alert('NO ESTAN COMPLETOS TODOS LOS CAMPOS');
    }
  }

}
