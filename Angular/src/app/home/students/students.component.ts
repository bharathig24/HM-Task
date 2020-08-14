import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SampleService } from 'src/app/service/sample.service';
import { AddRecordComponent } from 'src/app/dialog_box/add-record/add-record.component';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ModalComponent } from 'src/app/modal/modal.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students:any;
  user;
  // students = [
  //   {
  //     Id : "std1",
  //     Name : "arjun",
  //     Sex : "male",
  //     DOB : "12-11-1999",
  //     Contact : "8465783489"
  //   },
  //   {
  //     Id : "std2",
  //     Name : "arvind",
  //     Sex : "male",
  //     DOB : "20-1-1999",
  //     Contact : "9367239867"
  //   },
  //   {
  //     Id : "std3",
  //     Name : "balaji",
  //     Sex : "male",
  //     DOB : "12-11-1999",
  //     Contact : "8465783489"
  //   },
  //   {
  //     Id : "std4",
  //     Name : "banu",
  //     Sex : "female",
  //     DOB : "12-11-1999",
  //     Contact : "8465783489"
  //   },
  //   {
  //     Id : "std5",
  //     Name : "kavi",
  //     Sex : "female",
  //     DOB : "12-11-1999",
  //     Contact : "8465783489"
  //   },
  //   {
  //     Id : "std6",
  //     Name : "karthi",
  //     Sex : "male",
  //     DOB : "12-11-1999",
  //     Contact : "8465783489"
  //   },
  //   {
  //     Id : "std7",
  //     Name : "siva",
  //     Sex : "male",
  //     DOB : "12-11-1999",
  //     Contact : "8465783489"
  //   }
  // ];
  

  constructor(private route : ActivatedRoute,  
              private sampleService: SampleService,
              private matDialog : MatDialog) { 
    // this.user = this.route.snapshot.params['user'];
    this.sampleService.getStudents().subscribe(
      res => {
        console.log(res);
        // console.log("test");
        
        this.students = res;
        // console.log(res);
        
    },
    err => {
      console.log(err);
      // console.log("error");
      
    });
    // console.log(this.students);
    
  }

  ngOnInit() {
    // console.log(this.route.snapshot.params['Auth']);
  }

  addRecord(){
    // console.log(this.students);
    const test = this.sampleService.dialogComponentSet(AddRecordComponent);
    // console.log(test);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "modal-component";
    // dialogConfig.height = "100px";
    dialogConfig.width = "600px";
    const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);
    
    // this.students = AddRecordComponent;

  }

}
