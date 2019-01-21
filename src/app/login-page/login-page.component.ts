import { Component, OnInit, ViewChild, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme/components/toastr/toastr.service';
import { AuthenticationService } from '../@service/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  
})
export class LoginPageComponent implements OnInit {

  public formLogin = new FormGroup({
    usernameInput: new FormControl(''),
    passwordInput: new FormControl('')
  })

  constructor(
    private route: Router,
    private toastr: NbToastrService,
    private authService:AuthenticationService
  ) { }

  ngOnInit() {
  }
  onLogin() {
    console.log(this.formLogin.value);
    if (this.formLogin.value.usernameInput === "admin" && this.formLogin.value.passwordInput === "064152") {
      this.authService.setActiveUser(this.formLogin.value);
      this.route.navigate(["pages"])
    }
    else {
      this.toastr.danger("Username or Password incorrect","Error")
    }
  }
}