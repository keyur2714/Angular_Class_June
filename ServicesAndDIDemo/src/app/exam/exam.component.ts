import { Component, OnInit } from '@angular/core';
import { ExamService } from './services/exam-service';
import { IQuestion,SpringQuestion,JavaQuestion,AngularQuestion } from './services/index';
@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css'],
  providers : [ 
    {provide: IQuestion , useClass : JavaQuestion},
    ExamService 
  ]
})
export class ExamComponent implements OnInit {

  question : string = '';

  constructor(private examService : ExamService) { }

  ngOnInit() {
    this.question = this.examService.startExam();
  }

}
