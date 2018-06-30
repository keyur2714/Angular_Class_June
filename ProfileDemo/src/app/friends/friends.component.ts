import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friendsList: string[] = ["keyur","denish","vinit"];

  constructor() { }

  ngOnInit() {
  }

  addFriend(name:string):void{
    console.log("========"+name);
    this.friendsList.push(name);
  }

}
