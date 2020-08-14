import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SampleService } from 'src/app/service/sample.service';
import { MatDialogRef } from '@angular/material';
import { ModalComponent } from 'src/app/modal/modal.component';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent implements OnInit {
  addRecordForm;

  constructor(private sampleService: SampleService,
              public dialogRef: MatDialogRef<ModalComponent>) {
    this.addRecordForm = new FormGroup({
      studentName : new FormControl('',[Validators.required]),
      sex : new FormControl('', [Validators.required]),
      dob : new FormControl('',[Validators.required]),
      mobile : new FormControl('',[Validators.required, Validators.pattern("[0-9]{10}")])
    });
  }

  ngOnInit() {
  }

  onSubmit(){
    if (this.addRecordForm.valid){
      console.log(this.addRecordForm.value);
      
      this.sampleService.addRecord(this.addRecordForm.value).subscribe(
        res => {
          console.log(res);
          this.dialogRef.close();
        },
        err => {
          console.log(err);
          
        })
    }
  }

}
