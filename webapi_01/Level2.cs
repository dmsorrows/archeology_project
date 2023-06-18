using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webapi_01
{
    public class Level2
    {
        public int Level2Id { get; set; }
        public string? Level2Name { get; set; }

        public Level2()
        {
        }

        //For Inserting
        public Level2(string level2Name)
        {
            Level2Name = level2Name;
        }

        //For Updating
        public Level2(int level2Id, string level2Name)
        {
            Level2Id = level2Id;
            Level2Name = level2Name;
        }
    }
}