import { Observable } from 'rxjs';
import { Student } from './student.model';
export class StudentService {
 

    getStudentListObservable():Observable<Student[]>{
        let studentList : Student[] = [];
        let stud1 = new Student();
        stud1.rollNo = 32;
        stud1.name = "keyur";
        studentList.push(stud1);
        let stud2 = new Student();
        stud2.rollNo = 26;
        stud2.name = "denish";
        studentList.push(stud2);
        let stud3 = new Student();
        stud3.rollNo = 44;
        stud3.name = "vinit";        
        studentList.push(stud3);
        return Observable.of(studentList);
    }

    getStudentListInUpppercase():Observable<Student[]>{
        return this.getStudentListObservable()
        .map(this.converStudentList)
        .catch(this.handleError);
    }

    converStudentList(studentList){
        for(let student of studentList){
            student.name = student.name.toUpperCase();
        }
        return studentList;
    }

    handleError(err){
        return Observable.throw(err);
    }
    
}