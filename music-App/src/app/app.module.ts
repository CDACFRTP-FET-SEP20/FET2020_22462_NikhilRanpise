import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { header } from './app.header';
import { FooterComponentsComponent } from './components/footer-components/footer-components.component';
import { Music1Component } from './components/music1/music1.component';
import { ConvertSpaces } from './customPipe/convertSpace';
import { searchSong } from './customPipe/searchSong';
import { CounterComponent } from './components/counter/counter.component';
import { AddMusicComponent } from './components/add-music/add-music.component';
import { EditMusicComponent } from './components/edit-music/edit-music.component';

@NgModule({
  declarations: [
    AppComponent,header, FooterComponentsComponent, Music1Component,ConvertSpaces,searchSong, CounterComponent, AddMusicComponent, EditMusicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
