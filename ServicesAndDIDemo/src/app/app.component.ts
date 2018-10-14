import { Component, OnInit } from '@angular/core';
import { LoggingService } from './services/logging-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Services And DI';
  constructor(private loggingService : LoggingService){
  }

  ngOnInit(){
    this.loggingService.logInfo("App Component Initialized...!");
  }
}
