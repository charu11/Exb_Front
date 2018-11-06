import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarModule, WavesModule, CardsFreeModule,  } from 'angular-bootstrap-md';
import { HotelComponent } from './hotel/hotel.component';
import { InfoComponent } from './info/info.component';
import { ExploreComponent } from './explore/explore.component';


@NgModule({
  declarations: [
    
    AppComponent,
    HotelComponent,
    InfoComponent,
    ExploreComponent
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
  
  bootstrap: [AppComponent]
})
export class AppModule { }
