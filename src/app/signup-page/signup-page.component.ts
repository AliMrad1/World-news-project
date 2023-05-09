import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Role } from '../classes/Models/Role';
import { AuthService } from '../classes/service/auth.service';
import { UserRequest } from '../classes/Models/User';

@Component({
  selector: 'signup',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupComponent implements OnInit {

  public signUpForm!: FormGroup;
  roles:Role[] = [];
  message:string= "";
  isOk:boolean = false;
  isSuccess?: boolean;
  isError?: boolean;

  userdata:UserRequest =  new UserRequest();
  role:Role = new Role();


  constructor(private formBuilder: FormBuilder, private authService:AuthService, private router: Router) { }

  ngOnInit(): void {

    this.getRoles();

    this.signUpForm = this.formBuilder.group({
      fullname: [""],
      dateofbirth: [""],
      email: [""],
      password: [""],
      role: this.formBuilder.group({
        id : 3
      })
    });

  }


  signUp(){
 
    this.userdata.fullname = this.signUpForm.get("fullname")?.value;
    this.userdata.dateOfBirth = this.signUpForm.get("dateofbirth")?.value;
    this.userdata.email = this.signUpForm.get("email")?.value;
    this.userdata.password = this.signUpForm.get("password")?.value;
    const role_id = this.signUpForm.get("role.id")?.value ?? 0;
  
    this.userdata.role = { id: role_id , role_name:""};

    console.log(this.userdata.role);
    this.authService.signup(this.userdata).subscribe((res:any) => {
    
      if(res.status == '200')
      {
        this.isOk = true;
        this.message = "Registration successfully!";
        this.isSuccess = true;
        this.isError = false;
        this.signUpForm.reset();
      }

    
    },(err:any)=>{

        this.isOk = true;
        this.message = "Registration Failed, Please Try Again!";
        this.isSuccess = false;
        this.isError = true;
        this.signUpForm.reset();
    })

  }

  public getRoles(){
    this.authService.getRoles().subscribe((res) => {
      this.roles = res;
    });
  }

}
