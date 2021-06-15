using ProjeOdevi.Models;
using ProjeOdevi.Security;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace ProjeOdevi.Controllers
{
    [EnableCors("*", "*", "*")]
    public class UsersController : ApiController
    {
        eticaretEntities db = new eticaretEntities();

        public List<UserModel> GetUserList()
        {
            
            List<UserModel> users = db.users.Select(x => new UserModel()
            {
                userId = x.userId,
                userName = x.userName,
                userEmail = x.userEmail,
                userPassword = x.userPassword,
                yetki = x.yetki,
                apiKey = x.apikey
            }).ToList();
            return users;
        }

        public UserModel GetUserByID(int id)
        {
            user user = db.users.Find(id);
            UserModel userModel = new UserModel();
            userModel.userId = user.userId;
            userModel.userName = user.userName;
            userModel.userEmail = user.userEmail;
            userModel.userPassword = user.userPassword;
            userModel.yetki = user.yetki;
            userModel.apiKey = user.apikey;

            return userModel;

        }
        public IsUser PostIsUser(string userName, string userPassword)
        {
            try
            {
                UserModel userFind = null;
               List<UserModel> userList = db.users.Select(x => new UserModel()
                {
                   userId = x.userId,
                   userName = x.userName,
                   userEmail = x.userEmail,
                   userPassword = x.userPassword,
                   yetki = x.yetki,
                   apiKey = x.apikey
               }).ToList();
               if(userList.Count != 0)
                {
                    foreach (var item in userList)
                    {
                        if (item.userName == userName && item.userPassword == userPassword)
                        {
                            userFind = item;
                        }

                       
                    }
                   
                }
                return new IsUser(true, userFind.apiKey, null);
            }
            catch
            {
                return new IsUser(false, null, "hatlı giriş");
            }
        }
        [Authorize]
        public IHttpActionResult PostAddUser(UserModel _model)
        {
            ApiKey api = new ApiKey();
            string apiKey = api.Encrypt(_model.userId+_model.userName);
            user user = new user()
            {
                userName = _model.userName,
                userEmail = _model.userEmail,
                userPassword = _model.userPassword,
                yetki = _model.yetki,
                apikey = apiKey
            };
            db.users.Add(user);
            db.SaveChanges();
            return Ok();
        }
        [Authorize]
        public IHttpActionResult GetUpdateUser(int id, string userName, string userEmail, string userPassword, int yetki)
        {
            user user = db.users.Find(id);

            user.userName = userName;
            user.userEmail = userEmail;
            user.userPassword = userPassword;
            user.yetki = yetki;
      

            db.SaveChanges();


            return Ok();
        }
        [Authorize]
        public IHttpActionResult GetDeleteUser(int id)
        {
            user user = db.users.Find(id);
            db.users.Remove(user);

            db.SaveChanges();

            return Ok();
        }
    }
}
