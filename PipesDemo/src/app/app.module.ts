import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomePipe } from './welcome.pipe';
import { FormateStrPipe } from './formate-str.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePipe,
    FormateStrPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
