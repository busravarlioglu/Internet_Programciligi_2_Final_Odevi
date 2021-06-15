using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjeOdevi.Models
{
    public class UrunModel
    {
        public int urunId { get; set; }
        public string urunName { get; set; }
        public string urunAciklama { get; set; }
        public Double urunFiyat { get; set; }
        public string imgUrl { get; set; }
        public int kategoriId { get; set; }
        public int favori { get; set; }

    }
}