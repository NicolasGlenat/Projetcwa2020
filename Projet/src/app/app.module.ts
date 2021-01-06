import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiloComponent } from './silo/silo.component';
import { ArriveeComponent } from './arrivee/arrivee.component';
import { AjouterComponent } from './ajouter/ajouter.component';

@NgModule({
  declarations: [
    AppComponent,
    SiloComponent,
    ArriveeComponent,
    AjouterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
