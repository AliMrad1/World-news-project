import { Component, OnInit } from '@angular/core';
import { UserAuthStateService } from '../classes/service/user-auth-state.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userAuthState:UserAuthStateService) { }
  state:string = "";
  isLoggedIn:boolean = false;
  token?:string | null;

  ngOnInit(): void {

    this.token = localStorage.getItem('token');
    const decoded_token = this.getDecodedAccessToken(this.token);
    if(this.userAuthState.isLoggedIn == true && this.token != null) {
        this.state = "Logout";
        if(decoded_token.role == "admin" || decoded_token.role == "publisher"){
          this.isLoggedIn = true;
        }
    }else{
      this.state = "Login";
      this.isLoggedIn = false;

    }

  }

  check(){
    if(this.state == "Logout"){
      localStorage.removeItem('token');
      this.state = "Login";
      this.isLoggedIn = false;

    }
  }

  getDecodedAccessToken(token: string | null): any {
    try {
      if(token != null){
        return jwt_decode(token);
      }
    } catch(Error) {
      return null;
    }
  }

}
