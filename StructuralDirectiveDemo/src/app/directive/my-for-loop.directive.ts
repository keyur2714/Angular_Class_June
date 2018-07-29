import { Directive,TemplateRef,ViewContainerRef,Input } from '@angular/core';

@Directive({
  selector: '[appMyForLoop]'
})
export class MyForLoopDirective {

  constructor(private templateRef:TemplateRef<any>,private viewContainerRef:ViewContainerRef) {}

  @Input('appMyForLoop') set myLoop(num:number){
    console.log(num);
    this.viewContainerRef.clear();
    for(let i=1;i<=num;i++){      
      this.viewContainerRef.createEmbeddedView(this.templateRef);       
    }
  }


}
