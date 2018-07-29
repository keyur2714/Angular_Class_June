import { Directive,ElementRef,OnInit,Input } from '@angular/core';

@Directive({
  selector: '[appMyColor]'
})
export class MyColorDirective implements OnInit{

  @Input() appMyColor: string = 'green';

  constructor(private elementRef:ElementRef) { }

  ngOnInit(){
    console.log("Hi..");
    this.elementRef.nativeElement.style.color = this.appMyColor;
    this.elementRef.nativeElement.style.fontSize = '25px';
  }

  changeColor(color:string){
    this.appMyColor = color;
    this.elementRef.nativeElement.style.color = this.appMyColor;
  }

}
