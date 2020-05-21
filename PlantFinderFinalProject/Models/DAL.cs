using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using NUnit.Framework.Internal.Execution;

namespace PlantFinderFinalProject.Models
{
    public class DAL
    {
        private SqlConnection conn;
        public DAL(string connectionString)
        {
            conn = new SqlConnection(connectionString);
        }

        //Queries the database for all plants
        public IEnumerable<Plant> GetAllPlants()
        {
            string queryString = "SELECT * FROM Plants";
            IEnumerable<Plant> plants = conn.Query<Plant>(queryString);
            return plants;
        }

        //Queries the database for a plant based off of its ID
        public Plant GetPlantByID(int id)
        {
            string queryString = "SELECT * FROM Plants WHERE ID= @id";
            Plant singlePlant = conn.QueryFirst<Plant>(queryString, new { id = id });
            return singlePlant;
        }

        //Adds a Plant object to the database
        public int AddPlant(Plant singlePlant)
        {
            string addString = "INSERT INTO Plants (ID, Title, Image, Description) ";
            addString += "VALUES(@ID, @Title, @Image, @Description)";
            return conn.Execute(addString, singlePlant);
        }

        //Deletes a Plant object from the database
        public int DeletePlantByID(int id)
        {
            string deleteString = "DELETE FROM Plants WHERE ID = @id";
            return conn.Execute(deleteString, new { id = id });
        }

        public IEnumerable<JoinedPlant> GetJoined(int id)
        {
            string command = "SELECT * FROM Plants e JOIN My_Plants f ON e.ID = f.ID WHERE f.ID=@id";
            IEnumerable<JoinedPlant> result = conn.Query<JoinedPlant>(command, new { id = id });
            return result;
        }

        public IEnumerable<JoinedPlant> GetWishlist(int id)
        {
            string command = "SELECT * ";
            command += "FROM Plants e JOIN Wish_List f ON e.ID = f.ID WHERE f.UserID=@id";
            IEnumerable<JoinedPlant> result = conn.Query<JoinedPlant>(command, new { id = id });
            return result;
        }

        //Add to favorites
        public int AddToWishlist(int userID, int plantID)
        {
            string command = "INSERT INTO Wish_List (UserID, PlantID) ";
            command += "VALUES (@UserID, @PlantID)";


            int result = conn.Execute(command, new
            {
                UserID = userID,
                PlantID = plantID
            });
            return result;
        }
            //Delete from favorites
            public int DeleteWishlistByID(int id)
        {
            string deleteString = "DELETE FROM Wish_List WHERE ID = @id";
            return conn.Execute(deleteString, new { id = id });
        }

        public int AddToMyPlants(MyPlants myPlants)
        {
            string command = "INSERT INTO My_Plants (ID, PlantID, Water_Completed) ";
            command += "VALUES (@ID, @PlantID, @Water_Completed)";

            int result = conn.Execute(command, new
            {
                eventID = myPlants.ID,
                userID = myPlants.UserID,
            });
            return result;
        }

        public int DeleteFromMyPlants(int id)
        {
            string deleteString = "DELETE FROM My_Plants WHERE ID = @id";
            return conn.Execute(deleteString, new { id = id });
        }


    }
}
