import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input()
  count:number=0;

  @Output()
  sendCount:EventEmitter<number>=new EventEmitter<number>();

  increamentCount(){
    this.count++;
    this.sendCount.emit(this.count);
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
