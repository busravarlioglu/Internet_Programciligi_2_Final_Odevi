import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {AngularFireDatabase} from '@angular/fire/database';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Siparis } from '../models/siparis';

@Component({
  selector: 'app-satinal',
  templateUrl: './satinal.component.html',
  styleUrls: ['./satinal.component.css']
})
export class SatinalComponent implements OnInit {

  constructor(public route:ActivatedRoute,public db : AngularFireDatabase,public router:Router, private http:HttpClient) { }
  urunId:any
  urunler:any
  ngOnInit(): void {
    this.urunId = this.route.snapshot.paramMap.get('urun')
  }
  onSubmit(email:string,cepTel:string,ad:string,soyad:string,adres:string,urunId:string){
   this.http.post("http://localhost:50120/api/Siparisler/PostAddSiparis",{
    urunId:urunId,
    ad:ad,
    soyad:soyad,
    eMail:email,
    telNo:cepTel,
    adres:adres,
    durum:"bekleniyor"
    },{
      
      observe: "body",
      responseType: 'arraybuffer',
      
    }).subscribe();
  this.router.navigate(['/'])
  }
}
