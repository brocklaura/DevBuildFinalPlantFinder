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
        //this is a comment to test github
        //this is a comment to test my sanity - mike
        private SqlConnection conn;
        public DAL(string connectionString)
        {
            conn = new SqlConnection(connectionString);
        }

        public IEnumerable<Plant> GetAllPlants()
        {
            string queryString = "SELECT * FROM Plants";
            IEnumerable<Plant> plants = conn.Query<Plant>(queryString);
            return plants;
        }

        public Plant GetPlantByID(int id)
        {
            string queryString = "SELECT * FROM Plants WHERE ID= @id";
            Plant singlePlant = conn.QueryFirst<Plant>(queryString, new { id = id });
            return singlePlant;
        }

        //Add an Event
        public int AddPlant(Plant singlePlant)
        {
            string addString = "INSERT INTO Plants (ID, Title, Image, Description) ";
            addString += "VALUES(@ID, @Title, @Image, @Description)";
            return conn.Execute(addString, singlePlant);
        }

        //Delete an Event
        public int DeletePlantByID(int id)
        {
            string deleteString = "DELETE FROM Plants WHERE ID = @id";
            return conn.Execute(deleteString, new { id = id });
        }

        public IEnumerable<JoinedPlant> GetJoined(int id)
        {
            string command = "SELECT * ";
            command += "FROM Plants e JOIN My_Plants f ON e.ID = f.ID WHERE f.UserID=@id";
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
        public int AddToWishlist(Wishlist wishlist)
        {
            string command = "INSERT INTO Wish_List (ID, UserID, PlantID) ";
            command += "VALUES (@ID, @userID, @PlantID)";

            int result = conn.Execute(command, new
            {
                eventID = wishlist.ID,
                userID = wishlist.UserID,
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
            string command = "INSERT INTO My_Plants (ID, Water_Completed) ";
            command += "VALUES (@ID, @Water_Completed)";

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
