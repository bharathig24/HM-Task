import { Component, OnInit } from '@angular/core';
import { SampleService } from 'src/app/service/sample.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ModalComponent } from 'src/app/modal/modal.component';
import { SessionExpireComponent } from 'src/app/dialog_box/session-expire/session-expire.component';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  constructor(private sampleService : SampleService, private matDialog : MatDialog) {
    this.sampleService.test({name: "bharathi"}).subscribe(res=>{
      console.log(res);
      // console.log("true");
      if(res['data'] === "true"){
        // console.log("true");
        // localStorage.setItem('token', res['token']);
        console.log("verified");
        
        // this.router.navigate(['/home/students',{Auth: res['token']}]);
      }
    },err=>{
      // console.log("error");
      console.log(err);
      console.log(err.error);
      const test = this.sampleService.dialogComponentSet(SessionExpireComponent);
      const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "modal-component";
    dialogConfig.height = "100px";
    dialogConfig.width = "600px";
    const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);
      
    });
    
   }

  ngOnInit() {
  }

}
