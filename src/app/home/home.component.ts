import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  hidden = false;
  scris = "Buna Oana";

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
