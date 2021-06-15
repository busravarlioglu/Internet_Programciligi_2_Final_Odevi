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
    public class KategorilerController : ApiController
    {
        eticaretEntities db = new eticaretEntities();

        //tüm kategorileri listlemek için bir KategoriModel listesi oluşturup bunu veri 
        //tabanından gelen bilgilerle eşleştirip geri döndürüyoruz(return)

        public List<KategoriModel> GetKategorisAll()
        {
            List<KategoriModel> kategoris = db.kategorilers.Select(x => new KategoriModel()
            {
                kategoriId = x.kategoriId,
                kategoriName = x.kategoriName,
                imgUrl = x.imgUrl
            }).ToList();
            return kategoris;
        }

        //get methıdu ile aldımız id sahesinde o id ye ayit kategoriyi geri döndürüyoruz.
        public  KategoriModel GetKategoriById(int id)
        {
            kategoriler kategori = db.kategorilers.Find(id);

            KategoriModel kategoriModel = new KategoriModel()
            {
                kategoriId = kategori.kategoriId,
                kategoriName = kategori.kategoriName,
                imgUrl = kategori.imgUrl
            };
            return kategoriModel;
        }

        //kategori update işlemi: get methodu sahesinde parametrelerden gelen bilgileri veritabanındaki biliglerle değiştiriliyor.
        [Authorize]
        public IHttpActionResult GetUpdateKategori(int id, string kategoriName, string imgUrl)
        {
            kategoriler kategori = db.kategorilers.Find(id);

            kategori.kategoriName = kategoriName;
            kategori.imgUrl = imgUrl;

            db.SaveChanges();

            return Ok();
        }
        /*kategori silmek için get methodundan gelen id den yararlanarak kategori nesnesine databesden gelen 
            kategoriyi yakalayıp kategori silme fonksiyonuna yazıyoruz
        */
        [Authorize]
        public IHttpActionResult GetKategoriDelete(int id)
        {
            kategoriler kategori = db.kategorilers.Find(id);
            db.kategorilers.Remove(kategori);
            db.SaveChanges();
            return Ok();
        }
        //kategori eklemek için post dan gelen bilgileri alıp kategoriler class ına yükleyip onuda database e ekleme kodu.
        [Authorize]
        public IHttpActionResult PostKategoriAdd(KategoriModel _model)
        {
            kategoriler kategori = new kategoriler()
            {
                kategoriName = _model.kategoriName,
                imgUrl = _model.imgUrl
            };
            db.kategorilers.Add(kategori);
            db.SaveChanges();
            return Ok();
        }
    }
}
