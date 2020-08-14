import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { StudentsComponent } from './students/students.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { AboutComponent } from './about/about.component';
import { TopNavComponent } from '../top-nav/top-nav.component';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../service/auth-interceptor.service';
import { AuthGuard } from '../auth/auth.guard';


@NgModule({
  declarations: [
    HomeComponent, 
    StudentsComponent, 
    SubjectsComponent, 
    AboutComponent,
    TopNavComponent,
    SideNavComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    HomeRoutingModule
  ],
  providers: [ 
    AuthGuard,
    // { provide : HTTP_INTERCEPTORS,useClass:AuthInterceptor, multi:true }
  ]
})
export class HomeModule { }
