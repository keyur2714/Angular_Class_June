import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student.model';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentList: Student[] = [];    
  columnHeaderList: string[] = ["Student Id","Name","Email"];
  columnNameList: string[] = ["studentId","name","email"];

  completeMsg = "";
  constructor() { }

  ngOnInit() {
    const student:Student = new Student();
    student.studentId = 27;
    student.name = "keyur";
    student.mobileNo = "7387029671";
    student.email = "keyurjava27@gmail.com";

    const student1:Student = new Student();
    student1.studentId = 26;
    student1.name = "denish";
    student1.mobileNo = "7387029980";
    student1.email = "denishjava26@gmail.com";

    this.studentList.push(student);
    this.studentList.push(student1);

    this.completeMsg = "Total Records : "+this.studentList.length;
  }

}
