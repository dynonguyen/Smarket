using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API_.NET.Models
{
    public class Ward
    {
        [Key]
        public int WardId { get; set; }
        public string WardName { get; set; }
        public int DistrictId { get; set; }
    }
}
