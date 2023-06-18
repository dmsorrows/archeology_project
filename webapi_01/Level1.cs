using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webapi_01
{
    public class Level1
    {
        public int Level1Id { get; set; }
        public string? Level1Name { get; set; }

        public Level1()
        {
        }

        //For Inserting
        public Level1(string level1Name)
        {
            Level1Name = level1Name;
        }

        //For Updating
        public Level1(int level1Id, string level1Name)
        {
            Level1Id = level1Id;
            Level1Name = level1Name;
        }
    }
}