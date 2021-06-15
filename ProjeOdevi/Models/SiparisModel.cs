using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjeOdevi.Models
{
    public class SiparisModel
    {
        public int siparisId { get; set; }
        public int urunId { get; set; }
        public string ad { get; set; }
        public string soyad { get; set; }
        public string eMail { get; set; }
        public string telNo { get; set; }
        public string adres { get; set; }
        public string durum { get; set; }
      
    }
}