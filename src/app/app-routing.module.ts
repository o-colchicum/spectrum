import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsistComponent } from './asist/asist.component';
import { CategoriiComponent } from './categorii/categorii.component';
import { EmotiiComponent } from './emotii/emotii.component';
import { FebraComponent } from './febra/febra.component';
import { HomeComponent } from './home/home.component';
import { LoadingComponent } from './loading/loading.component';
import { MancareComponent } from './mancare/mancare.component';
import { MarComponent } from './mar/mar.component';
import { MedicComponent } from './medic/medic.component';
import { MeniuCartonaseComponent } from './meniu-cartonase/meniu-cartonase.component';
import { ObiecteComponent } from './obiecte/obiecte.component';
import { SeteComponent } from './sete/sete.component';
import { RecognitionGuard } from './recognition.guard';

const routes: Routes = [
  {
    'path' : 'cartonase', 'component': MeniuCartonaseComponent, canActivate: [RecognitionGuard]
  },
  {
    'path': 'home', 'component': HomeComponent, canActivate: [RecognitionGuard]
  },
  {
    'path': 'categorii', 'component': CategoriiComponent, canActivate: [RecognitionGuard]
  },
  {
    'path': 'obiecte', 'component': ObiecteComponent, canActivate: [RecognitionGuard]
  },
  {
    'path': 'emotii', 'component': EmotiiComponent, canActivate: [RecognitionGuard]
  },
  {
    'path': 'asist', 'component': AsistComponent, canActivate: [RecognitionGuard]
  }, 
  {
    'path': 'mancare', 'component': MancareComponent, canActivate: [RecognitionGuard]
  },
  {
    'path': 'mar', 'component': MarComponent, canActivate: [RecognitionGuard]
  },
  {
    'path': 'sete', 'component': SeteComponent, canActivate: [RecognitionGuard]
  },
  {
    'path': 'medic', 'component': MedicComponent, canActivate: [RecognitionGuard]
  },
  {
    'path': 'febra', 'component': FebraComponent, canActivate: [RecognitionGuard]
  },
  {
    'path': '**', 'component': LoadingComponent, canActivate: [RecognitionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
