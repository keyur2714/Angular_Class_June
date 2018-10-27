import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/Rx'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  generatedNo : number = 0;
  numbersObservable = Observable.interval(1000);

  title = 'Observable Demo';

  ngOnInit(){
  // this.numbersObservable.subscribe(
  //     (number)=>{
  //       console.log(number);
  //       this.generatedNo = number;
  //     }
  //   )
  }

}
