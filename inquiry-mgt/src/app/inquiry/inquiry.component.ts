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
      (data: Inquiry[])=>{
        console.log(data)
        this.inquiries = data;        
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  getNewId(){
    let maxId = 0;
    this.inquiryService.getInquiries().subscribe(
      (data)=>{
        this.inquiries = data;                
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
      this.inquiryService.updateInquirie(this.inquiry).subscribe(
        (data:Inquiry)=>{          
          this.statusCode = 200;
          console.log(data+" ===");
          this.getAllInquiries();
        },
        (error)=>{
          this.statusCode = error;
        }
      )
    }else{
      this.getNewId();
      this.inquiryService.saveInquirie(this.inquiry).subscribe(
        (data:number)=>{
          console.log(data);
          this.statusCode = data;
          this.getAllInquiries();
        },
        (error)=>{
          this.statusCode = error;
        }
      )
    }
  }

  edit(inquiry:Inquiry):void{
    this.inquiry = inquiry;
  }
  delete(idx:number):void{
    if(confirm("Are You sure you want to delete?")){
      this.inquiryService.deleteInquiry(idx).subscribe(
        (status:number)=>{          
          this.statusCode = 204;
          console.log(this.statusCode);
          this.getAllInquiries();
        }
        
      )
    }    
  }
}
