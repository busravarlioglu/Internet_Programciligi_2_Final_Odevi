using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjeOdevi.Models
{
    public class FavoriAllModel:FavoriModel
    {
        public string urunName { get; set; }
        public double urunFiyat { get; set; }
        public int kategoriId { get; set; }
        public string urunImgUrl { get; set; }
        public string kategoriName { get; set; }
        public string urunAciklama { get; set; }
    }
}