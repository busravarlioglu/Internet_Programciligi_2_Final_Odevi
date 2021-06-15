import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../services/firebase.service';
import { Router } from "@angular/router";
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
 
 
  
  
  constructor(public FirebaseService : FirebaseService, public router: Router, public loginService:LoginService) { }
   

   kategoriler:any
   ngOnInit(){
     this.loginService.islogin()
   
   }
   loginOut(){
     localStorage.removeItem('user')
     this.loginService.isSignedIn = false
   }

}
