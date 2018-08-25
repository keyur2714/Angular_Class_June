import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent implements OnInit {

  list: string[]=["A","B","C"];

  constructor() { }

  ngOnInit() {
  }

  save(frm):void{
    console.log(frm);
    console.log(frm.value);
  }

  reset(frm){
    frm.reset();
  }
}
