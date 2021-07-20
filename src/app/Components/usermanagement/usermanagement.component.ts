import { Component,  OnInit } from "@angular/core";

import { BreadcrumbService } from "../../app.breadcrumb.service";

@Component({
    selector: "app-usermanagement",
    templateUrl: "./usermanagement.component.html",
    styleUrls: ["./usermanagement.component.scss"],
})
export class UsermanagementComponent implements OnInit {
    roleValues = [
        { label: "Admin", value: "Admin" },
        { label: "Customer", value: "Customer" },
    ];
    cols = [];
    values = [
        {
            email: "rgundabathula@miraclesoft.com",
            name: "pawan konidela",
            role: "Admin",
        },
        {
            email: "smeruva@miraclesoft.com",
            name: "SubbaReddy Meruva",
            role: "Admin",
        },
        {
            email: "eric@sterlingsecurityllc.com",
            name: "Eric Williamson",
            role: "Customer",
        },
        {
            email: "anthony@sterlingsecurityllc.com",
            name: "Anthony Tejeda",
            role: "Admin",
        },
    ];
    constructor(private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            { label: "User Management", routerLink: "/root/usermgnt" },
        ]);
    }

    ngOnInit(): void {
        this.cols = [
            { field: "name", header: "Name" },
            { field: "email", header: "Email" },
            { field: "role", header: "Role" },
            { field: "actions", header: "Actions" },
        ];
    }
}
