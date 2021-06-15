using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data.Sql;
using System.Data.SqlClient;
using ProjeOdevi.Models;
using System.Data.Entity.Infrastructure;
using System.Web.Http.Cors;

namespace ProjeOdevi.Controllers
{
    [EnableCors("*","*","*")]
    public class UrunlerController : ApiController
    {
     
        eticaretEntities db = new eticaretEntities();

         
        public List<UrunModel> GetUrunModelsList()
        {
           
            List<UrunModel> urunList = db.urunlers.Select(x => new UrunModel() {
                urunId = x.urunId,
                urunName = x.urunName,
                urunFiyat = x.urunFiyat,
                imgUrl = x.imgUrl,
                urunAciklama = x.urunAciklama,
                kategoriId =  x.kategoriId,
                favori = x.favori
                
            }).ToList();
            return urunList;    
        }

        
        public List<UrunModel> GetUrunFindKategoriList(int id)
        {
            List<UrunModel> urunler = db.urunlers.Where(x => id == x.kategoriId).Select(x => new UrunModel()
            {
                urunId = x.urunId,
                urunName = x.urunName,
                urunFiyat = x.urunFiyat,
                imgUrl = x.imgUrl,
                urunAciklama = x.urunAciklama,
                kategoriId = x.kategoriId,
                 favori = x.favori
            }).ToList();
            return urunler;
        }

        public UrunModel GetUrunByID(int id)
        {
            urunler urun = db.urunlers.Find(id);
            UrunModel urunModel = new UrunModel();

            urunModel.urunId = urun.urunId;
            urunModel.urunName = urun.urunName;
            urunModel.urunFiyat = urun.urunFiyat;
            urunModel.imgUrl = urun.imgUrl;
            urunModel.urunAciklama = urun.urunAciklama;
            urunModel.kategoriId = urun.kategoriId;
            urunModel.favori = urun.favori;
            return urunModel;

        }

        [Authorize]
        public IHttpActionResult PostAddUrun(UrunModel _model)
        {
            urunler urun = new urunler()
            {
                urunName = _model.urunName,
                urunAciklama = _model.urunAciklama,
                urunFiyat = _model.urunFiyat,
                imgUrl = _model.imgUrl,
                kategoriId = _model.kategoriId,
                favori = _model.favori
            };
            db.urunlers.Add(urun);
            db.SaveChanges();
            return Ok();
        }

        [Authorize]
        public IHttpActionResult GetUpdateUrun(int id, string urunName, string urunAciklama, double urunFiyat, string imgUrl, int kategoriId, int favori)
        {
            urunler urun = db.urunlers.Find(id);

            urun.urunName = urunName;
            urun.urunAciklama = urunAciklama;
            urun.urunFiyat = urunFiyat;
            urun.imgUrl = imgUrl;
            urun.kategoriId = kategoriId;
            urun.favori = favori;

            db.SaveChanges();

            
            return Ok(); 
        }

        [Authorize]
        public IHttpActionResult GetDeleteUrun(int id)
        {
            urunler urun = db.urunlers.Find(id);
            db.urunlers.Remove(urun);

            db.SaveChanges();

            return Ok();
        }

    }
}
