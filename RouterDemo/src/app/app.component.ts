import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Router Demo';
  constructor(){
    console.log("Appcomponent Object is Created...");
  }
}
