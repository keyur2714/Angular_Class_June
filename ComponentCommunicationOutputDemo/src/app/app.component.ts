import { Component } from '@angular/core';
import { Country } from './country/county.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '@Output Demo';

  name = "keyur";

  msg: string= "Radhe Krishna..."!
  formateedMsg :string = '';

  country: Country = new Country();

  result: number=0;

  setFormattedMessage(msg){
    console.log(2);
    this.formateedMsg = msg;
  }

  setResult(result){
    console.log(2);
    this.result = result * 2;
  }

  getCounty(country){
    this.country = country;
  }
}
