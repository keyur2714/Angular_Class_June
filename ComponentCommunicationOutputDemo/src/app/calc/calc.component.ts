import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  result:number = 0;

  @Output("getResult")
  getResultEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  add(num1,num2){
    console.log(1);
    this.result = parseInt(num1)+parseInt(num2);
    this.getResultEvent.emit(this.result);
  }

}
