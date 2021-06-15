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

        [Authorize]
        public IHttpActionResult GetUpdateKategori(int id, string kategoriName, string imgUrl)
        {
            kategoriler kategori = db.kategorilers.Find(id);

            kategori.kategoriName = kategoriName;
            kategori.imgUrl = imgUrl;

            db.SaveChanges();

            return Ok();
        }
       
        [Authorize]
        public IHttpActionResult GetKategoriDelete(int id)
        {
            kategoriler kategori = db.kategorilers.Find(id);
            db.kategorilers.Remove(kategori);
            db.SaveChanges();
            return Ok();
        }
       
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
