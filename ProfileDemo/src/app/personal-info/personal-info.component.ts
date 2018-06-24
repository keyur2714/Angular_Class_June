import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  firstName: string = 'keyur';
  lastName: string = 'thakor';
  age: number = 31;
  mobileNo: string = '7387029671';
  city: string = 'pune';

  constructor() { 
  }

  ngOnInit() {
  }

}
