import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { SampleService } from './sample.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  constructor(private service: SampleService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log(req);
    // console.log(next);
    // console.log("interceptor");
    
    let authReq;
    
    try{
      var token = this.service.getToken();
      authReq = req.clone({ setHeaders: {Authorization: `Bearer ${token}` }});
    }catch(e){
      authReq = req.clone({ setHeaders: {Authorization: "Bearer" }});
    }
      
      return next.handle(authReq);
  }
}
