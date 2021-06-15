import { Component, OnInit, } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage, AngularFireStorageModule, AngularFireUploadTask } from '@angular/fire/storage'
import { FirebaseService } from '../services/firebase.service';
import { Observable } from 'rxjs';
import {Router} from '@angular/router'


@Component({
  selector: 'app-urunler',
  templateUrl: './urunler.component.html',
  styleUrls: ['./urunler.component.css']
})

export class UrunlerComponent implements OnInit {
  urunler:Observable<any[]>
  kategoriler:any
  path:any

  
  
  constructor(public db:AngularFireDatabase,public FirebaseService : FirebaseService,private af:AngularFireStorage,public router:Router ) {
   this.urunler = db.list('urunler').valueChanges();

   
   
  
   }
      
  
   isSignedIn = false
   fileName:any
   url:any
   key :any
   public onSubmitImg(){
    this.fileName = Math.random()+this.path.name;
    this.af.upload("files/"+this.fileName,this.path)
   }
   onSubmit(urunad:string,urunKisa:string,urunfiyat:string,urunkategori:string,token:string){ 
    console.log(urunkategori)
  this.db.list('urunler').push({ 
  name:urunad,
  kisaAciklama:urunKisa,
  fiyat:urunfiyat,
  kategori:urunkategori,
  imgUrl:token,
  Id:"",
  favori:false
  }).orderByKey().on('child_added',(writeHeapSnapshot)=>{
   this.key = writeHeapSnapshot.ref.parent?.key;
   this.db.object("urunler/"+this.key).update({
     Id:this.key
   })
   
  })
  }

  ngOnInit(): void {
    this.FirebaseService.islogin()
    this.kategoriler = this.db.list('kategoriler').valueChanges();
  }
  upload($event:any){
    this.path = $event.target.files[0] 
  }


onDelete(deleteItem:string){
this.db.list('urunler/'+deleteItem).remove()
}
  
onSelect(urunId:string){
  this.router.navigate(['/detay',urunId])
  }

}
