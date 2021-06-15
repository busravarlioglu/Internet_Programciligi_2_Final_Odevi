import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/Product';
import {Router} from '@angular/router';
import { LoginService } from '../services/login.service';
import { KategoriService } from '../services/Kategori.service';
import { Kategori } from '../models/Kategori';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private httpClient:HttpClient, private router:Router, public loginService:LoginService,private kategoriService:KategoriService) { }

  loginUser:any = localStorage.getItem('user');
  apiKey:any;
  products:Product[]=[];
  kategoriler:Kategori[] = [];
  ngOnInit(): void {
      this.loginService.islogin()
     this.getProducts().subscribe(data =>{
      this.products = data
     })
     this.kategoriList().subscribe(data =>{
      this.kategoriler = data
     })
     if(localStorage.getItem("user")?.length != 0){
      this.apiKey = JSON.parse(this.loginUser).apiKey
    }
  }
   getProducts(){
    return this.httpClient.get<Product[]>("http://localhost:50120/api/urunler/GetUrunModelsList");
  
  }
  productAdd(urunad:string,urunKısa:string,urunFiyat:string,kategoriVal:string,imgUrl:string){
    this.httpClient.post("http://localhost:50120/api/urunler/PostAddUrun?apiKey="+this.apiKey,{
    urunName:urunad,
    urunAciklama:urunKısa,
    urunFiyat:parseInt(urunFiyat),
    imgUrl:imgUrl,
    kategoriId:parseInt(kategoriVal),
    favori:0
    },{
      observe: "body",
      responseType: 'arraybuffer',
    }).subscribe();
    urunad = "";
    urunKısa = "";
    urunFiyat = "";
    kategoriVal = "";
    imgUrl = "";
    setTimeout(()=>{
      window.location.reload()
    },2000)
  }
   onDelete(urunId:number){
    this.httpClient.get("http://localhost:50120/api/urunler/GetDeleteUrun/"+urunId+"?apiKey="+this.apiKey).subscribe()
    setTimeout(()=>{
      window.location.reload()
    },2000)
  }

  async onSelect(urunId:Number){
    this.router.navigate(['/detay',urunId])
    }
   kategoriList(){
    return this.kategoriService.getAllKategori()
  }  

}
