using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API_.NET.Models
{
    public class Product
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int ProductId { get; set; }
        public int StoreId { get; set; }
        public string ProductName { get; set; }
        public int ProductTypeId { get; set; }
        public string ProductDes { get; set; }
        public float ProductRating { get; set; }
        public float UnitPrice { get; set; }
        public float Unit { get; set; }
        public string QuantitativeUnit { get; set; }
        public string Source { get; set; }
        public string Certificate { get; set; }

    }
}
