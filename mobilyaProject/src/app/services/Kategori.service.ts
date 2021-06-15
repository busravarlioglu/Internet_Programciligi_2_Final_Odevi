import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Kategori } from '../models/Kategori';

@Injectable({
  providedIn: 'root'
})
export class KategoriService {

constructor(private http:HttpClient) { }
  getAllKategori(){
    return this.http.get<Kategori[]>("http://localhost:50120/api/kategoriler/GetKategorisAll")
  }
  getKategoriById(kategoriId:number){
    return this.http.get<Kategori>("http://localhost:50120/api/kategoriler/GetKategoriById/"+kategoriId);
  }
  getKategoriDelete(kategoriId:number,userLogin:any){
    return this.http.get("http://localhost:50120/api/kategoriler/GetKategoriDelete/"+kategoriId+"?apiKey="+userLogin);
  }
  postKategoriAdd(kategori:Kategori,userLogin:any){
    return this.http.post("http://localhost:50120/api/kategoriler/PostKategoriAdd?apiKey="+userLogin,kategori)
  }

}
