export class Product {
    urunId:number;
    urunName:string;
    urunAciklama:string;
    urunFiyat:number;
    imgUrl:string;
    kategoriId:number;
    favori:number;

    constructor(urunId:number,urunName:string,urunAciklama:string,urunFiyat:number,imgUrl:string,kategoriId:number,favori:number){
        this.urunId = urunId;
        this.urunName = urunName;
        this.urunAciklama = urunAciklama;
        this.urunFiyat = urunFiyat;
        this.imgUrl = imgUrl;
        this.kategoriId = kategoriId;
        this.favori = favori;
    }
}
