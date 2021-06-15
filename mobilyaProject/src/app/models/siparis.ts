export class Siparis {
     siparisId:any
    urunId:number
    ad:string
    soyad:string
    eMail:string
    telNo:string
    adres:string
    durum:string

    constructor(siparisId:any, urunId:number,ad:string,soyad:string,eMail:string,telNo:string,adres:string,durum:string){
        this.siparisId = siparisId;
        this.urunId = urunId,
        this.ad = ad;
        this.soyad = soyad;
        this.eMail = eMail;
        this.telNo = telNo;
        this.adres = adres;
        this.durum = durum;
    }
}
