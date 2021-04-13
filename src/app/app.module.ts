import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataRestClientService } from './data-rest-client.service';
import { DataTableComponent } from './data-table/data-table.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatTableModule,
    FormsModule
  ],
  providers: [
    DataRestClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }