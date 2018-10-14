import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Inquiry } from './inquiry.model';
@Injectable()
export class InquiryService {

    appURL : string = "http://localhost:3000/inquiries";

    constructor(private http:Http,private httpClient: HttpClient){        
    }

    getInquiries():Observable<Inquiry[]>{
        return this.http.get(this.appURL)
        .map(this.extractData);
    }

    getInquiriesById(id:number):Observable<Inquiry>{
        return this.httpClient.get<Inquiry>(this.appURL+"/"+id);        
    }

    saveInquirie(inquiry:Inquiry):Observable<number>{
        return this.http.post(this.appURL,inquiry).map((data)=>data.status);
    }

    updateInquirie(inquiry:Inquiry):Observable<Inquiry>{
        return this.httpClient.put<Inquiry>(this.appURL+"/"+inquiry.id,inquiry);
    }

    deleteInquiry(id:number):Observable<number>{
        return this.httpClient.delete<number>(this.appURL+"/"+id);
    }
    extractData(data:Response){
        return data.json();       
    }
}