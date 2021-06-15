import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Router } from "@angular/router";
import { AngularFireDatabase } from '@angular/fire/database';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/Product';



@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.component.html',
  styleUrls: ['./kategori.component.css']
})
export class KategoriComponent implements OnInit {

  constructor(public route:ActivatedRoute,public db : AngularFireDatabase,public router:Router,private http:HttpClient) { }
  public kategori:any;
  public urunler:Product[] = [];

  ngOnInit(): void {
   this.kategori = this.route.snapshot.paramMap.get('kategori')
   this.getUrunFindKategoriList(this.kategori).subscribe(data=>{
    this.urunler = data;
   })
    
  }

  onSelect(urunId:number){
    this.router.navigate(['/detay',urunId])
    }
    getUrunFindKategoriList(id:number){
      return this.http.get<Product[]>("http://localhost:50120/api/urunler/GetUrunFindKategoriList/"+id)
    }

}
