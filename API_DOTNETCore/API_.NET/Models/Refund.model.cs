using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API_.NET.Models
{
    public class Refund
    {
        [Key]
        public int OrderId { get; set; }
        public string Reasons { get; set; }
        public DateTime RefundTime { get; set; }
    }
}
