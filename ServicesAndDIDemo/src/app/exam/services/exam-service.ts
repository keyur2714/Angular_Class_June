import { Injectable } from '@angular/core';
import { IQuestion } from './i-question';
@Injectable()
export class ExamService{    
    constructor(private iQuestion:IQuestion){
    }
    startExam():string{
        return this.iQuestion.askQuestion();
    }
}