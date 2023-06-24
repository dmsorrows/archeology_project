using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;

namespace webapi_01.Controllers;

[ApiController]
[Route("[controller]")]
public class Level3Controller : ControllerBase
{
    private readonly ILogger<WeatherForecastController> _logger;

    public Level3Controller(ILogger<WeatherForecastController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    [Route("/GetLevel3Names")]
    public Response GetLevel3Names()
    {
        Response response = new Response();
        try
        {
            List<Level3> level3Names = new List<Level3>();

            string connectionString = GetConnectionString();
            using (SqlConnection sqlConnection = new SqlConnection(connectionString))
            {
                sqlConnection.Open();
                level3Names = Level3.GetLevel3Names(sqlConnection);
            }

            string message = "";

            if (level3Names.Count() > 0)
            {
                message = $"Found Level 3 names!";
            }
            else
            {
                message = "No Level 3 names met your search criteria.";
            }

            response.Result = "success";
            response.Message = message;
            response.Level3Names = level3Names;
        }
        catch (Exception e)
        {
            response.Result = "failure";
            response.Message = e.Message;
        }
        return response;
    }

    [HttpGet]
    [Route("/GetLevel3NamesForUpdate")]
    public Response GetLevel3NamesForUpdate()
    {
        Response response = new Response();
        try
        {
            List<Level3> level3Names = new List<Level3>();

            string connectionString = GetConnectionString();
            using (SqlConnection sqlConnection = new SqlConnection(connectionString))
            {
                sqlConnection.Open();
                level3Names = Level3.GetLevel3NamesForUpdate(sqlConnection);
            }

            string message = "";

            if (level3Names.Count() > 0)
            {
                message = $"Found Level 3 names!";
            }
            else
            {
                message = "No Level 3 names met your search criteria.";
            }

            response.Result = "success";
            response.Message = message;
            response.Level3Names = level3Names;
        }
        catch (Exception e)
        {
            response.Result = "failure";
            response.Message = e.Message;
        }
        return response;
    }

    static string GetConnectionString()
    {
        string serverName = @"PALEO\SQLEXPRESS"; //Change to the "Server Name" you see when you launch SQL Server Management Studio.
        string databaseName = "artifacts_db"; //Change to the database where you created your Employee table.
        string connectionString = $"data source={serverName}; database={databaseName}; Integrated Security=true;";
        return connectionString;
    }
}