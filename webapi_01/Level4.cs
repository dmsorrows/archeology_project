using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;

namespace webapi_01
{
    public class Level4
    {
        public int Level4Id { get; set; }
        public string? Level4Name { get; set; }
        public int Level4NamesCount { get; set; }

        public Level4()
        {
        }

        //For Inserting
        public Level4(string level4Name)
        {
            Level4Name = level4Name;
        }

        //For Updating
        public Level4(int level4Id, string level4Name)
        {
            Level4Id = level4Id;
            Level4Name = level4Name;
        }

        public static List<Level4> GetLevel4Names(SqlConnection sqlConnection)
        {
            List<Level4> level4Names = new List<Level4>();

            string sql = "SELECT Level4Id, Level4Name FROM artifacts_db.dbo.Level4;";

            SqlCommand sqlCommand = new SqlCommand(sql, sqlConnection);
            sqlCommand.CommandType = System.Data.CommandType.Text;

            SqlDataReader sqlDataReader = sqlCommand.ExecuteReader();
            
            while (sqlDataReader.Read())
            {
                Level4 level4Name = new Level4();

                level4Name.Level4Id = Convert.ToInt32(sqlDataReader["Level4Id"].ToString());
                level4Name.Level4Name = sqlDataReader["Level4Name"].ToString();

                level4Names.Add(level4Name);
            }

            return level4Names;
        }

        public static List<Level4> GetLevel4NamesForUpdate(SqlConnection sqlConnection)
        {
            List<Level4> level4Names = new List<Level4>();

            string sql = "SELECT Level4Id, Level4Name FROM artifacts_db.dbo.Level4;";

            SqlCommand sqlCommand = new SqlCommand(sql, sqlConnection);
            sqlCommand.CommandType = System.Data.CommandType.Text;

            SqlDataReader sqlDataReader = sqlCommand.ExecuteReader();
            
            while (sqlDataReader.Read())
            {
                Level4 level4Name = new Level4();

                level4Name.Level4Id = Convert.ToInt32(sqlDataReader["Level4Id"].ToString());
                level4Name.Level4Name = sqlDataReader["Level4Name"].ToString();

                level4Names.Add(level4Name);
            }

            return level4Names;
        }
    }
}