using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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

        
    }
}