import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Structural Directive Demo';

  loopCounter:number = 5;

  age:number =18;

  grade: string ='First';

  calculateGrade(percentage:string){
    let per=parseInt(percentage);
    if(per>=70)
      this.grade = 'Dist';
    else if(per >= 60)
      this.grade = 'First';
    else if(per >= 50)
      this.grade = 'Second';
    else if(per >= 35)
      this.grade = 'Pass';
    else
      this.grade = 'Fail';    
  }
}
