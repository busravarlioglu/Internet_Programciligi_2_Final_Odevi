using ProjeOdevi.Security;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace ProjeOdevi
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
        
            config.EnableCors();
            
            GlobalConfiguration.Configuration.Formatters.XmlFormatter.SupportedMediaTypes.Clear();
          
            config.MapHttpAttributeRoutes();
            config.MessageHandlers.Add(new APIKeyHandler());
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{action}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
