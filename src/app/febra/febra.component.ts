import { Component, OnInit } from '@angular/core';


import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-febra',
  templateUrl: './febra.component.html',
  styleUrls: ['./febra.component.scss']
})
export class FebraComponent implements OnInit {

  constructor() { }
  myControl = new FormControl();
  options: {'nume':string, 'url':string}[] = [
    
    {
      'nume': 'Febra',
      'url': '/febra'
    },
    {
      'nume': 'Cap',
      'url': '/cap'
    }, 
    {
      'nume': 'Burta',
      'url': '/burta'
    }, 
    {
      'nume': 'Ochi',
      'url': '/ochi'
    }, 
    {
      'nume': 'Gat',
      'url': '/gat'
    }, 
    {
      'nume': 'Ureche',
      'url': '/ureche'
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