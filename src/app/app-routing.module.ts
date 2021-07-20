import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AppMainComponent } from "./app.main.component";
import { AppLoginComponent } from "./Components/loginMain/app.login.component";
import {
    UsermanagementComponent
} from "./Components/usermanagement/usermanagement.component";
import { CollegesComponent } from './Components/colleges/colleges.component';
import { AddcollegesComponent } from './Components/addcolleges/addcolleges.component';
import { EnrolllistComponent } from "./Components/enrolllist/enrolllist.component";

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                { path: "", component: AppLoginComponent },
                // { path: "", component: LoginComponent},
                { path: "login", component: AppLoginComponent },
                {
                    path: "root",
                    component: AppMainComponent,
                    children: [
                        // { path: "sample", component: SampleComponent},
                        {
                            path: "colleges",
                            component: CollegesComponent,
                        },
                        { path: "addColleges", component: AddcollegesComponent },
                        { path: "enrolllist", component: EnrolllistComponent },
                        {
                            path: "usermgnt",
                            component: UsermanagementComponent,
                        },
                    ],
                }, 
                // {path: 'login', component: AppLoginComponent},
                { path: "**", redirectTo: "/notfound" },
            ],
            { scrollPositionRestoration: "enabled" }
        ),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule { }
