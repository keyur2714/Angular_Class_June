import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-util',
  templateUrl: './string-util.component.html',
  styleUrls: ['./string-util.component.css']
})
export class StringUtilComponent implements OnInit {

  constructor() { 
    console.log("Object is created...");
  }

  ngOnInit() {
  }

  reverseString(str:string):string{
    return str.split("").reverse().join("");
  }

  getLength(str:string):number{
    return str.split("").length;
  }

  isPalindrom(str:string):boolean{
    const revStr = this.reverseString(str);
    if(str === revStr)
      return true;
    return false;
  }
}
