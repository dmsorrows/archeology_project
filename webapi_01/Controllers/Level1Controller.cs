using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;

namespace webapi_01.Controllers;

[ApiController]
[Route("[controller]")]
public class Level1Controller : ControllerBase
{
    private readonly ILogger<WeatherForecastController> _logger;

    public Level1Controller(ILogger<WeatherForecastController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    [Route("/GetLevel1Names")]
    public Response GetLevel1Names()
    {
        Response response = new Response();
        try
        {
            List<Level1> level1Names = new List<Level1>();

            string connectionString = GetConnectionString();
            using (SqlConnection sqlConnection = new SqlConnection(connectionString))
            {
                sqlConnection.Open();
                level1Names = Level1.GetLevel1Names(sqlConnection);
            }

            string message = "";

            if (level1Names.Count() > 0)
            {
                message = $"Found Level 1 names!";
            }
            else
            {
                message = "No Level 1 names met your search criteria.";
            }

            response.Result = "success";
            response.Message = message;
            response.Level1Names = level1Names;
        }
        catch (Exception e)
        {
            response.Result = "failure";
            response.Message = e.Message;
        }
        return response;
    }

    [HttpGet]
    [Route("/GetLevel1NamesForUpdate")]
    public Response GetLevel1NamesForUpdate()
    {
        Response response = new Response();
        try
        {
            List<Level1> level1Names = new List<Level1>();

            string connectionString = GetConnectionString();
            using (SqlConnection sqlConnection = new SqlConnection(connectionString))
            {
                sqlConnection.Open();
                level1Names = Level1.GetLevel1NamesForUpdate(sqlConnection);
            }

            string message = "";

            if (level1Names.Count() > 0)
            {
                message = $"Found Level 1 names!";
            }
            else
            {
                message = "No Level 1 names met your search criteria.";
            }

            response.Result = "success";
            response.Message = message;
            response.Level1Names = level1Names;
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
        string serverName = @"SORROWS-PC\SQLEXPRESS"; //Change to the "Server Name" you see when you launch SQL Server Management Studio.
        string databaseName = "artifacts_db"; //Change to the database where you created your Employee table.
        string connectionString = $"data source={serverName}; database={databaseName}; Integrated Security=true;";
        return connectionString;
    }
}