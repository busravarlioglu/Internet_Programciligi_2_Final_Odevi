import { Siparis } from "./siparis";

export class SiparisAll extends Siparis{

    urunName:string
    urunFiyat:number
    kategoriId:string
    urunImgUrl:string
    kategoriName:string
    urunAciklama:string
    userName:string
    userEmail:string

    
    constructor(siparisId:any, urunId:number,ad:string,soyad:string,eMail:string,telNo:string,adres:string,durum:string,urunName:string, urunFiyat:number,kategoriId:string,urunImgUrl:string,kategoriName:string,urunAciklama:string,userName:string,userEmail:string){
        super(siparisId,urunId,ad,soyad,eMail,telNo,adres,durum);
        this.urunName = urunName;
        this.urunFiyat = urunFiyat,
        this.kategoriId = kategoriId;
        this.urunImgUrl = urunImgUrl;
        this.kategoriName = kategoriName;
        this.urunAciklama = urunAciklama;
        this.userName = userName;
        this.userEmail = userEmail;
    }
}
