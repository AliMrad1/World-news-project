import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, pipe } from 'rxjs';
import { Role } from '../Models/Role';
import { UserRequest } from '../Models/User';
import { UserRequestSignIn } from '../Models/UserRequestSignIn';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apisUrlLocal:string = environment.apiLocalBaseUrl;

  constructor(private httpClient:HttpClient) { }

  public getRoles(): Observable<Role[]> {
    return this.httpClient.get<Role[]>(`${this.apisUrlLocal}/roles`,{});
  }

  public signup(body:UserRequest): Observable<any> {
    return this.httpClient.post<UserRequest>(`${this.apisUrlLocal}/signup`, body, { observe: 'response' }).pipe();
  }

  public signin(body:UserRequestSignIn): Observable<any> {
    return this.httpClient.post<UserRequestSignIn>(`${this.apisUrlLocal}/signin`, body, { observe: 'response' }).pipe();
  }
}
