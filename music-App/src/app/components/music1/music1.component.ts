import { Component, OnInit } from '@angular/core';
import { Music } from './music';

@Component({
  selector: 'app-music1',
  templateUrl: './music1.component.html',
  styleUrls: ['./music1.component.scss'],
})
export class Music1Component implements OnInit {
  music: Music[];
  isShow=true;
  private audio=document.getElementById("audio");
  member:number=99;
  date:Date=new Date();
  msg="";
  audioObj=new Audio();
  isPasued: boolean=false;
  constructor() {
    // if array is empty no table will be shown on view due to *ngIf directivr
    this.music = [
      { mid: 101, name: 'Friends', genre: 'Rock', singer: 'marshmello',cover:'/assets/images/friends.jpg',song:'/assets/songs/song1.mp3' },
      { mid: 102, name: 'Khairiyat', genre: 'Romantic', singer: 'Arijit',cover:'/assets/images/khairiyat.jpg',song:'/assets/songs/song2.mp3' },
      { mid: 102, name: 'Sugar', genre: 'Dance', singer: 'Maroon 5',cover:'/assets/images/sugar.jpg',song:'/assets/songs/song2.mp3' }
    ];
  }


  getMsg():string{
    return "FAVOURITE SONGS";
  }

  pageTitle:string =this.getMsg();
  
  buttonClicked=()=>{
    alert("button clicked");
  }

  toggleImg=()=>{
    return this.isShow = !this.isShow;  
    
  }

  pauseAudio=()=>{
    this.isPasued=true;
    this.audioObj.pause();
    
  }
  playAudio(song:string){
    
    if(!this.isPasued){
      this.audioObj.src=song;
      this.audioObj.load();
    }
    else{
      this.isPasued=false;
    }
    
    this.audioObj.play();

  }

  stopAudio(){
    this.audioObj.pause();
    this.audioObj.currentTime=0;
  }

  ngOnInit(): void {
    console.log("on init")
  }
}

