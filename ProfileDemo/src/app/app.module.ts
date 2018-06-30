import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { FriendsComponent } from './friends/friends.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    FriendsComponent,
    EmployeeListComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule
  ],      
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
