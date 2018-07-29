import { Component,ViewChild } from '@angular/core';
import { MyColorDirective } from './my-color.directive';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Directive Demo';
  color = '';

  @ViewChild(MyColorDirective)
  myColorDirective: MyColorDirective;

  changeColor(){
    console.log(this.color);
    this.myColorDirective.changeColor(this.color);
  }
}
