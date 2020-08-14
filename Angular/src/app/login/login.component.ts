import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { SampleService } from '../service/sample.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm;

  constructor(
    private router : Router,
    private sampleService : SampleService
  ) {  
    this.loginForm = new FormGroup({
    userName : new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required])
  });

  localStorage.clear();
}

  ngOnInit() {
   
  }

  login(){
    // console.log(this.loginForm.value);
    this.sampleService.loginReq(this.loginForm.value).subscribe(res=>{
      console.log(res);
      // console.log("true");
      if(res['data'] === "true"){
        // console.log("true");
        // localStorage.setItem('token', res['token']);
        const userData = [
          {'token': res['token']},
          {'userName': this.loginForm.value.userName}
        ];  
        localStorage.setItem('userData', JSON.stringify(userData));
        // console.log(JSON.parse(localStorage.getItem("userData")));
        
        this.router.navigate(['/home/students']);
        // console.log("working");
        
      }
    },err=>{
      console.log(err);
    });
    
    // this.router.navigate(['/home']);
  }

}
