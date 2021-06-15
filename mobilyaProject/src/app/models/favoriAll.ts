import { Favori } from "./favori"

export class FavoriAll extends Favori{
    urunName:string
    urunFiyat:number
    kategoriId:number
    urunImgUrl:string
    kategoriName:string
    urunAciklama:string

    constructor(favoriId:number, urunId:number, urunName:string, urunFiyat:number, kategoriId:number, urunImgUrl:string, kategoriName:string, urunAciklama:string){
        super(favoriId,urunId)
        this.urunName = urunName
        this.urunFiyat = urunFiyat
        this.kategoriId = kategoriId
        this.urunImgUrl = urunImgUrl
        this.kategoriName = kategoriName
        this.urunAciklama = urunAciklama
    }
}
