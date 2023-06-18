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
    [Route("/GetLevelNames")]
    public Response GetLevel1Names()
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
}