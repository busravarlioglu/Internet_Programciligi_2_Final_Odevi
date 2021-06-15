import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Router } from "@angular/router";
import { AngularFireDatabase } from '@angular/fire/database';
import { Product } from '../models/Product';
import { HttpClient } from '@angular/common/http';
import { KategoriService } from '../services/Kategori.service';
import { Kategori } from '../models/Kategori';


@Component({
  selector: 'app-detay',
  templateUrl: './detay.component.html',
  styleUrls: ['./detay.component.css']
})
export class DetayComponent implements OnInit {

  constructor(public route:ActivatedRoute,public db : AngularFireDatabase,public router:Router, private http:HttpClient, private kategoriService:KategoriService) { }
  urunId:any
  urun:any
  kategoriName:string = ""
  ngOnInit(): void {
    this.urunId = this.route.snapshot.paramMap.get('detay')
    this.GetUrunById(this.urunId).subscribe(data => {
      this.urun = data;
      this.kategoriService.getKategoriById(data.kategoriId).subscribe(data=>{
        this.kategoriName = data.kategoriName
      })
    })
    console.log(this.urun)
  }
  onSelect(urunId:string){
    this.router.navigate(['/satinal',urunId])
  }
  GetUrunById(id:number){
   return this.http.get<Product>("http://localhost:50120/api/urunler/GetUrunByID/"+this.urunId)
  }

}
