import { Component,OnInit } from '@angular/core';
import { Course } from './model/course.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Component Communications @Input Demo';

  name: string = "Keyur";

  messageList: string[]=[
    "Hello...!",
    "How Are You?",
    "Radhe Krishna...!"
  ];
  courseList: Course[]= [];
 
  ngOnInit(){
    const course = new Course();
    course.name = "Angular";
    course.courseId = 10;
    course.fees = 12000;

    const course1 = new Course();
    course1.name = "Java";
    course1.courseId = 20;
    course1.fees = 10000;

    const course2 = new Course();
    course2.name = "Big Data";
    course2.courseId = 30;
    course2.fees = 17000;

    this.courseList.push(course);
    this.courseList.push(course1);
    this.courseList.push(course2);

    
  }

  




}
