import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { BreadcrumbService } from 'src/app/app.breadcrumb.service';

@Component({
  selector: 'app-enrolllist',
  templateUrl: './enrolllist.component.html',
  styleUrls: ['./enrolllist.component.scss'],
  providers: [ConfirmationService]
})
export class EnrolllistComponent implements OnInit {
  cols = [
    { field: "name", header: "Name" },
    { field: "contactNo", header: "Contact No." },
    { field: "department", header: "Department" },
    { field: "actions", header: "Actions" },
];
collegeForm=this.fb.group({
  name: [''],
  contactno :[''],
  dept: [''],

 })
 tableData=[
   {
     name: "Chaitanya",
     contactNo: "9943944988",
     department: "Computer Science and Engineering"
   },
   {
    name: "Lavanya",
    contactNo: "8943944988",
    department: "Computer Science and Engineering"
  },
  {
    name: "Chaitanya",
    contactNo: "7943944988",
    department: "Computer Science and Engineering"
  }
 ]
 deptValues =[
  { label: "Computer Science and Engineering", value: "CSE" },
  { label: "Electronics Communication and Engineering", value: "ECE" },
  { label: "Civil Engineering", value: "Civil" },
  { label: "Mechanical Engineering", value: "Mech" },
  { label: "Electrical and Electronics Engineering", value: "EEE" },
]
  constructor(private breadcrumbService: BreadcrumbService,private confirmationService: ConfirmationService,private fb:FormBuilder) {
    this.breadcrumbService.setItems([
      { label: "Colleges", routerLink: "/root/colleges" },
      { label: "Enroll List", routerLink: "/root/enrolllist" },
  ]);
   }

  ngOnInit(): void {
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
}
