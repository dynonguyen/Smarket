using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API_.NET.Models
{
    public class Shipper
    {
        [Key]
        public int ShipperId { get; set; }
        public int Status { get; set; }
        public int Area { get; set; }
        public string ShipperLicense { get; set; }
        public float ShipperRating { get; set; }

    }
}
