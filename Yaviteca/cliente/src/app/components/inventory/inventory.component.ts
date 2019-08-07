import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteBookComponent } from '../dialog/delete-book/delete-book.component';
import { EditBookComponent } from '../dialog/edit-book/edit-book.component';
import { GetService } from '../../services/get-service/get.service';
import { GetOneService } from '../../services/get-one-service/get-one.service';
import { PutService } from '../../services/put-service/put.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  displayedColumns: string[] = ['ISBN', 'libro', 'editorial', 'autor', 'añoPublicacion', 'genero', 'estadoConservacion', 'estado', 'editar', 'eliminar'];
  books: object = [];

  constructor(public dialog: MatDialog, protected getService: GetService, protected getOne: GetOneService, protected putService: PutService) { }

  ngOnInit() {
    this.getService.getLibros()
      .subscribe(
        (data) => {
          this.books = data;
        },
        (error) => {
          console.error(error);
        }
      )
  }

  openDeleteDialog(book) {
    this.dialog.open(DeleteBookComponent);
    this.getOne.book = book;
  }

  openEditDialog(book) {
    this.dialog.open(EditBookComponent);
    this.getOne.book = book;
  }

}
