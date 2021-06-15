using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Security.Principal;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Web;

namespace ProjeOdevi.Security
{
    public class APIKeyHandler:DelegatingHandler
    {   
        eticaretEntities db = new eticaretEntities();
       
        protected override Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)
        {
 
            var quaryString = request.RequestUri.ParseQueryString();
            var apiKey = quaryString["apiKey"];
            var user = db.users.FirstOrDefault(x => x.apikey == apiKey && x.yetki == 1);
            if (user != null)
            {
                var principal = new ClaimsPrincipal(new GenericIdentity(user.userName, "APIKey"));
                HttpContext.Current.User = principal;
            }
           
           
          
            return base.SendAsync(request, cancellationToken);
        }
    }
}