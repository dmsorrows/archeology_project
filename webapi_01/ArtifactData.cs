using System;
using System.Collections.Generic;
using System.Data.SqlClient;

namespace webapi_01
{
    public class ArtifactData
    {
        public int ArtifactId { get; set; }
        public string? PeriodName { get; set; }
        public int Level1Id { get; set; }
        public int Level2Id { get; set; }
        public int Level3Id { get; set; }
        public int Level4Id { get; set; }
        public string? AdditionalDescription { get; set; }
        public int ArtifactCount { get; set; }
        public decimal ArtifactWeight { get; set; }
        public string? LabTechInitials { get; set; }
        public DateTime? DateAnalyzed { get; set; }
        public int ProvenienceId { get; set; }
        

        public ArtifactData()
        {
        }
        //Excludes auto-incremented values
        public ArtifactData(string periodName, int level1Id, int level2Id, int level3Id, int level4Id, string additionalDescription, int artifactCount, decimal artifactWeight, string labTechInitials)
        {
            PeriodName = periodName;
            Level1Id = level1Id;
            Level2Id = level2Id;
            Level3Id = level3Id;
            Level4Id = level4Id;
            AdditionalDescription = additionalDescription;
            ArtifactCount = artifactCount;
            ArtifactWeight = artifactWeight;
            LabTechInitials = labTechInitials;
        }
        //Includes auto-incremented values
        public ArtifactData(int artifactId, string periodName, int level1Id, int level2Id, int level3Id, int level4Id, string additionalDescription, int artifactCount, decimal artifactWeight, string labTechInitials, DateTime dateAnalyzed, int provenienceId)
        {
            ArtifactId = artifactId;
            PeriodName = periodName;
            Level1Id = level1Id;
            Level2Id = level2Id;
            Level3Id = level3Id;
            Level4Id = level4Id;
            AdditionalDescription = additionalDescription;
            ArtifactCount = artifactCount;
            ArtifactWeight = artifactWeight;
            LabTechInitials = labTechInitials;
            DateAnalyzed = dateAnalyzed;
            ProvenienceId = provenienceId;
        }

        // public static List<ArtifactData> GetArtifacts(SqlConnection sqlConnection)
        // {
        //     List<ArtifactData> artifacts = new List<ArtifactData>();

        //     string sql = "select ArtifactId, PeriodName, Level1Id, Level2Id, Level3Id, Level4Id, AdditionalDescription, ArtifactCount, ArtifactWeight, DateAnalyzed, ProvenienceId from ArtifactData;";
        //     SqlCommand sqlCommand = new SqlCommand(sql, sqlConnection);
        //     sqlCommand.CommandType = System.Data.CommandType.Text;
        //     SqlDataReader sqlDataReader = sqlCommand.ExecuteReader();
        //     while (sqlDataReader.Read())
        //     {
        //         ArtifactData artifact = new ArtifactData();

        //         artifact.ArtifactId = Convert.ToInt32(sqlDataReader["ArtifactId"].ToString());
        //         artifact.PeriodName = sqlDataReader["PeriodName"].ToString();
        //         artifact.Level1Id = Convert.ToInt32(sqlDataReader["Level1Id"].ToString());
        //         artifact.Level2Id = Convert.ToInt32(sqlDataReader["Level2Id"].ToString());
        //         artifact.Level3Id = Convert.ToInt32(sqlDataReader["Level3Id"].ToString());
        //         artifact.Level4Id = Convert.ToInt32(sqlDataReader["Level4Id"].ToString());
        //         artifact.AdditionalDescription = sqlDataReader["AdditionalDescription"].ToString();
        //         artifact.ArtifactCount = Convert.ToInt32(sqlDataReader["ArtifactCount"].ToString());
        //         artifact.ArtifactWeight = Convert.ToDecimal(sqlDataReader["ArtifactWeight"].ToString());
        //         artifact.LabTechInitials = sqlDataReader["LabTechInitials"].ToString();
        //         artifact.DateAnalyzed = Convert.ToDateTime(sqlDataReader["DateAnalyzed"].ToString()); 
        //         artifact.ProvenienceId = Convert.ToInt32(sqlDataReader["ProvenienceId"].ToString());

        //         artifacts.Add(artifact);
        //     }

        //     return artifacts;
        // }


