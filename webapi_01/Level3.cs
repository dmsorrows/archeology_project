using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;


namespace webapi_01
{
    public class Level3
    {
        public int Level3Id { get; set; }
        public string? Level3Name { get; set; }
        public int Level3NamesCount { get; set; }

        public Level3()
        {
        }

        //For Inserting
        public Level3(string level3Name)
        {
            Level3Name = level3Name;
        }

        //For Updating
        public Level3(int level3Id, string level3Name)
        {
            Level3Id = level3Id;
            Level3Name = level3Name;
        }

        public static List<Level3> GetLevel3Names(SqlConnection sqlConnection)
        {
            List<Level3> level3Names = new List<Level3>();

            string sql = "SELECT Level3Id, Level3Name FROM artifacts_db.dbo.Level3;";

            SqlCommand sqlCommand = new SqlCommand(sql, sqlConnection);
            sqlCommand.CommandType = System.Data.CommandType.Text;

            SqlDataReader sqlDataReader = sqlCommand.ExecuteReader();
            
            while (sqlDataReader.Read())
            {
                Level3 level3Name = new Level3();

                level3Name.Level3Id = Convert.ToInt32(sqlDataReader["Level3Id"].ToString());
                level3Name.Level3Name = sqlDataReader["Level3Name"].ToString();

                level3Names.Add(level3Name);
            }

            return level3Names;
        }

        public static List<Level3> GetLevel3NamesForUpdate(SqlConnection sqlConnection)
        {
            List<Level3> level3Names = new List<Level3>();

            string sql = "SELECT Level3Id, Level3Name FROM artifacts_db.dbo.Level3;";

            SqlCommand sqlCommand = new SqlCommand(sql, sqlConnection);
            sqlCommand.CommandType = System.Data.CommandType.Text;

            SqlDataReader sqlDataReader = sqlCommand.ExecuteReader();
            
            while (sqlDataReader.Read())
            {
                Level3 level3Name = new Level3();

                level3Name.Level3Id = Convert.ToInt32(sqlDataReader["Level3Id"].ToString());
                level3Name.Level3Name = sqlDataReader["Level3Name"].ToString();

                level3Names.Add(level3Name);
            }

            return level3Names;
        }
    }
}