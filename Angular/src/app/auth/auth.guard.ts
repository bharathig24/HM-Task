import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SampleService } from '../service/sample.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private service: SampleService, private route: Router){}
  canActivate(){
    if(this.service.loggedIn()){
      // console.log("can active pass");
      
      return true;
    }else{
      this.route.navigate(['/login']);
      console.log(this.service.loggedIn());
      
      // console.log("can active fail");
      return false;
    }
  }
  
}
