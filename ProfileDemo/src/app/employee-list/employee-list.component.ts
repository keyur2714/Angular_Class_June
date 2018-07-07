import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  selectedEmployee: Employee = new Employee();

  // Create Object Array in javascript syntax
  // empList = [
  //   {
  //   "id":27,
  //   "name":"keyur",
  //   "age":31,
  //   "salary": 12121,
  //   "deptId": 10
  //   },
  //   {
  //   "id":26,
  //   "name":"denish",
  //   "age":32,
  //   "salary": 12122,
  //   "deptId": 20
  //   },
  //   {
  //   "id":44,
  //   "name":"vinit",
  //   "age":32,
  //   "salary": 12321,
  //   "deptId": 30
  //   }
  // ];

  // Create Single Object in javascript syntax
  // employee = {
  //   "id":27,
  //   "name":"keyur",
  //   "age":31,
  //   "salary": 12121,
  //   "deptId": 10
  // };

  empList: Employee[] = [
    {
      id: 27,
      name: "keyur",
      age: 31,
      salary: 12121,
      deptId: 10
    }
  ];
  constructor() { 
    console.log(1);
    let emp2 = new Employee();
    emp2.id = 44;
    emp2.name = "vinit";
    emp2.age = 32;
    emp2.salary = 23241;
    emp2.deptId = 30;

    this.empList.push(emp2);
  }

  ngOnInit() {
    console.log(2); 
    let emp3 = new Employee();
    emp3.id = 26;
    emp3.name = "denish";
    emp3.age = 32;
    emp3.salary = 23231;
    emp3.deptId = 20;

    this.empList.push(emp3);
  }

  addNewEmployee(id:number,name:string,age:number,salary:number,deptId:number){
    console.log(id); 
    let tempEmployee:Employee = new Employee();
    tempEmployee.id = id;
    tempEmployee.name = name;
    tempEmployee.age = age;
    tempEmployee.salary = salary;
    tempEmployee.deptId = deptId;
    this.empList.push(tempEmployee);
  }
  delete(idIndex:number){
    this.empList.splice(idIndex,1);
  }

  setSelectedEmp(emp){
    this.selectedEmployee = emp;
  }
}
