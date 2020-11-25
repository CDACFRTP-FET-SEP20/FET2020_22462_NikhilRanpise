import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

 class Actor{
  public name:string;
  public characterPlayed:string;
  public isHandsome:boolean;
  // constructor(name:string,characterPlayed:string,isHandsome:boolean){
  //     this.name=name;
  //     this.characterPlayed=characterPlayed;
  //     this.isHandsome=isHandsome;
  // }
}


var actor:Actor=new Actor();
actor.name="Amrish puri";
actor.characterPlayed="Mogambo";
actor.isHandsome=false;



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment2';
 public aName:string=actor.name;
 public aCharacter=actor.characterPlayed;
  public isHandsome=actor.isHandsome;
  msg:string=" ";


  welcome=()=>{
    alert("Welcome to the world fo angular JS");
  }
  
}
