import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModuleMateriale } from './moduleMaterial';
import { MeniuCartonaseComponent } from './meniu-cartonase/meniu-cartonase.component';
import { EmotiiComponent } from './emotii/emotii.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './loading/loading.component';
import { AsistComponent } from './asist/asist.component';
import { CategoriiComponent } from './categorii/categorii.component';
import { ObiecteComponent } from './obiecte/obiecte.component';
import { MancareComponent } from './mancare/mancare.component';

import {HttpClientModule} from '@angular/common/http';
import {MatNativeDateModule} from '@angular/material/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { MarComponent } from './mar/mar.component';
import { SeteComponent } from './sete/sete.component';
import { MedicComponent } from './medic/medic.component';
import { FebraComponent } from './febra/febra.component';
import { Router } from '@angular/router';
import { RecognitionGuard } from './recognition.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MeniuCartonaseComponent,
    EmotiiComponent,
    LoadingComponent,
    AsistComponent,
    CategoriiComponent,
    ObiecteComponent,
    MancareComponent,
    MarComponent,
    SeteComponent,
    MedicComponent,
    FebraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ModuleMateriale,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule
    
    
  ],
  entryComponents: [AppComponent],
  providers: [
    RecognitionGuard,
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
