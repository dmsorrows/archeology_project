using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;

namespace webapi_01.Controllers;

[ApiController]
[Route("[controller]")]
public class ArtifactDataController : ControllerBase
{
    private readonly ILogger<WeatherForecastController> _logger;

    public ArtifactDataController(ILogger<WeatherForecastController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    [Route("/SearchArtifacts")]
    public Response SearchArtifacts(string pageSize = "10", string pageNumber = "1", string search = "")
    {
        Response response = new Response();
        try
        {
            List<ArtifactData> artifacts = new List<ArtifactData>();

            string connectionString = GetConnectionString();
            using (SqlConnection sqlConnection = new SqlConnection(connectionString))
            {
                sqlConnection.Open();
                artifacts = ArtifactData.SearchArtifacts(sqlConnection, search, Convert.ToInt32(pageSize), Convert.ToInt32(pageNumber));
            }

            string message = "";

            if (artifacts.Count() > 0)
            {
                int artifactCount = artifacts[0].ArtifactCount;
                message = $"Found {artifactCount} artifacts!";
            }
            else
            {
                message = "No artifacts met your search criteria.";
            }

            response.Result = "success";
            response.Message = message;
            response.Artifacts = artifacts;
        }
        catch (Exception e)
        {
            response.Result = "failure";
            response.Message = e.Message;
        }
        return response;
    }


    [HttpGet]
    [Route("/InsertArtifact")]
    public Response InsertArtifact(string periodName, string level1Id, string level2Id, string level3Id, string level4Id, string additionalDescription, string artifactCount, string artifactWeight, string labTechInitials, string dateAnalyzed, string provenienceId)
    {
        Response response = new Response();
        try
        {
            List<ArtifactData> artifacts = new List<ArtifactData>();

            ArtifactData artifact = new ArtifactData(periodName, Convert.ToInt32(level1Id), Convert.ToInt32(level2Id), Convert.ToInt32(level3Id), Convert.ToInt32(level4Id), additionalDescription, Convert.ToInt32(artifactCount), Convert.ToDecimal(artifactWeight), labTechInitials, Convert.ToDateTime(dateAnalyzed), Convert.ToInt32(provenienceId));
            //http://localhost:5008/InsertArtifact?periodName=Post-Contact&level1Id=6&level2Id=6&level3Id=6&level4Id=6&additionalDescription=AnotherTestPost&artifactCount=6&artifactWeight=6.66&labTechInitials=LOL&dateAnalyzed=2023-04-22T10:34:23.666&provenienceId=6
            int rowsAffected = 0;

            string connectionString = GetConnectionString();
            using (SqlConnection sqlConnection = new SqlConnection(connectionString))
            {
                sqlConnection.Open();
                rowsAffected = ArtifactData.InsertArtifact(artifact, sqlConnection);
                artifacts = ArtifactData.SearchArtifacts(sqlConnection);
            }

            response.Result = (rowsAffected == 1) ? "success" : "failure";
            response.Message = $"{rowsAffected} rows affected.";
            response.Artifacts = artifacts;
        }
        catch (Exception e)
        {
            response.Result = "failure";
            response.Message = e.Message;
        }

        return response;
    }

    // [HttpGet]
    // [Route("/UpdateEmployee")]
    // public Response UpdateEmployee(string employeeId, string lastName, string firstName, string salary)
    // {
    //     Response response = new Response();

    //     try
    //     {
    //         List<Employee> employees = new List<Employee>();
    //         Employee employee = new Employee(Convert.ToInt32(employeeId), lastName, firstName, Convert.ToDecimal(salary));

    //         int rowsAffected = 0;

    //         string connectionString = GetConnectionString();
    //         using (SqlConnection sqlConnection = new SqlConnection(connectionString))
    //         {
    //             sqlConnection.Open();
    //             rowsAffected = Employee.UpdateEmployee(employee, sqlConnection);
    //             employees = Employee.SearchEmployees(sqlConnection);
    //         }

    //         response.Result = (rowsAffected == 1) ? "success" : "failure";
    //         response.Message = $"{rowsAffected} rows affected.";
    //         response.Employees = employees;
    //     }
    //     catch (Exception e)
    //     {
    //         response.Result = "failure";
    //         response.Message = e.Message;
    //     }

    //     return response;
    // }

    // [HttpGet]
    // [Route("/DeleteEmployee")]
    // public Response DeleteEmployee(string employeeId)
    // {
    //     Response response = new Response();

    //     try
    //     {
    //         List<Employee> employees = new List<Employee>();
    //         int rowsAffected = 0;

    //         string connectionString = GetConnectionString();
    //         using (SqlConnection sqlConnection = new SqlConnection(connectionString))
    //         {
    //             sqlConnection.Open();
    //             rowsAffected = Employee.DeleteEmployee(Convert.ToInt32(employeeId), sqlConnection);
    //             employees = Employee.SearchEmployees(sqlConnection);
    //         }

    //         response.Result = (rowsAffected == 1) ? "success" : "failure";
    //         response.Message = $"{rowsAffected} rows affected.";
    //         response.Employees = employees;
    //     }
    //     catch (Exception e)
    //     {
    //         response.Result = "failure";
    //         response.Message = e.Message;
    //     }

    //     return response;
    // }

    static string GetConnectionString()
    {
        string serverName = @"PALEO\SQLEXPRESS"; //Change to the "Server Name" you see when you launch SQL Server Management Studio.
        string databaseName = "artifacts_db"; //Change to the database where you created your Employee table.
        string connectionString = $"data source={serverName}; database={databaseName}; Integrated Security=true;";
        return connectionString;
    }

}