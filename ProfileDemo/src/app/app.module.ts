import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoComponent
  ],
  imports: [
    BrowserModule
  ],      
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
