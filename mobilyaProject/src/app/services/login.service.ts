import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { IsUser } from '../models/IsUser';
// import { IsUser } from '../models/IsUser';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  getHeaders(){
    return new HttpHeaders({
      "Content-Type": "application/json"
    })
  }

constructor(private httpClient:HttpClient) { }
  isLoggenIn = false
  isSignedIn = false
  public async islogin(){
    if(localStorage.getItem('user') !== null){
     this.isSignedIn = true;
    }
    else{
     this.isSignedIn = false;
    }
}
  login(userName:string,userPassword:string){
   return this.isUser(userName, userPassword);
  }
  isUser(userName:string,userPassword:string){
    return this.httpClient.post<IsUser>("http://localhost:50120/api/users/PostIsUser?userName="+userName+"&userPassword="+userPassword,{userName,userPassword},{
      headers:this.getHeaders()
    });
  }
}
