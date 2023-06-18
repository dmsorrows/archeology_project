using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webapi_01
{
    public class Response
    {
        public string? Result { get; set; }
        public string? Message { get; set; }
        public List<ArtifactData>? Artifacts { get; set; }
        public List<Level1>? Level1Names { get; set; }
        public List<Level2>? Level2Names { get; set; }
        public List<Level3>? Level3Names { get; set; }
        public List<Level4>? Level4Names { get; set; }
        public List<Provenience>? ProvenienceData { get; set; }
    }
}