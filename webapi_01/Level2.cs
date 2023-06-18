using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;

namespace webapi_01
{
    public class Level2
    {
        public int Level2Id { get; set; }
        public string? Level2Name { get; set; }
        public int Level2NamesCount { get; set; }

        public Level2()
        {
        }

        //For Inserting
        public Level2(string level2Name)
        {
            Level2Name = level2Name;
        }

        //For Updating
        public Level2(int level2Id, string level2Name)
        {
            Level2Id = level2Id;
            Level2Name = level2Name;
        }

        public static List<Level2> GetLevel2Names(SqlConnection sqlConnection)
        {
            List<Level2> level2Names = new List<Level2>();

            string sql = "SELECT Level2Id, Level2Name FROM artifacts_db.dbo.Level2;";

            SqlCommand sqlCommand = new SqlCommand(sql, sqlConnection);
            sqlCommand.CommandType = System.Data.CommandType.Text;

            SqlDataReader sqlDataReader = sqlCommand.ExecuteReader();
            
            while (sqlDataReader.Read())
            {
                Level2 level2Name = new Level2();

                level2Name.Level2Id = Convert.ToInt32(sqlDataReader["Level2Id"].ToString());
                level2Name.Level2Name = sqlDataReader["Level2Name"].ToString();

                level2Names.Add(level2Name);
            }

            return level2Names;
        }
    }
}