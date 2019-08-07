import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GetOneService } from '../../../services/get-one-service/get-one.service';
import { DeleteService } from '../../../services/delete-service/delete.service';


@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  book: object = [];

  constructor(protected deleteService: DeleteService, protected getOne: GetOneService, public dialog: MatDialog) { }

  ngOnInit() {
    this.book = this.getOne.regresarLibro()

  }

  eliminarLibro(id){
    var libroInfo = {
      id: id,
      eliminado: 2
    }
    this.deleteService.deleteLibro(libroInfo).subscribe()
    this.dialog.closeAll();
    document.location.reload();
  }

  cancelarEliminado(){
    this.dialog.closeAll();
  }

}
