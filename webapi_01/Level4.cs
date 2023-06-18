using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webapi_01
{
    public class Level4
    {
        public int Level4Id { get; set; }
        public string? Level4Name { get; set; }

        public Level4()
        {
        }

        //For Inserting
        public Level4(string level4Name)
        {
            Level4Name = level4Name;
        }

        //For Updating
        public Level4(int level4Id, string level4Name)
        {
            Level4Id = level4Id;
            Level4Name = level4Name;
        }
    }
}