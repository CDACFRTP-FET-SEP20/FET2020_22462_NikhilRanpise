import { Component, OnInit } from '@angular/core';
import { Music } from '../music1/music';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-music',
  templateUrl: './add-music.component.html',
  styleUrls: ['./add-music.component.scss']
})
export class AddMusicComponent implements OnInit {
  music:Music;
  constructor() { 
    this.music={ mid: 101,
       name: 'Friends',
        genre: 'Rock',
         singer: 'marshmello',
         cover:'/assets/images/friends.jpg',
         song:'/assets/songs/song1.mp3' };

  }
  getMusicForm(data:NgForm){
    console.log(data);
    alert("music added");
    
  }

  ngOnInit(): void {
  }

}
