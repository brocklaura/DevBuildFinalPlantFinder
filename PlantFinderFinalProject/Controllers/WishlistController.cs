using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using PlantFinderFinalProject.Models;

namespace PlantFinderFinalProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WishlistController : ControllerBase
    {
        private DAL dal;

        public WishlistController(IConfiguration config)
        {
            dal = new DAL(config.GetConnectionString("default"));
        }

        [HttpGet("{id}")]
        public IEnumerable<JoinedPlant> GetWishlist(int id)
        {
            IEnumerable<JoinedPlant> result = dal.GetWishlist(id);
            return result;
        }

        [HttpPost]
        public int AddToWishlist(int userID, int plantID)
        {
            int result = dal.AddToWishlist(userID, plantID);
            return result;
        }

        [HttpDelete("{id}")]
        public int DeleteWishlist(int id)
        {
            int result = dal.DeleteWishlistByID(id);
            return result;
        }
    }
}