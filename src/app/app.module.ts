import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarModule, WavesModule, CardsFreeModule } from 'angular-bootstrap-md'
import { HotelComponent } from './hotel/hotel.component'

@NgModule({
  declarations: [
    AppComponent,
    HotelComponent
  ],
  imports: [
    CardsFreeModule,
    MDBBootstrapModule,
    WavesModule,
    NavbarModule,
    BrowserModule,
    AppRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
