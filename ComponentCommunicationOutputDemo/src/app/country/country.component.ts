import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Country } from './county.model';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  selectedCountry: Country = new Country();

  @Output()
  getSelectedCountry = new EventEmitter<Country>();

  countryList: Country[] = [
    {
      "id":121,
      "code":"IND",
      "name":"India"
    },
    {
      "id":111,
      "code":"US",
      "name":"Usa"
    },
    {
      "id":112,
      "code":"FR",
      "name":"France"
    }
  ];

  constructor() { }

  ngOnInit() {
    this.selectedCountry = this.countryList[0];
  }

  setSelectedCounty(){
    console.log("...");
    this.getSelectedCountry.emit(this.selectedCountry);
  }
}
