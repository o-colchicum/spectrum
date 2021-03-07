import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asist',
  templateUrl: './asist.component.html',
  styleUrls: ['./asist.component.scss']
})
export class AsistComponent implements OnInit {

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
