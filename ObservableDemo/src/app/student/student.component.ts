import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';
import { StudentService } from './student.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers: [ StudentService ]
})
export class StudentComponent implements OnInit {

  studentList : Student[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit() {
   this.studentService.getStudentListInUpppercase().subscribe(
     (studentList:Student[])=>{
      this.studentList = studentList;
     },
    (error)=>{

    }
   ) 
  }

}
