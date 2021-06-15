import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage, AngularFireStorageModule, AngularFireUploadTask } from '@angular/fire/storage'
import { Observable } from 'rxjs';
import { FirebaseService } from '../services/firebase.service';
import { Router } from "@angular/router";
import { LoginService } from '../services/login.service';
import { KategoriService } from '../services/Kategori.service';
import { Kategori } from '../models/Kategori';
import { timeout } from 'q';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/Product';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  path:any
  kategoriler:Kategori[] = []
  constructor(public loginService:LoginService, private kategoriService:KategoriService, private http:HttpClient, private router:Router) { 
    kategoriService.getAllKategori().subscribe(data => this.kategoriler = data)
   }
   
  loginUser:any = localStorage.getItem('user');
  apiKey:any;
  
  isSignedIn = false
  fileName:any
  url:any
  key:any
  urunler:Product[] = []

  kategori:any
  public onSubmitImg(){
   this.fileName = Math.random()+this.path.name;
   
  }
  onSubmit(kategoriName:string,imgUrl:string){ 
    this.kategori = new Kategori(0,kategoriName,imgUrl)
    this.kategoriService.postKategoriAdd(this.kategori,this.apiKey).subscribe()
    setTimeout(()=>{
      window.location.reload()
    },2000)
 }
  
  ngOnInit(): void {
    this.loginService.islogin()
    this.getProducts().subscribe(data => this.urunler = data)
    if(localStorage.getItem("user")?.length != 0){
      this.apiKey = JSON.parse(this.loginUser).apiKey
    }
    

  }
  upload($event:any){
    this.path = $event.target.files[0] 
  }

  getUpdateProductFavoriRemove(product:Product){
    product.favori = 0;
    this.http.get("http://localhost:50120/api/urunler/GetUpdateUrun/"+product.urunId+"?urunName="+product.urunName+"&urunAciklama="+product.urunAciklama+"&urunFiyat="+product.urunFiyat+"&imgUrl="+product.imgUrl+"&kategoriId="+product.kategoriId+"&favori="+product.favori+"&apiKey="+this.apiKey).subscribe();
    setTimeout(()=>{
      window.location.reload()
    },2000)
  }
onDelete(deleteItem:number){
this.kategoriService.getKategoriDelete(deleteItem,this.apiKey).subscribe()
 setTimeout(()=>{
      window.location.reload()
    },2000)
}
onSelect(kategoriName:string){
this.router.navigate(['/kategoriler',kategoriName])
}
onSelectUrun(urun:number){
  this.router.navigate(['/detay',urun])
}
getProducts(){
  return this.http.get<Product[]>("http://localhost:50120/api/urunler/GetUrunModelsList")
}
favRemove(id:number){
  this.http.get<Product>("http://localhost:50120/api/urunler/GetUrunByID/"+id).subscribe(data => this.getUpdateProductFavoriRemove(data))
  
}
}
