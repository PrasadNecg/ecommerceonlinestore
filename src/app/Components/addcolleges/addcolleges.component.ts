import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'src/app/app.breadcrumb.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-addcolleges',
  templateUrl: './addcolleges.component.html',
  styleUrls: ['./addcolleges.component.scss']
})
export class AddcollegesComponent implements OnInit {

  deptValues =[
    { label: "Computer Science and Engineering", value: "CSE" },
    { label: "Electronics Communication and Engineering", value: "ECE" },
    { label: "Civil Engineering", value: "Civil" },
    { label: "Mechanical Engineering", value: "Mech" },
    { label: "Electrical and Electronics Engineering", value: "EEE" },
  ]
  addCollegeForm : any
 
  constructor(private breadcrumbService: BreadcrumbService, private fb:FormBuilder) {
      this.breadcrumbService.setItems([
          { label: "Colleges", routerLink: "/root/colleges" },
          { label: "Add Colleges", routerLink: "/root/addColleges" },
      ]);
  }
  
  ngOnInit(): void {
  
      this.addCollegeForm=this.fb.group({
        Colname: [''],
        ContactNo: [''],
        dept: [''],
      
       })
  }
}
