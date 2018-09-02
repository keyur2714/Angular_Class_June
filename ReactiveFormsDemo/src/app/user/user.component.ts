import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormArray,Validators } from '@angular/forms';
import { User } from './user.model';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user : User = new User();
  isSubmitted : boolean = false;

  userForm = new FormGroup({
    name : new FormControl('',[Validators.required,Validators.minLength(3)]),
    city : new FormControl("surat",Validators.required),
    mobileNo: new FormControl(),
    isActive: new FormControl(true),
    hobbies: new FormArray([new FormControl()])
  });

  constructor() { }

  ngOnInit() {
  }

  setDefault():void{
    this.userForm.patchValue({"city":"surat","isActive":true})
  }

  resetForm():void{
    this.userForm.setValue({name:"",city:"surat",mobileNo:"",isActive:true})
  }

  save():void{
    
    if(this.userForm.valid){
      console.log(this.userForm.value);
      this.user = this.userForm.value;
      this.isSubmitted = true;
    }else{
      this.user = null;
      this.isSubmitted = false;
    }
  }

  addHobby():void{
    let hobby = new FormControl('cricket');
    (<FormArray>this.userForm.get('hobbies')).push(hobby);
  }
}
