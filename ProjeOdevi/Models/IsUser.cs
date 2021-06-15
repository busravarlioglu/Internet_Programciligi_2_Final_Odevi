using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjeOdevi.Models
{
    public class IsUser
    {
        public bool isUser { get; set; }
        public string apiKey { get; set; }
        public string message { get; set; }

        public IsUser(bool isUser, string apiKey, string message)
        {
            this.isUser = isUser;
            this.apiKey = apiKey;
            this.message = message;
        }
    }
}