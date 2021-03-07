import { Component, OnInit } from '@angular/core';

import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-sete',
  templateUrl: './sete.component.html',
  styleUrls: ['./sete.component.scss']
})
export class SeteComponent implements OnInit {

  constructor() { }

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
      'nume': 'Apa',
      'url': '/apa'
    }, 
    {
      'nume': 'Suc',
      'url': '/suc'
    }, 
    {
      'nume': 'Paine',
      'url': '/paine'
    }, 
    {
      'nume': 'Peste',
      'url': '/peste'
    }, 
    {
      'nume': 'Pizza',
      'url': '/pizza'
    }, 
  
    {
      'nume': 'Sete',
      'url': '/sete'
    } 
  
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
 
  playAudio(path : string){
    let audio = new Audio();
    audio.src = path;
    audio.load();
    audio.play();
  }
}