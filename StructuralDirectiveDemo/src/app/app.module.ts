import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MyForLoopDirective } from './directive/my-for-loop.directive';
import { MyIfDirective } from './directive/my-if.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyForLoopDirective,
    MyIfDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
