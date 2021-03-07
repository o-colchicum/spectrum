import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorii',
  templateUrl: './categorii.component.html',
  styleUrls: ['./categorii.component.scss']
})
export class CategoriiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  playAudio(path : string){
    let audio = new Audio();
    audio.src = path;
    audio.load();
    audio.play();
  }

 
}
