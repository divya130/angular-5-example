import {CanActivate, Router} from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()

export class AlwaysAuthGuard implements CanActivate {
    constructor(private router: Router){}
    canActivate() {
     const loginstatus =  localStorage.getItem('loginStatus');
        if (loginstatus!== undefined && loginstatus!==null && loginstatus!==''){
            return true;
        }
        this.router.navigate(['/login'])
      return false;
    }
  }