import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../classes/service/auth.service';
import { UserRequestSignIn } from '../classes/Models/UserRequestSignIn';
import { UserAuthStateService } from '../classes/service/user-auth-state.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup
  userLogin:UserRequestSignIn  = new UserRequestSignIn();

  constructor(private formbuilder: FormBuilder,
    private authService:AuthService,
    private router: Router,
    private userAuthState:UserAuthStateService) { }
    response_msg:string = "";
    email_resp:string = "";
    password_resp:string = "";
    loading: boolean = false;

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: ['',Validators.required],
      password: ['', Validators.required]
    })
  }

  login(){

    this.userLogin.email = this.loginForm.get("email")?.value;
    this.userLogin.password = this.loginForm.get("password")?.value;

    this.authService.signin(this.userLogin).subscribe(
      (res) => {
        this.loading = true;
        const token = res.body.token;
        if(token == null){
            setTimeout(() => {
              this.response_msg = "login failed, try again!";
              this.loading = false;  
            }, 3000);
        }
        else{
          this.response_msg = "login successfully, please wait!";

          setTimeout(() => {
            this.userAuthState.token = token;
            localStorage.setItem('token', token);
            this.router.navigate(["/"]);
            this.userAuthState.isLoggedIn = true;
            this.loading = false;  
          }, 3000);


        }
      },
      (errors: HttpErrorResponse) => {
        if(errors.error.errors.email[0] != null){
            this.email_resp = errors.error.errors.email[0];
            this.loginForm.get('email')?.setErrors({ 'error_email' : this.email_resp });

        }
        if(errors.error.errors.password[0] != null){
            this.password_resp = errors.error.errors.password[0];
            this.loginForm.get('password')?.setErrors({ 'error_pass' : this.password_resp });

        }

        else{
          this.response_msg = "Login Failed, Please try again!!";
        }
      }

    );
  }

 
}
