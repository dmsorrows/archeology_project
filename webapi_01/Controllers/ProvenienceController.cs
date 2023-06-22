using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;

namespace webapi_01.Controllers;

[ApiController]
[Route("[controller]")]
public class ProvenienceController : ControllerBase
{
    private readonly ILogger<WeatherForecastController> _logger;

    public ProvenienceController(ILogger<WeatherForecastController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    [Route("/GetProvenienceData")]
    public Response GetProvenienceData()
    {
        Response response = new Response();
        try
        {
            List<Provenience> provenienceData = new List<Provenience>();

            string connectionString = GetConnectionString();
            using (SqlConnection sqlConnection = new SqlConnection(connectionString))
            {
                sqlConnection.Open();
                provenienceData = Provenience.GetProvenienceData(sqlConnection);
            }

            string message = "";

            if (provenienceData.Count() > 0)
            {
                message = $"You found some provenience data!";
            }
            else
            {
                message = "No provenience data met your search criteria.";
            }

            response.Result = "success";
            response.Message = message;
            response.ProvenienceData = provenienceData;
        }
        catch (Exception e)
        {
            response.Result = "failure";
            response.Message = e.Message;
        }
        return response;
    }

    [HttpGet]
    [Route("/GetProvenienceDataForUpdate")]
    public Response GetProvenienceDataForUpdate()
    {
        Response response = new Response();
        try
        {
            List<Provenience> provenienceData = new List<Provenience>();

            string connectionString = GetConnectionString();
            using (SqlConnection sqlConnection = new SqlConnection(connectionString))
            {
                sqlConnection.Open();
                provenienceData = Provenience.GetProvenienceDataForUpdate(sqlConnection);
            }

            string message = "";

            if (provenienceData.Count() > 0)
            {
                message = $"You found some provenience data!";
            }
            else
            {
                message = "No provenience data met your search criteria.";
            }

            response.Result = "success";
            response.Message = message;
            response.ProvenienceData = provenienceData;
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