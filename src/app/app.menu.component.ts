import {
    Component,
    OnInit
} from "@angular/core";

import { AppMainComponent } from "./app.main.component";

@Component({
    selector: "app-menu",
    template: `
        <ul class="layout-menu">
            <li
                app-menuitem
                *ngFor="
                    let item of app.grouped ? modelGrouped : modelUngrouped;
                    let i = index
                "
                [item]="item"
                [index]="i"
                [visible]="true"
                [root]="true"
            ></li>
        </ul>
    `,
})
export class AppMenuComponent implements OnInit {
    modelGrouped: any[];

    modelUngrouped: any[];

    constructor(public app: AppMainComponent) {}

    ngOnInit() {
        (this.modelGrouped = [
            {
                
                        items: [
                            {
                                label: "CRColleges",
                                icon: "pi pi-th-large",
                                routerLink: ["/root/colleges"],
                            },
                            {
                                label: "CRDepartments",
                                icon: "pi pi-users",
                                // routerLink: ["/root/usermgnt"],
                            },
                            {
                                label: "CRContacts",
                                icon: "pi pi-th-large",
                                // routerLink: ["/root/customer"],
                            },
                            {
                                label: "CRActivities",
                                icon: "pi pi-users",
                                // routerLink: ["/root/usermgnt"],
                            },
                            {
                                label: "CRRecruitmentDrives",
                                icon: "pi pi-th-large",
                                // routerLink: ["/root/customer"],
                            },
                            {
                                label: "CREnablementSessions",
                                icon: "pi pi-users",
                                // routerLink: ["/root/usermgnt"],
                            },
                            {
                                label: "CRITGPrograms",
                                icon: "pi pi-th-large",
                                // routerLink: ["/root/customer"],
                            },
                            {
                                label: "ResetPassword",
                                icon: "pi pi-users",
                                // routerLink: ["/root/usermgnt"],
                            },
                            {
                                label: "SetPassword",
                                icon: "pi pi-th-large",
                                // routerLink: ["/root/customer"],
                            },
                            {
                                label: "CRRoles",
                                icon: "pi pi-users",
                                // routerLink: ["/root/usermgnt"],
                            },
                          
                        ],
            },
        ]),
            (this.modelUngrouped = [
                {
                    label: "Main Menu",
                    icon: "pi pi-fw pi-home",
                    items: this.modelGrouped,
                },
            ]);
    }
}
