// import { Component } from "@angular/core";

// @Component({
//   selector: "app-login",
//   templateUrl: "./app.login.component.html",
// })
// export class AppLoginComponent {

// }



import { MessageService } from 'primeng/api';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { NodesService } from 'src/app/services/nodesService/nodes.service';

@Component({
  selector: 'app-login',
  templateUrl: "./app.login.component.html",
  styleUrls: ['./app.login.component.scss'],
  providers: [MessageService]
})
export class AppLoginComponent implements OnInit {
  form: FormGroup;
  loginData: any;
  year = new Date().getFullYear()
  // variable declaration
  hide: boolean = true;
  showIcon: boolean;
  hideIcon = true;
  loading = false;
  @HostListener('window:keydown', ['$event'])
  keyboardInput(event: any) { if (event.key === 'Enter') { this.login(); } }
  constructor(private fb: FormBuilder, public router: Router, private messageService: MessageService) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  getUrl() {
    return 'url(\'assets/layout/images/pages/bg-login.jpg\')';
  }

  login() {
    console.log(this.form.value);
    // const userName = 'admin'
    // const password = 'admin'
    if (this.form.get('email').value === 'admin' && this.form.get('password').value === 'admin') {
      localStorage.setItem('loginId', 'true');
      this.router.navigateByUrl('root');
    } else {
      this.messageService.add({ summary: 'Error Message', detail: 'Enter Valid Credentials to login', life: 20000 });
    }
    // this.nodeService.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value).subscribe((res: any) => {
    //   this.loginData = res;
    //   if (this.loginData.authResponse === 'ValidCredentials') {
    //     // this.router.navigate(['admin/home']);
    //     localStorage.setItem('loginId', 'true');
    //     this.router.navigateByUrl('root');
    //     // sessionStorage.setItem('authResponse', this.loginData.authResponse);
    //     // sessionStorage.setItem('contactId', this.loginData.userData.contactId);
    //     // sessionStorage.setItem('logindata', this.loginData.userData);
    //     // sessionStorage.setItem('loginId', this.loginData.userData.loginId);
    //     // sessionStorage.setItem('firstName', this.loginData.userData.fnme);
    //     // sessionStorage.setItem('lastName', this.loginData.userData.lnme);
    //     // sessionStorage.setItem('role', this.loginData.userData.role);
    //     // sessionStorage.setItem('contactType', this.loginData.userData.contactType);

    //     sessionStorage.setItem('jwtToken', this.loginData.jwt_token);
    //     // if (this.loginData.userData.role === 'Support-ReadOnly') {
    //     // this.access = 'true';
    //     // sessionStorage.setItem('access', this.access);
    //     // } else {
    //     // this.access = 'false';
    //     // sessionStorage.setItem('access', this.access);
    //     // }
    //     // sessionStorage.setItem('regionCode', this.loginData.userData.regionCode);
    //     // sessionStorage.setItem('countryCode', this.loginData.userData.countryCode);
    //     // sessionStorage.setItem('countryName', this.loginData.userData.countryName);
    //     // sessionStorage.setItem('regionName', this.loginData.userData.regionName);
    //   } else if (this.loginForm.value.email === '' && this.loginForm.value.password === '') {
    //     this.messageService.add({ summary: 'Error Message', detail: 'Please Enter Credentials', life: 20000 });
    //   } else if (this.loginForm.value.email === '') {
    //     this.messageService.add({ summary: 'Error Message', detail: 'Please Enter User Id', life: 20000 });
    //   } else if (this.loginForm.value.password === '') {
    //     this.messageService.add({ summary: 'Error Message', detail: 'Please Enter password', life: 20000 });
    //   } else {
    //     this.messageService.add({ summary: 'Error Message', detail: 'Enter Valid Credentials to login', life: 20000 });
    //   }
    // }, (err) => {
    //   // this.loading = false;
    //   // this.dataSource = '';
    //   // tslint:disable-next-line: one-variable-per-declaration
    //   const err1 = `Sorry Something Went Wrong ! \n Please Try Later !`;
    //   this.messageService.add({ summary: 'Error Message', detail: err1, life: 30000 });
    // }
    // );



  }
  myFunction() {
    this.hide = !this.hide;
    this.hideIcon = false;
    this.showIcon = true;
  }
  myFunction1() {
    this.hide = !this.hide;
    this.hideIcon = true;
    this.showIcon = false;
  }
}

