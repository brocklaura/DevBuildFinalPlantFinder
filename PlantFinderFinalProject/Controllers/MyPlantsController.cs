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
    [Route("api/myplants")]
    [ApiController]
    public class MyPlantsController : ControllerBase
    {
        private DAL dal;

        public MyPlantsController(IConfiguration config)
        {
            dal = new DAL(config.GetConnectionString("default"));
        }

        [HttpGet("{id}")]
        public IEnumerable<JoinedPlant> GetMyPlants(int id)
        {
            IEnumerable<JoinedPlant> result = dal.GetJoined(id);
            return result;
        }

        [HttpPost]
        public int AddToMyPlants(MyPlants myPlants)
        {
            int result = dal.AddToMyPlants(myPlants);
            return result;
        }

        [HttpDelete("{id}")]
        public int DeleteFromMyPlants (int id)
        {
            int result = dal.DeleteFromMyPlants(id);
            return result;
        }
    }
}