        public static List<ArtifactData> SearchArtifacts(SqlConnection sqlConnection, string search = "", int pageSize = 10, int pageNumber = 1)
        {
            List<ArtifactData> artifacts = new List<ArtifactData>();

            string sql = "SELECT a.ArtifactId, p.ProjectNumber, p.SiteNumber, p.AccessionNumber, p.FieldSerialNumber, p.UnitNumber, p.Depth, p.ExcavationDate, aa.PeriodName, l1.Level1Name, l2.Level2Name, l3.Level3Name, l4.Level4Name, aa.AdditionalDescription, aa.ArtifactCount, aa.ArtifactWeight, aa.LabTechInitials, aa.DateAnalyzed, a.[Count] FROM (SELECT ArtifactId, count(*) over () AS [Count] FROM ArtifactData WHERE PeriodName LIKE '%' + @Search + '%' or AdditionalDescription LIKE '%' + @Search + '%' ORDER BY ArtifactId offset @PageSize * (@PageNumber - 1) rows fetch next @PageSize rows only) AS a INNER JOIN ArtifactData AS aa ON aa.ArtifactId = a.ArtifactId INNER JOIN Provenience AS p ON aa.ProvenienceId = p.ProvenienceId INNER JOIN Level1 AS l1 ON aa.Level1Id = l1.Level1Id INNER JOIN Level2 AS l2 ON aa.Level2Id = l2.Level2Id INNER JOIN Level3 AS l3 ON aa.Level3Id = l3.Level3Id LEFT OUTER JOIN Level4 AS l4 ON aa.Level4Id = l4.Level4Id ORDER BY p.FieldSerialNumber, aa.PeriodName, l1.Level1Name, l2.Level2Name, l3.Level3Name, l4.Level4Name;";
            // string sql = "select p.ArtifactId, a.PeriodName, a.Level1Id, a.Level2Id, a.Level3Id, a.Level4Id, a.AdditionalDescription, a.ArtifactCount, a.ArtifactWeight, a.LabTechInitials, a.DateAnalyzed, a.ProvenienceId, p.[Count] from (select ArtifactId, count(*) over () AS [Count] from ArtifactData where PeriodName like '%' + @Search + '%' or AdditionalDescription like '%' + @Search + '%' order by ArtifactId offset @PageSize * (@PageNumber - 1) rows fetch next @PageSize rows only) p join ArtifactData a on p.ArtifactId = a.ArtifactId order by 1;";

            SqlCommand sqlCommand = new SqlCommand(sql, sqlConnection);
            sqlCommand.CommandType = System.Data.CommandType.Text;

            SqlParameter paramSearch = new SqlParameter("@Search", search);
            SqlParameter paramPageSize = new SqlParameter("@PageSize", pageSize);
            SqlParameter paramPageNumber = new SqlParameter("@PageNumber", pageNumber);

            paramSearch.DbType = System.Data.DbType.String;
            paramPageSize.DbType = System.Data.DbType.Int32;
            paramPageNumber.DbType = System.Data.DbType.Int32;

            sqlCommand.Parameters.Add(paramSearch);
            sqlCommand.Parameters.Add(paramPageSize);
            sqlCommand.Parameters.Add(paramPageNumber);

            SqlDataReader sqlDataReader = sqlCommand.ExecuteReader();
            
            while (sqlDataReader.Read())
            {
                ArtifactData artifact = new ArtifactData();

                artifact.ArtifactId = Convert.ToInt32(sqlDataReader["ArtifactId"].ToString());
                artifact.PeriodName = sqlDataReader["PeriodName"].ToString();
                artifact.Level1Id = Convert.ToInt32(sqlDataReader["Level1Id"].ToString());
                artifact.Level2Id = Convert.ToInt32(sqlDataReader["Level2Id"].ToString());
                artifact.Level3Id = Convert.ToInt32(sqlDataReader["Level3Id"].ToString());
                artifact.Level4Id = Convert.ToInt32(sqlDataReader["Level4Id"].ToString() == "" ? "1" : sqlDataReader["Level4Id"].ToString()); //conditional operator
                artifact.AdditionalDescription = sqlDataReader["AdditionalDescription"].ToString();
                artifact.ArtifactCount = Convert.ToInt32(sqlDataReader["ArtifactCount"].ToString());
                artifact.ArtifactWeight = Convert.ToDecimal(sqlDataReader["ArtifactWeight"].ToString());
                artifact.LabTechInitials = sqlDataReader["LabTechInitials"].ToString();
                artifact.DateAnalyzed = Convert.ToDateTime(sqlDataReader["DateAnalyzed"].ToString()); 
                artifact.ProvenienceId = Convert.ToInt32(sqlDataReader["ProvenienceId"].ToString());

                artifacts.Add(artifact);
            }

            return artifacts;
        }

