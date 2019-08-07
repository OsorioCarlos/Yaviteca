import { Component, OnInit } from '@angular/core';
import { GetService } from '../../services/get-service/get.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {

  displayedColumns: string[] = ['libroIngreso', 'cantidadIngreso', 'fechaIngreso', 'libroSalida', 'cantidadSalida', 'fechaSalida', 'libroExistente', 'cantidadExistente'];

  registroEntrada: any = []
  registroExistente: any = []
  registroSalida: any = []

  desde = '2019-08-01';

  constructor(protected getService: GetService) { }

  ngOnInit() {
      this.getService.getRegistrosEntrada(this.desde)
      .subscribe(
        (data) => {
          this.registroEntrada = data;
        },
        (error) => {
          console.error(error);
        }
      )

      this.getService.getRegistrosExistentes(this.desde)
      .subscribe(
        (data) => {
          this.registroExistente = data;
        },
        (error) => {
          console.error(error);
        }
      )

      this.getService.getRegistrosSalida()
      .subscribe(
        (data) => {
          this.registroSalida = data;
        },
        (error) => {
          console.error(error);
        }
      )
  }

  presente = new Date();

  restarDias(fecha, dias){
    fecha.setDate(fecha.getDate() - dias);
    return fecha;
  }

  fecha = new Date();
  pasado = this.restarDias(this.fecha, 7);

  cambiarFormatoFecha(fecha){
    var date = new Date(fecha);
    var year = date.getFullYear();
    var month: any = date.getMonth()+1;
    var dt: any = date.getDate();

    if (dt < 10) {
      dt = '0' + dt;
    }
    if (month < 10) {
      month = '0' + month;
    }
    return (year + '-' +  month + '-' + dt);
  }

  generarPDF(){
    var input = document.getElementsByTagName('input');
    var desde = input[0].value;
    var hasta = input[1].value;
    var elaborado = input[2].value;
    
    if ((desde && hasta && elaborado) != ''){
      var doc = new jsPDF({
        orientation: 'l',
        unit: 'mm',
        format: 'a4'
      });

      doc.text('Instituto Tecnológico Superior de Turismo y Patrimonio "Yavirac"', 65, 20);
      doc.text('Control de Inventario', 120, 30);

      doc.text('Desde: ' + desde, 15, 45);
      doc.text('Hasta: ' + hasta, 85, 45);
      doc.text('Elaborado por: ' + elaborado, 165, 45);

      doc.rect(15, 55, 95, 10);
      doc.text('ENTRADA', 45, 62);
      doc.rect(110, 55, 95, 10);
      doc.text('SALIDA', 145, 62);
      doc.rect(205, 55, 85, 10);
      doc.text('EXISTENTE', 233, 62);

      doc.setFontSize(14);
      doc.rect(15, 65, 45, 10);
      doc.text('Libro', 33, 72);
      doc.rect(60, 65, 30, 10);
      doc.text('Fecha', 68, 72);
      doc.rect(90, 65, 20, 10);
      doc.setFontSize(10);
      doc.text('Cantidad', 93, 72);

      doc.setFontSize(14);
      doc.rect(110, 65, 45, 10);
      doc.text('Libro', 127, 72);
      doc.rect(155, 65, 30, 10);
      doc.text('Fecha', 163, 72);
      doc.rect(185, 65, 20, 10);
      doc.setFontSize(10);
      doc.text('Cantidad', 188, 72);

      doc.setFontSize(14);
      doc.rect(205, 65, 65, 10);
      doc.text('Libro', 234, 72);
      doc.rect(270, 65, 20, 10);
      doc.setFontSize(10);
      doc.text('Cantidad', 273, 72);

      doc.setFontSize(8);

      for (var i = 0; i < this.registroEntrada.length; i++){
        doc.rect(15, 75 + (i * 10), 45, 10);
        doc.text(this.registroEntrada[i].nombre, 17, 82 + (i * 10));
        doc.rect(60, 75 + (i * 10), 30, 10);
        doc.text(this.cambiarFormatoFecha(this.registroEntrada[i].fecha_creacion), 68, 82 + (i * 10));
        doc.rect(90, 75 + (i * 10), 20, 10);
        doc.text(this.registroEntrada[i].count, 99, 82 + (i * 10));
      }

      for (var i = 0; i < this.registroSalida.length; i++){
        doc.rect(110, 75 + (i * 10), 45, 10);
        doc.text(this.registroSalida[i].nombre, 112, 82 + (i * 10));
        doc.rect(155, 75 + (i * 10), 30, 10);
        doc.text(this.cambiarFormatoFecha(this.registroSalida[i].fecha_alquiler), 163, 82 + (i * 10));
        doc.rect(185, 75 + (i * 10), 20, 10);
        doc.text(this.registroSalida[i].count, 195, 82 + (i * 10));
      }

      for (var i = 0; i < this.registroExistente.length; i++){
        doc.rect(205, 75 + (i * 10), 65, 10);
        doc.text(this.registroExistente[i].nombre, 207, 82 + (i * 10));
        doc.rect(270, 75 + (i * 10), 20, 10);
        doc.text(this.registroExistente[i].count, 279, 82 + (i * 10));
      }
      doc.save('registro-yaviteca.pdf');
    } else {
      alert('Los campos no estan llenos');
    }
  }
}
