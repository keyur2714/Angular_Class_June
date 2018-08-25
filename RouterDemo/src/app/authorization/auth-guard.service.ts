import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';
@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private authenticationService: AuthenticationService){        
        console.log("Hi...");
    }

    canActivate(activatedRouteSnashot: ActivatedRouteSnapshot,routerStateSnapshot:RouterStateSnapshot):boolean{
        console.log(activatedRouteSnashot.url);
        if(this.authenticationService.isAuthenticate()){
            return true;
        }
        console.log("==="+routerStateSnapshot.url);
        this.authenticationService.setReDirectUrl(routerStateSnapshot.url);   
        return false;
    }

}