        // public static int InsertEmployee(ArtifactData employee, SqlConnection sqlConnection)
        // {
        //     string sql = "insert into Employee (LastName, FirstName, Salary) values (@LastName, @FirstName, @Salary);";

        //     SqlCommand sqlCommand = new SqlCommand(sql, sqlConnection);
        //     sqlCommand.CommandType = System.Data.CommandType.Text;

        //     SqlParameter paramLastName = new SqlParameter("@LastName", employee.PeriodName);
        //     SqlParameter paramFirstName = new SqlParameter("@FirstName", employee.SiteNumber);
        //     SqlParameter salary = new SqlParameter("@Salary", employee.Salary);

        //     paramLastName.DbType = System.Data.DbType.String;
        //     paramFirstName.DbType = System.Data.DbType.String;
        //     salary.DbType = System.Data.DbType.Decimal;

        //     sqlCommand.Parameters.Add(paramLastName);
        //     sqlCommand.Parameters.Add(paramFirstName);
        //     sqlCommand.Parameters.Add(salary);

        //     int rowsAffected = sqlCommand.ExecuteNonQuery();
        //     return rowsAffected;
        // }

        // public static int UpdateEmployee(ArtifactData employee, SqlConnection sqlConnection)
        // {
        //     string sql = "update Employee set LastName = @LastName, FirstName = @FirstName, Salary = @Salary where EmployeeId = @EmployeeId;";


        //     SqlCommand sqlCommand = new SqlCommand(sql, sqlConnection);
        //     sqlCommand.CommandType = System.Data.CommandType.Text;

        //     SqlParameter paramLastName = new SqlParameter("@LastName", employee.PeriodName);
        //     SqlParameter paramFirstName = new SqlParameter("@FirstName", employee.SiteNumber);
        //     SqlParameter paramSalary = new SqlParameter("@Salary", employee.Salary);
        //     SqlParameter paramEmployeeId = new SqlParameter("@EmployeeId", employee.ArtifactId);

        //     paramLastName.DbType = System.Data.DbType.String;
        //     paramFirstName.DbType = System.Data.DbType.String;
        //     paramSalary.DbType = System.Data.DbType.Decimal;
        //     paramEmployeeId.DbType = System.Data.DbType.Int32;

        //     sqlCommand.Parameters.Add(paramLastName);
        //     sqlCommand.Parameters.Add(paramFirstName);
        //     sqlCommand.Parameters.Add(paramSalary);
        //     sqlCommand.Parameters.Add(paramEmployeeId);

        //     int rowsAffected = sqlCommand.ExecuteNonQuery();
        //     return rowsAffected;
        // }

        // public static int DeleteEmployee(int employeeId, SqlConnection sqlConnection)
        // {
        //     string sql = "delete from Employee where EmployeeId = @EmployeeId;";

        //     SqlCommand sqlCommand = new SqlCommand(sql, sqlConnection);
        //     sqlCommand.CommandType = System.Data.CommandType.Text;

        //     SqlParameter paramEmployeeId = new SqlParameter("@EmployeeId", employeeId);
        //     paramEmployeeId.DbType = System.Data.DbType.Int32;
        //     sqlCommand.Parameters.Add(paramEmployeeId);

        //     int rowsAffected = sqlCommand.ExecuteNonQuery();
        //     return rowsAffected;
        // }

        // public void ShowEmployee()
        // {
        //     Console.WriteLine($"{ArtifactId}, {PeriodName}, {SiteNumber}, {Salary}");
        // }

        // public static void ShowEmployees(List<ArtifactData> employees)
        // {
        //     foreach (ArtifactData employee in employees)
        //     {
        //         employee.ShowEmployee();
        //     }
        // }

    }
}
