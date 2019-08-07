import { Component, OnInit } from '@angular/core';
import { GetService } from '../../services/get-service/get.service';
import { PostService } from '../../services/post-service/post.service';
import { PutService } from '../../services/put-service/put.service';

@Component({
  selector: 'app-rent-book',
  templateUrl: './rent-book.component.html',
  styleUrls: ['./rent-book.component.css']
})
export class RentBookComponent implements OnInit {

  libros: object = [];
  libroSelect: number;

  constructor(protected getService: GetService, protected postService: PostService, protected putService: PutService) { }

  ngOnInit() {
    this.getService.getLibrosDisponibles()
    .subscribe(
      (data) => {
        this.libros = data;
      },
      (error) => {
        console.error(error);
      }
    )
  }

  presente = new Date();

  sumarDias(fecha, dias){
    fecha.setDate(fecha.getDate() + dias);
    return fecha;
  }

  fecha = new Date();
  futuro = this.sumarDias(this.fecha, 30);

  alquilarLibro(){
    var input = document.getElementsByTagName('input');
    var usuario = input[0].value;
    var alquiler = input[1].value;
    var devolucion = input[2].value;

    var prestamoInfo = {
      usuario: usuario,
      libro: this.libroSelect,
      alquiler: alquiler,
      devolucion: devolucion
    }

    var libroInfo = {
      id: this.libroSelect,
      estado: 2
    }

    if((usuario && alquiler && devolucion) != '' && this.libroSelect != undefined){
      this.postService.agregarPrestamo(prestamoInfo).subscribe();
      this.putService.cambiarEstado(libroInfo).subscribe();
      input[0].value = '';
      input[1].value = '';
      input[2].value = '';
      this.libroSelect = undefined;
      alert('El libro ' + '"' + this.libros[this.libroSelect].nombre + '"' + 'fue alquilado exitosamente');
    } else {
      alert('NO ESTAN COMPLETOS TODOS LOS CAMPOS');
    }
    
  }
}
