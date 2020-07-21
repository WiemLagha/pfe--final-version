import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {User} from 'src/app/models/user'
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  
  loginUserUrl = "http://localhost:3000/user/login";
  addUserUrl = "http://localhost:3000/user/addUser";
  getAllUrl= "http://localhost:3000/user/usersList";
  deleteUserUrl="http://localhost:3000/user/delete";

  constructor(private http:HttpClient) { }

  loginUser(user: User){
    let dataFromWs= this.http.post <any> (this.loginUserUrl,user);
    return dataFromWs;

  }


  // Create User
  addUser(user:User) {
    let dataFromWs= this.http.post <any> (this.addUserUrl,user);
    return dataFromWs;
  }

  getAllUsers(){
    return this.http.get<any> (this.getAllUrl);
  }

  delete(idUser){
    console.log(idUser);
    return this.http.delete<any> (this.deleteUserUrl+"/"+idUser);
  }

  



}
