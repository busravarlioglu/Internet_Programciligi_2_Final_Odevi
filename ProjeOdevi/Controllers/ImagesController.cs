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
    public class ImagesController : ApiController
    {
        eticaretEntities db = new eticaretEntities();

        public List<ImageModel> GetImages()
        {
            List<ImageModel> images = db.images.Select(x => new ImageModel()
            {
                imgId = x.imgId,
                imgUrl = x.imgUrl
            }).ToList();

            return images;
        }

        public ImageModel GetImageById(int id)
        {
            image image = db.images.Find(id);

            ImageModel imageModel = new ImageModel()
            {
                imgId = image.imgId,
                imgUrl = image.imgUrl
            };
            return imageModel;
        }

        [Authorize]
        public IHttpActionResult PostAddImage(ImageModel _model)
        {
            image image = new image()
            {
                imgUrl = _model.imgUrl
            };

            db.images.Add(image);

            db.SaveChanges();

            return Ok();
        }

        [Authorize]
        public IHttpActionResult GetDeleteImage(int id)
        {
            image image = db.images.Find(id);

            db.images.Remove(image);

            db.SaveChanges();

            return Ok();
        }
    }
}
