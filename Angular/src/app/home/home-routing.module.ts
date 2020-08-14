import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { StudentsComponent } from './students/students.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [{
      path: 'students',
      component: StudentsComponent,
      canActivate: [AuthGuard],
    },
    {
      path: 'subjects',
      component: SubjectsComponent,
      canActivate: [AuthGuard],
    },
    {
      path: 'about',
      component: AboutComponent,
      canActivate: [AuthGuard],
    },
    {
      path: '**',
      redirectTo: 'students',
      pathMatch: 'full'
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
