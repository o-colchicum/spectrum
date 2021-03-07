import { Component, OnInit } from '@angular/core';

// pentru form
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
// end pentru form

@Component({
  selector: 'app-obiecte',
  templateUrl: './obiecte.component.html',
  styleUrls: ['./obiecte.component.scss']
})
export class ObiecteComponent implements OnInit {

  constructor() { }

    // pentru form
    myControl = new FormControl();
    options: {'nume':string, 'url':string}[] = [
      
      {
        'nume': 'Supa',
        'url': '/supa'
      },
      {
        'nume': 'Branza',
        'url': '/branza'
      }, 
      {
        'nume': 'Carne',
        'url': '/carne'
      }, 
      {
        'nume': 'Mar',
        'url': '/mar'
      }, 
      {
        'nume': 'Para',
        'url': '/para'
      }, 
      {
        'nume': 'Mama',
        'url': '/mama'
      }, 
      {
        'nume': 'Tata',
        'url': '/tata'
      }, 
      {
        'nume': 'Bunic',
        'url': '/bunic'
      }, 
      {
        'nume': 'Bunica',
        'url': '/bunica'
      }, 
      {
        'nume': 'Caine',
        'url': '/caine'
      }, 
      {
        'nume': 'Pisica',
        'url': '/pisica'
      }, 
      {
        'nume': 'Vaca',
        'url': '/vaca'
      }, 
      {
        'nume': 'Urs',
        'url': '/urs'
      }, 
      {
        'nume': 'Joc',
        'url': '/joc'
      }, 
      {
        'nume': 'Caiet',
        'url': '/caiet'
      }, 
      {
        'nume': 'Acuarele',
        'url': '/acuarele'
      }, 
      {
        'nume': 'Minge',
        'url': '/minge'
      }, 
      {
        'nume': 'Sete',
        'url': '/sete'
      }, 
      {
        'nume': 'Febra',
        'url': '/febra'
      }, 
    ];
    filteredOptions!: Observable<{'nume':string, 'url':string}[]>;
  
    ngOnInit() {
      this.filteredOptions = this.myControl.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value))
        );
    }
    
  
    private _filter(value: string): {'nume': string, 'url': string}[] {
      const filterValue = value.toLowerCase();
  
      return this.options.filter(option => option['nume'].toLowerCase().includes(filterValue));
    }
  // end pentru form


  playAudio(path : string){
    let audio = new Audio();
    audio.src = path;
    audio.load();
    audio.play();
  }

}
