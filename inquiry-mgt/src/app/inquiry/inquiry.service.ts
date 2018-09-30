import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Inquiry } from './inquiry.model';
@Injectable()
export class InquiryService {

    appURL : string = "http://localhost:3000/inquiries";

    constructor(public http:Http){        
    }

    getInquiries():Observable<Response>{
        return this.http.get(this.appURL);
    }
    saveInquirie(inquiry:Inquiry):Observable<Response>{
        return this.http.post(this.appURL,inquiry);
    }
}