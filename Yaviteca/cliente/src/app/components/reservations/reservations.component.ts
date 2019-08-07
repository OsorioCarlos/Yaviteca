import { Component, OnInit} from '@angular/core';
import { GetService } from '../../services/get-service/get.service';
import { PutService } from '../../services/put-service/put.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'libro', 'alquiler', 'maximaDevolucion', 'devolucion', 'remover'];
  alquileres: object = [];

  constructor(protected getService: GetService, protected putService: PutService) { }

  ngOnInit() {
    this.getService.getLibrosAlquilados()
      .subscribe(
        (data) => {
          this.alquileres = data;
        },
        (error) => {
          console.error(error);
        }
      )
  }

  addZero(i) {
    if (i < 10) {
      i = '0' + i;
    }
    return i;
  }

  devolverLibro(alquiler){
    var hoy = new Date();
    var dd = hoy.getDate();
    var mm = hoy.getMonth()+1;
    var yyyy = hoy.getFullYear();

    dd = this.addZero(dd);
    mm = this.addZero(mm);

    var alquilerInfo = {
      id: alquiler.id_prestamo,
      devolucion: yyyy + '-' + mm + '-' + dd
    }

    var libroInfo = {
      id: alquiler.id_libro,
      estado: 1
    }
    
    this.putService.devolverLibro(alquilerInfo).subscribe()
    this.putService.cambiarEstado(libroInfo).subscribe()
    document.location.reload();
  }

}

