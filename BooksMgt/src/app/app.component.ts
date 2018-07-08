import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Book Mgt.';
  age: number = 19;
  grade: string = '';

  calculateGrade(per:string){
    let percentage = parseInt(per);
    if(percentage >=  70)
      this.grade = 'Dist';
    else if(percentage >= 60)
      this.grade = 'First';
    else if(percentage >= 50)
      this.grade = 'Second';
    else if(percentage >= 40)
      this.grade = 'Pass';
    else
      this.grade = 'FAIL';    
  }
}
