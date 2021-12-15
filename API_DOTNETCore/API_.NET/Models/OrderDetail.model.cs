using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API_.NET.Models
{
    public class OrderDetail
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int OrderDetailId { get; set; }
        public int ProductId { get; set; }
        public float UnitPrice { get; set; }
        public float Quantity { get; set; }
        public string OrderDetailDes { get; set; }
    }
}
