import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SampleService } from '../service/sample.service';
import { MustMatch } from '../lib/must-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm;
  constructor(private router: Router, private sampleService: SampleService) {
    this.registerForm = new FormGroup({
      userName: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      eMail: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
        // Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
      ]),
      conPassword: new FormControl('', [
        Validators.required
      ])
    }
    );
    this.registerForm.setValidators(MustMatch("password", "conPassword"));
    localStorage.clear();
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.sampleService.registerReq(this.registerForm.value).subscribe(
        res => {console.log(res);
          if (res['data'] === "true") {
            const userData = [
              {'token': res['token']},
              {'userName': this.registerForm.value.userName}
            ];  
            localStorage.setItem('userData', JSON.stringify(userData));
            this.router.navigate(['/home/students']);
          }
        },
        err => {
            console.log("douplicate entry");
          console.log(err);
        }
      );
    }
  }

}
