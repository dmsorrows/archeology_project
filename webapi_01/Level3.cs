using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webapi_01
{
    public class Level3
    {
        public int Level3Id { get; set; }
        public string? Level3Name { get; set; }

        public Level3()
        {
        }

        //For Inserting
        public Level3(string level3Name)
        {
            Level3Name = level3Name;
        }

        //For Updating
        public Level3(int level3Id, string level3Name)
        {
            Level3Id = level3Id;
            Level3Name = level3Name;
        }
    }
}