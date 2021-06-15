import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggenIn = false
  isSignedIn = false
  constructor(public firebaseAuth:AngularFireAuth) { }
  async islogin(){
    if(localStorage.getItem('user') !== null){
      this.isSignedIn = true;
    }
    else{
      this.isSignedIn = false;
    }
  }
  async signin(email:string,password:string){
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggenIn = true
     
      localStorage.setItem('user',JSON.stringify(res.user))
      this.islogin()
    }).catch(res=>{
      console.log(res)
    })

  }
  async signup(email:string,password:string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggenIn = true
      
      localStorage.setItem('user',JSON.stringify(res.user))
      this.islogin()
    }).catch(res=>{
      console.log(res)
    })
  }
  logout(){
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')
    this.isLoggenIn = false
    this.islogin()
  }
}

