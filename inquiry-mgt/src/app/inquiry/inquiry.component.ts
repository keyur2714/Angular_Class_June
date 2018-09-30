import { Component, OnInit } from '@angular/core';
import { InquiryService } from './inquiry.service';
import { Inquiry } from './inquiry.model';
import { Response } from '@angular/http';
@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css'],
  providers : [InquiryService]
})
export class InquiryComponent implements OnInit {

  inquiry : Inquiry = new Inquiry();
  inquiries : Inquiry[] = [];
  statusCode : number = 0;

  constructor(private inquiryService:InquiryService) { }

  ngOnInit() {
    this.getAllInquiries();
  }

  getAllInquiries(){
    this.inquiryService.getInquiries().subscribe(
      (data: Response)=>{
        console.log(data)
        console.log(data.json())
        this.inquiries = data.json();        
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  getNewId(){
    let maxId = 0;
    this.inquiryService.getInquiries().subscribe(
      (data: Response)=>{
        this.inquiries = data.json();                
        for(let i of this.inquiries){
          if(maxId < i.id){
            maxId = i.id;
          }
        }
        this.inquiry.id = maxId + 1;
      },
      (error)=>{
        console.log(error);
        return;
      }
    )        
  }

  save(){
    if(this.inquiry.id != null && this.inquiry.id > 0){

    }else{
      this.getNewId();
      this.inquiryService.saveInquirie(this.inquiry).subscribe(
        (data)=>{
          console.log(data);
          console.log(data.status);
          this.statusCode = data.status;
          this.getAllInquiries();
        },
        (errpr)=>{

        }
      )
    }
  }
}
