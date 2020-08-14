import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpInterceptor } from '@angular/common/http';

import { environment as env } from '../../environments/environment';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';


@Injectable({
  providedIn: 'root'
})
export class SampleService {
  component:any;

  constructor(
    private http : HttpClient
  ) { }

  // getPing(){
  //   return this.http.get(env.baseurl);
  // }

  registerReq(data){
    return this.http.post('http://localhost:3000/register', data);
  }

  loginReq(data){
    // console.log(data);
    
    return this.http.post('http://localhost:3000/login', data);
  }

  getStudents(){
    return this.http.get('http://localhost:3000/getStudentsData');
  }

  addRecord(data){
    return this.http.post('http://localhost:3000/addStudentsData', data);
  }

  test(data){
    return this.http.post('http://localhost:3000/home/subjects', data);
  }

  loggedIn(): boolean{
    var userData = JSON.parse(localStorage.getItem("userData"));
    console.log(!localStorage.getItem(userData[0].token));
    
    return !!userData[0].token;
  }

  getToken(){
    // console.log("get token working");
    
    var userData = JSON.parse(localStorage.getItem("userData"));
    console.log(userData[0].token);
    return userData[0].token;
    // return localStorage.getItem('token');
  }

  dialogComponentSet(currentComponent){
    return this.component = currentComponent;
  }
  
}
        