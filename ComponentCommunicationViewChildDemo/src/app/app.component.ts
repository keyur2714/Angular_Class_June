import { Component,ElementRef,ViewChild } from '@angular/core';
import { StringUtilComponent } from './string-util/string-util.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '@ViewChild Demo';
  resultString:string = '';

  @ViewChild("str")
  strText: ElementRef;

  @ViewChild("output")
  outputDiv: ElementRef;

  @ViewChild(StringUtilComponent)
  stringUtilComponent : StringUtilComponent;

  reverseStr(str){
    this.resultString = this.stringUtilComponent.reverseString(str);
  }

  reverseStrWithElementRef(){
    console.log(this.strText);
    console.log(this.outputDiv);
    let s = this.strText.nativeElement.value.split("");
    console.log(s);
    this.resultString = this.stringUtilComponent.reverseString(this.strText.nativeElement.value);
    //console.log(this.resultString);
  }

  checkPalindrom(){
    let flag:boolean  = this.stringUtilComponent.isPalindrom(this.strText.nativeElement.value);
    if(flag){
      this.resultString = "String is Palindrom";
    }else{
      this.resultString = "String is Not Palindrom";
    }
  }
}
