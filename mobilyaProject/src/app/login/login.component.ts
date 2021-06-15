import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import {Router} from '@angular/router'
import { MainPageComponent } from '../main-page/main-page.component';
import { LoginService } from '../services/login.service'
import { IsUser } from '../models/IsUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor(public firebaseService:FirebaseService,public router: Router,public loginService:LoginService){}
  isSignedIn = false;
  ngOnInit(){
    // if(localStorage.getItem('user') !== null){
    //   this.isSignedIn = true;
    // }
    // else{
    //   this.isSignedIn = false;
    // }
  }
  
  async onlogin(userName:string,userPassword:string){
    this.loginService.login(userName,userPassword).subscribe(data =>{
      
      localStorage.setItem('user',JSON.stringify(data))
      this.router.navigate(["/"])
    })
   
  }
}



