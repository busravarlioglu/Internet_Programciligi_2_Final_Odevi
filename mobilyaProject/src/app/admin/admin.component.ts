import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoriAll } from '../models/favoriAll';
import { Product } from '../models/Product';
import { SiparisAll } from '../models/siparisAll';
import { KategoriService } from '../services/Kategori.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public loginService:LoginService,private http:HttpClient,private router:Router, private kategoriService:KategoriService) { }

  loginUser:any = localStorage.getItem('user');
  apiKey:any = JSON.parse(this.loginUser).apiKey
  siparisler:SiparisAll[] = []
  urunler:Product[] = []
  favoriler:FavoriAll[] = []
  kategoriName:string =""

  ngOnInit(): void {
   this.getSiparisler().subscribe(data => this.siparisler = data)
   this.getProducts().subscribe(data => this.urunler = data)
  }
  getProducts(){
    return this.http.get<Product[]>("http://localhost:50120/api/urunler/GetUrunModelsList");
  }
  getSiparisler(){
    return this.http.get<SiparisAll[]>("http://localhost:50120/api/siparisler/GetAllSiparisler?apiKey="+this.apiKey)
  }
  siparisDelete(id:number){
    this.http.get("http://localhost:50120/api/siparisler/GetDeleteSiparis/"+id+"?apiKey="+this.apiKey).subscribe()
    setTimeout(()=>{
      window.location.reload()
    },2000)
  }
  getFavories(){
    return this.http.get<FavoriAll[]>("http://localhost:50120/api/favori/GetAllFavoriler")
  }
  getUpdateProductFavoriAdd(product:Product){
    product.favori = 1;
    this.http.get("http://localhost:50120/api/urunler/GetUpdateUrun/"+product.urunId+"?urunName="+product.urunName+"&urunAciklama="+product.urunAciklama+"&urunFiyat="+product.urunFiyat+"&imgUrl="+product.imgUrl+"&kategoriId="+product.kategoriId+"&favori="+product.favori+"&apiKey="+this.apiKey).subscribe();
    
  }

  onSingup(userName:string, eMail:string, password:string){
    this.http.post("http://localhost:50120/api/users/PostAddUser?apiKey="+this.apiKey,{
      userName:userName,
      userEmail:eMail,
      userPassword:password,
      yetki:1,
      apiKey:""
    }).subscribe()
    setTimeout(()=>{
      window.location.reload()
    },2000)
  }
  favAdd(id:number){
    this.http.get<Product>("http://localhost:50120/api/urunler/GetUrunByID/"+id).subscribe(data => this.getUpdateProductFavoriAdd(data))
    setTimeout(()=>{
      window.location.reload()
    },2000)
  }
  getKategoriName(id:number){
    this.kategoriService.getKategoriById(id).subscribe(data => this.kategoriName = data.kategoriName)
    return this.kategoriName
  }
}
