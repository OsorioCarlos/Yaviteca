import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from './components/inventory/inventory.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { RentBookComponent } from './components/rent-book/rent-book.component';
import { PdfComponent } from './components/pdf/pdf.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'not-found', component: NotFoundComponent},
  //{path: '**', redirectTo: 'not-found'},
  {path: 'inventory', component: InventoryComponent},
  {path: 'reservations', component: ReservationsComponent},
  {path: 'add-book', component: AddBookComponent},
  {path: 'rent-book', component: RentBookComponent},
  {path: 'generar-pdf', component: PdfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
