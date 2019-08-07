import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Angular Materials
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

//Services
import { GetService } from './services/get-service/get.service';
import { GetOneService } from './services/get-one-service/get-one.service';
import { PostService } from './services/post-service/post.service';
import { PutService } from './services/put-service/put.service';
import { DeleteService } from './services/delete-service/delete.service';

//Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { EditBookComponent } from './components/dialog/edit-book/edit-book.component';
import { DeleteBookComponent } from './components/dialog/delete-book/delete-book.component';
import { RentBookComponent } from './components/rent-book/rent-book.component';
import { PdfComponent } from './components/pdf/pdf.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InventoryComponent,
    HomeComponent,
    NotFoundComponent,
    ReservationsComponent,
    AddBookComponent,
    EditBookComponent,
    DeleteBookComponent,
    RentBookComponent,
    PdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatIconModule
  ],
  entryComponents: [
    DeleteBookComponent,
    EditBookComponent
  ],
  providers: [GetService, GetOneService, PostService, PutService, DeleteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
