using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;

namespace webapi_01
{
    public class Provenience
    {
        public int ProvenienceId { get; set; }
        public string? ProjectNumber { get; set; }
        public string? SiteNumber { get; set; }
        public string? AccessionNumber { get; set; }
        public int FieldSerialNumber { get; set; }
        public int UnitNumber { get; set; }
        public string? Depth { get; set; }
        public DateTime? ExcavationDate { get; set; }

        public Provenience()
        {
        }

        //For Inserting
        public Provenience(string projectNumber, string siteNumber, string accessionNumber, int fieldSerialNumber, int unitNumber, string depth, DateTime? excavationDate)
        {
            ProjectNumber = projectNumber;
            SiteNumber = siteNumber;
            AccessionNumber = accessionNumber;
            FieldSerialNumber = fieldSerialNumber;
            UnitNumber = unitNumber;
            Depth = depth;
            ExcavationDate = excavationDate;  
        }

        //For Updating
        public Provenience(int provenienceId, string projectNumber, string siteNumber, string accessionNumber, int fieldSerialNumber, int unitNumber, string depth, DateTime? excavationDate)
        {
            ProvenienceId = provenienceId;
            ProjectNumber = projectNumber;
            SiteNumber = siteNumber;
            AccessionNumber = accessionNumber;
            FieldSerialNumber = fieldSerialNumber;
            UnitNumber = unitNumber;
            Depth = depth;
            ExcavationDate = excavationDate;  
        }

        public static List<Provenience> GetProvenienceData(SqlConnection sqlConnection)
        {
            List<Provenience> provenienceData = new List<Provenience>();

            string sql = "SELECT ProvenienceId, ProjectNumber, SiteNumber, AccessionNumber, FieldSerialNumber, UnitNumber, Depth, ExcavationDate FROM artifacts_db.dbo.Provenience;";

            SqlCommand sqlCommand = new SqlCommand(sql, sqlConnection);
            sqlCommand.CommandType = System.Data.CommandType.Text;

            SqlDataReader sqlDataReader = sqlCommand.ExecuteReader();
            
            while (sqlDataReader.Read())
            {
                Provenience provenienceDatum = new Provenience();

                provenienceDatum.ProvenienceId = Convert.ToInt32(sqlDataReader["ProvenienceId"].ToString());
                provenienceDatum.ProjectNumber = sqlDataReader["ProjectNumber"].ToString();
                provenienceDatum.SiteNumber = sqlDataReader["SiteNumber"].ToString();
                provenienceDatum.AccessionNumber = sqlDataReader["AccessionNumber"].ToString();
                provenienceDatum.FieldSerialNumber = Convert.ToInt32(sqlDataReader["FieldSerialNumber"].ToString());
                provenienceDatum.UnitNumber = Convert.ToInt32(sqlDataReader["UnitNumber"].ToString());
                provenienceDatum.Depth = sqlDataReader["Depth"].ToString();
                provenienceDatum.ExcavationDate = Convert.ToDateTime(sqlDataReader["ExcavationDate"].ToString());

                provenienceData.Add(provenienceDatum);
            }

            return provenienceData;
        }

        public static List<Provenience> GetProvenienceDataForUpdate(SqlConnection sqlConnection)
        {
            List<Provenience> provenienceData = new List<Provenience>();

            string sql = "SELECT ProvenienceId, ProjectNumber, SiteNumber, AccessionNumber, FieldSerialNumber, UnitNumber, Depth, ExcavationDate FROM artifacts_db.dbo.Provenience;";

            SqlCommand sqlCommand = new SqlCommand(sql, sqlConnection);
            sqlCommand.CommandType = System.Data.CommandType.Text;

            SqlDataReader sqlDataReader = sqlCommand.ExecuteReader();
            
            while (sqlDataReader.Read())
            {
                Provenience provenienceDatum = new Provenience();

                provenienceDatum.ProvenienceId = Convert.ToInt32(sqlDataReader["ProvenienceId"].ToString());
                provenienceDatum.ProjectNumber = sqlDataReader["ProjectNumber"].ToString();
                provenienceDatum.SiteNumber = sqlDataReader["SiteNumber"].ToString();
                provenienceDatum.AccessionNumber = sqlDataReader["AccessionNumber"].ToString();
                provenienceDatum.FieldSerialNumber = Convert.ToInt32(sqlDataReader["FieldSerialNumber"].ToString());
                provenienceDatum.UnitNumber = Convert.ToInt32(sqlDataReader["UnitNumber"].ToString());
                provenienceDatum.Depth = sqlDataReader["Depth"].ToString();
                provenienceDatum.ExcavationDate = Convert.ToDateTime(sqlDataReader["ExcavationDate"].ToString());

                provenienceData.Add(provenienceDatum);
            }

            return provenienceData;
        }
    }
}