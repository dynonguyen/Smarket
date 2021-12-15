using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API_.NET.Models
{
    public class Customer
    {
        [Key]
        public int CustomerId { get; set; }
        public int CustomerLevel { get; set; }
    }
}
