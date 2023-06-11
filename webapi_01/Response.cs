using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webapi
{
    public class Response
    {
        public string? Result { get; set; }
        public string? Message { get; set; }
        public List<ArtifactData>? Employees { get; set; }
    }
}