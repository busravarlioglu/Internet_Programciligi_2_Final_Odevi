import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { FirebaseService } from '../services/firebase.service';
import { Router } from "@angular/router";
import { KategoriService } from '../services/Kategori.service';
import { Kategori } from '../models/Kategori';

@Component({
  selector: 'app-kategoriler',
  templateUrl: './kategoriler.component.html',
  styleUrls: ['./kategoriler.component.css']
})
export class KategorilerComponent implements OnInit {

  constructor(public db: AngularFireDatabase, public router: Router, public FirebaseService: FirebaseService, private kategoriService: KategoriService) { }
  kategoriler: Kategori[] = [];
  public userLogin: any;

  ngOnInit(): void {
    this.userLogin = localStorage.getItem("user")
    this.kategoriService.getAllKategori().subscribe((data) => {
      this.kategoriler = data
    })

  }
  onSelect(kategoriId: number) {
    this.router.navigate(['/kategoriler', kategoriId])
  }
  onDelete(deleteItem: number) {
    this.kategoriService.getKategoriDelete(deleteItem,this.userLogin);
  }
}
