import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,Validators } from '@angular/forms';
import { Department } from './dept.model';
import { Team } from './team.model';
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  team: Team = new Team();

  constructor(private formBuilder: FormBuilder) { }

  deptGroup = this.formBuilder.group(new Department());

  teamForm = this.formBuilder.group({
    teamName: new FormControl(),
    managerName: new FormControl(),
    department: this.formBuilder.group(new Department())
  });

  ngOnInit() {
    this.teamForm.get("department").get("code").setValidators(Validators.required);
  }

  saveTeam(){
    console.log(this.teamForm.value);
    if(this.teamForm.valid){
      this.team = this.teamForm.value;
      console.log(this.team);
    }
  }
}
