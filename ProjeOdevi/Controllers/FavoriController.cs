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
    public class FavoriController : ApiController
    {
        eticaretEntities db = new eticaretEntities();

        public List<FavoriModel> GetFavoriler()
        {
            List<FavoriModel> favoriModels = db.favorilers.Select(x => new FavoriModel()
            {
                favoriId = x.favoriId,
                urunId = x.favoriId
            }).ToList();

            return favoriModels;
        }

        public List<FavoriAllModel> GetAllFavoriler()
        {
            List<FavoriAllModel> favoriModels = db.favorilers.Select(x => new FavoriAllModel()
            {
                favoriId = x.favoriId,
                urunId = x.favoriId,
                kategoriId = x.urunler.kategoriId,
                urunName = x.urunler.urunName,
                urunFiyat = x.urunler.urunFiyat,
                urunImgUrl = x.urunler.imgUrl,
                urunAciklama = x.urunler.urunAciklama,
                kategoriName = x.urunler.kategoriler.kategoriName
            }).ToList();

            return favoriModels;
        }

        public FavoriAllModel GetFavoriByID(int id)
        {
            favoriler favori = db.favorilers.Find(id);
            FavoriAllModel favoriModel = new FavoriAllModel();

            favoriModel.favoriId = favori.favoriId;
            favoriModel.urunId = favori.urunId;
            favoriModel.kategoriId = favori.urunler.kategoriId;
            favoriModel.kategoriName = favori.urunler.kategoriler.kategoriName;
            favoriModel.urunName = favori.urunler.urunName;
            favoriModel.urunFiyat = favori.urunler.urunFiyat;
            favoriModel.urunImgUrl = favori.urunler.imgUrl;
            favoriModel.urunAciklama = favori.urunler.urunAciklama;
            
            return favoriModel;

        }

        [Authorize]
        public IHttpActionResult GetAddFavori(int id)
        {
            favoriler favori = new favoriler()
            {
                urunId = id
            };
            db.favorilers.Add(favori);

            db.SaveChanges();

            return Ok();
        }

        [Authorize]
        public IHttpActionResult GetDeleteFavori(int id)
        {
            favoriler favori = db.favorilers.Find(id);
            db.favorilers.Remove(favori);

            db.SaveChanges();

            return Ok();
        }
    }
}
