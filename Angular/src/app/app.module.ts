import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ModalComponent } from './modal/modal.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './service/auth-interceptor.service';
import { SessionExpireComponent } from './dialog_box/session-expire/session-expire.component';
import { AddRecordComponent } from './dialog_box/add-record/add-record.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ModalComponent,
    AddRecordComponent,
    SessionExpireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [
    AuthGuard,
    { provide : HTTP_INTERCEPTORS,useClass:AuthInterceptor, multi:true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent, AddRecordComponent, SessionExpireComponent]
})
export class AppModule { }
