import { Injectable } from '@angular/core';
@Injectable()
export class AuthenticationService {

    loggedInUser : string = '';
    isAuthenticated : boolean = false;
    redirectUrl : string = 'home';
    constructor(){

    }

    authenticate(userName: string,password: string):boolean{
        if(userName === 'keyur' && password === 'India'){
            this.isAuthenticated = true;
            this.loggedInUser = userName;
        }
        return this.isAuthenticated;
    }

    isAuthenticate():boolean{
        return this.isAuthenticated;
    } 

    getLoggedInUser():string{
        return this.loggedInUser;
    }

    setReDirectUrl(redirectUrl : string):void{
        this.redirectUrl = redirectUrl;
    }
}