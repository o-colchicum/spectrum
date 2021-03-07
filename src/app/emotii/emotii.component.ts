import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emotii',
  templateUrl: './emotii.component.html',
  styleUrls: ['./emotii.component.scss']
})
export class EmotiiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const element = 	document.getElementById('videoRec')!
	  element.style.display = 'block'!; 
  }

  emotiaAleasa="bucurie"

  pushMe() {
    console.log(this.emotiaAleasa);
  }

  playAudio(path : string){
    let audio = new Audio();
    audio.src = path;
    audio.load();
    audio.play();
  }
  
}
