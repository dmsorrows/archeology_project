using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;

namespace webapi_01.Controllers;

[ApiController]
[Route("[controller]")]
public class Level2Controller : ControllerBase
{
    
    [HttpGet]
    [Route("/GetLevel2Names")]
    public Response GetLevel2Names()
    {
        Response response = new Response();
        try
        {
            List<Level2> level2Names = new List<Level2>();

            string connectionString = GetConnectionString();
            using (SqlConnection sqlConnection = new SqlConnection(connectionString))
            {
                sqlConnection.Open();
                level2Names = Level2.GetLevel2Names(sqlConnection);
            }

            string message = "";

            if (level2Names.Count() > 0)
            {
                message = $"Found Level 2 names!";
            }
            else
            {
                message = "No Level 2 names met your search criteria.";
            }

            response.Result = "success";
            response.Message = message;
            response.Level2Names = level2Names;
        }
        catch (Exception e)
        {
            response.Result = "failure";
            response.Message = e.Message;
        }
        return response;
    }

    [HttpGet]
    [Route("/GetLevel2NamesForUpdate")]
    public Response GetLevel2NamesForUpdate()
    {
        Response response = new Response();
        try
        {
            List<Level2> level2Names = new List<Level2>();

            string connectionString = GetConnectionString();
            using (SqlConnection sqlConnection = new SqlConnection(connectionString))
            {
                sqlConnection.Open();
                level2Names = Level2.GetLevel2NamesForUpdate(sqlConnection);
            }

            string message = "";

            if (level2Names.Count() > 0)
            {
                message = $"Found Level 2 names!";
            }
            else
            {
                message = "No Level 2 names met your search criteria.";
            }

            response.Result = "success";
            response.Message = message;
            response.Level2Names = level2Names;
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