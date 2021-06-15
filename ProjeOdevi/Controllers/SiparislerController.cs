using ProjeOdevi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace ProjeOdevi.Controllers
{
    [EnableCors("*","*","*")]
    public class SiparislerController : ApiController
    {
        eticaretEntities db = new eticaretEntities();

        [Authorize]
        public List<SiparisModel> GetSiparisler()
        {
            List<SiparisModel> siparisler = db.siparislers.Select(x => new SiparisModel()
            {
                siparisId = x.siparisId,
                urunId = x.urunId,
                ad = x.ad,
                soyad = x.soyad,
                eMail = x.eMail,
                telNo = x.telNo,
                durum = x.durum,
                adres = x.adres
            }).ToList();
            return siparisler;
        }

        [Authorize]
        public List<SiparisAllModel> GetAllSiparisler()
        {
            List<SiparisAllModel> siparisler = db.siparislers.Select(x => new SiparisAllModel()
            {
                siparisId = x.siparisId,
                urunId = x.urunId,
                kategoriId = x.urunler.kategoriId,
                ad = x.ad,
                soyad = x.soyad,
                eMail = x.eMail,
                telNo = x.telNo,
                durum = x.durum,
                adres = x.adres,
                urunName = x.urunler.urunName,
                urunFiyat = x.urunler.urunFiyat,
                urunAciklama = x.urunler.urunAciklama,
                urunImgUrl = x.urunler.imgUrl,
                kategoriName = x.urunler.kategoriler.kategoriName,
            }).ToList();
            return siparisler;
        }

        public IHttpActionResult PostAddSiparis(SiparisModel _model)
        {
            siparisler siparis = new siparisler()
            {
                urunId = _model.urunId,
                ad = _model.ad,
                soyad = _model.soyad,
                eMail = _model.eMail,
                telNo = _model.telNo,
                adres = _model.adres,
                durum = _model.durum
            };
            db.siparislers.Add(siparis);
            db.SaveChanges();
            return Ok();
        }
        public SiparisAllModel GetSiparisByID(int id)
        {
            siparisler siparis = db.siparislers.Find(id);
            SiparisAllModel siparisModel = new SiparisAllModel();

            siparisModel.siparisId = siparis.siparisId;
            siparisModel.urunId = siparis.urunId;
            siparisModel.kategoriId = siparis.urunler.kategoriId;
            siparisModel.ad = siparis.ad;
            siparisModel.soyad = siparis.soyad;
            siparisModel.eMail = siparis.eMail;
            siparisModel.telNo = siparis.telNo;
            siparisModel.durum = siparis.durum;
            siparisModel.adres = siparis.adres;
            siparisModel.urunName = siparis.urunler.urunName;
            siparisModel.urunFiyat = siparis.urunler.urunFiyat;
            siparisModel.urunAciklama = siparis.urunler.urunAciklama;
            siparisModel.urunImgUrl = siparis.urunler.imgUrl;
            siparisModel.kategoriName = siparis.urunler.kategoriler.kategoriName;


            return siparisModel;

        }
        [Authorize]
        public IHttpActionResult PostUpdateSiparis(SiparisModel _model)
        {
            siparisler siparis = db.siparislers.Find(_model.siparisId);

            siparis.urunId = _model.urunId;
            siparis.adres = _model.adres;
            siparis.durum = _model.durum;
            siparis.ad = _model.ad;
            siparis.soyad = _model.soyad;
            siparis.eMail = _model.eMail;
            siparis.telNo = _model.telNo;

            db.SaveChanges();

            return Ok();
        }
        [Authorize]
        public IHttpActionResult GetDeleteSiparis(int id)
        {
            siparisler siparis = db.siparislers.Find(id);
            db.siparislers.Remove(siparis);
            db.SaveChanges();
            return Ok();
        }
    }
}
