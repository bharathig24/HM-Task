import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SampleService } from '../service/sample.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  dialogBox:any;

  constructor(public dialogRef: MatDialogRef<ModalComponent>, 
              private route: Router, 
              private sampleService : SampleService) 
              { 
    this.dialogBox = this.sampleService.component;
    console.log(this.dialogBox);
    
  }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

  goToLogin(){
    this.dialogRef.close();  }

}
