import { Component, OnInit } from '@angular/core';
import { Inquiry } from './inquiry.model';
@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent implements OnInit {

  inquiry : Inquiry = new Inquiry();
  isSubmitted : boolean = false;

  

  avalibityList: string[]=[
    "MON","THE","WED","THURSE","FRI","SAT","SUN"
  ];

  constructor() { }

  ngOnInit() {
    this.inquiry.name = "keyur";
    this.inquiry.availibity = this.avalibityList;
  }

  save(frm):void{
    console.log(frm);
    console.log(frm.value);    
    if(frm.valid){
      this.isSubmitted = true;
      console.log(this.inquiry);    
    }
  }

  reset(frm){
    this.inquiry = new Inquiry();
    frm.reset();
  }
}
