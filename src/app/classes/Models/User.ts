import { Role } from "./Role";

export class UserRequest
 {
    id:number = 0;
    fullname:string = "";
    dateOfBirth: string = "";
    email:string = "";
    password:string = "";
    role:Role = new Role();
}

export class UserResponse 
{
    id:number = 0;
    fullname:string = "";
    age: number = 0;
    email:string = "";
    role:Role = new Role();
}