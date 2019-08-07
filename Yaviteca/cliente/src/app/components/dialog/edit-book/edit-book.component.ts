import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GetService } from '../../../services/get-service/get.service';
import { PutService } from '../../../services/put-service/put.service';
import { GetOneService } from '../../../services/get-one-service/get-one.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  book: object = [];

  estadosConservacion: object = [];
  conservacionSelect: number;

  constructor(protected getService: GetService, protected putService: PutService,
    protected getOne: GetOneService, public dialog: MatDialog) { }

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
      
    this.book = this.getOne.regresarLibro()
      
  }

  editarLibro(id){
    var input = document.getElementsByTagName('input');
    var nombre = input[0].value;
    var editorial = input[1].value;
    var autor = input[2].value;
    var fecha = input[3].value;
    var genero = input[4].value;

    var libroInfo = {
      id: id,
      nombre: nombre,
      editorial: editorial,
      autor: autor,
      fecha: fecha,
      genero: genero,
      conservacion: this.conservacionSelect,
      estado: 1
    }

    if((nombre && editorial && autor && fecha && genero) !== '' && this.conservacionSelect !== undefined){
      this.putService.editarLibro(libroInfo).subscribe();
      this.dialog.closeAll();
      document.location.reload();
    } else {
      alert('NO ESTAN COMPLETOS TODOS LOS CAMPOS');
    }
  }

  cancelarEdicion(){
    this.dialog.closeAll();
  }

}
