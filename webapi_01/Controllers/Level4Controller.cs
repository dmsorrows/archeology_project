using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;

namespace webapi_01.Controllers;

[ApiController]
[Route("[controller]")]
public class Level4Controller : ControllerBase
{
    private readonly ILogger<WeatherForecastController> _logger;

    public Level4Controller(ILogger<WeatherForecastController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    [Route("/GetLevel4Names")]
    public Response GetLevel4Names()
    {
        Response response = new Response();
        try
        {
            List<Level4> level4Names = new List<Level4>();

            string connectionString = GetConnectionString();
            using (SqlConnection sqlConnection = new SqlConnection(connectionString))
            {
                sqlConnection.Open();
                level4Names = Level4.GetLevel4Names(sqlConnection);
            }

            string message = "";

            if (level4Names.Count() > 0)
            {
                message = $"Found Level 4 names!";
            }
            else
            {
                message = "No Level 4 names met your search criteria.";
            }

            response.Result = "success";
            response.Message = message;
            response.Level4Names = level4Names;
        }
        catch (Exception e)
        {
            response.Result = "failure";
            response.Message = e.Message;
        }
        return response;
    }

    [HttpGet]
    [Route("/GetLevel4NamesForUpdate")]
    public Response GetLevel4NamesForUpdate()
    {
        Response response = new Response();
        try
        {
            List<Level4> level4Names = new List<Level4>();

            string connectionString = GetConnectionString();
            using (SqlConnection sqlConnection = new SqlConnection(connectionString))
            {
                sqlConnection.Open();
                level4Names = Level4.GetLevel4NamesForUpdate(sqlConnection);
            }

            string message = "";

            if (level4Names.Count() > 0)
            {
                message = $"Found Level 4 names!";
            }
            else
            {
                message = "No Level 4 names met your search criteria.";
            }

            response.Result = "success";
            response.Message = message;
            response.Level4Names = level4Names;
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