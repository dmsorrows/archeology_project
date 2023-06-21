using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;

namespace webapi_01
{
    public class Level1
    {
        public int Level1Id { get; set; }
        public string? Level1Name { get; set; }
        public int Level1NamesCount { get; set; }

        public Level1()
        {
        }

        //For Inserting
        public Level1(string level1Name)
        {
            Level1Name = level1Name;
        }

        //For Updating
        public Level1(int level1Id, string level1Name)
        {
            Level1Id = level1Id;
            Level1Name = level1Name;
        }

        public static List<Level1> GetLevel1Names(SqlConnection sqlConnection)
        {
            List<Level1> level1Names = new List<Level1>();

            string sql = "SELECT Level1Id, Level1Name FROM artifacts_db.dbo.Level1;";

            SqlCommand sqlCommand = new SqlCommand(sql, sqlConnection);
            sqlCommand.CommandType = System.Data.CommandType.Text;

            SqlDataReader sqlDataReader = sqlCommand.ExecuteReader();
            
            while (sqlDataReader.Read())
            {
                Level1 level1Name = new Level1();

                level1Name.Level1Id = Convert.ToInt32(sqlDataReader["Level1Id"].ToString());
                level1Name.Level1Name = sqlDataReader["Level1Name"].ToString();

                level1Names.Add(level1Name);
            }

            return level1Names;
        }

        public static List<Level1> GetLevel1NamesForUpdate(SqlConnection sqlConnection)
        {
            List<Level1> level1Names = new List<Level1>();

            string sql = "SELECT Level1Id, Level1Name FROM artifacts_db.dbo.Level1;";

            SqlCommand sqlCommand = new SqlCommand(sql, sqlConnection);
            sqlCommand.CommandType = System.Data.CommandType.Text;

            SqlDataReader sqlDataReader = sqlCommand.ExecuteReader();
            
            while (sqlDataReader.Read())
            {
                Level1 level1Name = new Level1();

                level1Name.Level1Id = Convert.ToInt32(sqlDataReader["Level1Id"].ToString());
                level1Name.Level1Name = sqlDataReader["Level1Name"].ToString();

                level1Names.Add(level1Name);
            }

            return level1Names;
        }
    }
}