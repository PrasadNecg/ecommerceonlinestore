import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/app.breadcrumb.service';
import { FormBuilder } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-colleges',
  templateUrl: './colleges.component.html',
  styleUrls: ['./colleges.component.scss'],
  providers: [ConfirmationService]
})
export class CollegesComponent implements OnInit {

  collegeForm : any
  countryValues = [
    // { label: "Active", value: "Active" },
    // { label: "Inactive", value: "Inactive" },
];
deptValues =[
  { label: "Computer Science and Engineering", value: "CSE" },
  { label: "Electronics Communication and Engineering", value: "ECE" },
  { label: "Civil Engineering", value: "Civil" },
  { label: "Mechanical Engineering", value: "Mech" },
  { label: "Electrical and Electronics Engineering", value: "EEE" },
]
stateValues =[]
cols = [];
values = [
    {
      collegename: "Miracle Software Educational Institute",
      contactNo:"9842451543",
      country:"Vizag",
      state:"India",
    },
    {
      collegename: "Vignan",
      contactNo:"9845651543",
      country:"Vizag",
      state:"India",
    },
    {
      collegename: "GVP",
      contactNo:"9812581543",
      country:"Vizag",
      state:"India",
    },
   
];
  enrollDialog: boolean =false;
  enrollForm: any;
constructor(private breadcrumbService: BreadcrumbService, private router: Router, private confirmationService: ConfirmationService, private fb:FormBuilder) {
    this.breadcrumbService.setItems([
        { label: "Colleges", routerLink: "/root/colleges" },
    ]);
}

ngOnInit(): void {
    this.cols = [
        { field: "collegename", header: "College Name" },
        { field: "contactNo", header: "Contact No." },
        { field: "country", header: "Country" },
        { field: "state", header: "State" },
        { field: "actions", header: "Actions" },
    ];
    this.collegeForm=this.fb.group({
      Colname: [''],
      country :[''],
      state: [''],
   
     })
     this.enrollForm=this.fb.group({
      Sname: [''],
      dept :[''],
      contactNo: [''],
   
     })
}
enroll(){
  this.enrollDialog = true;
}
CancelEnroll(){
  this.enrollDialog = false
}
confirm2() {
  this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      // accept: () => {
      //     this.msgs = [{severity:'info', summary:'Confirmed', detail:'Record deleted'}];
      // },
      // reject: () => {
      //     this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
      // }
  });
}
gotoEnrollList(){
  this.router.navigateByUrl('/root/enrolllist')
}
}