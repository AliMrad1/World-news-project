import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthStateService {

  isLoggedIn:boolean = true;
  token:string = "";
  constructor() { }
}
