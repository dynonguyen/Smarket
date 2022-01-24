using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API_.NET.DTO
{
    public class DTO_Products
    {
        [Key]
        public int ProductId { get; set; }
        public int StoreId { get; set; }
        public string ProductName { get; set; }
        public string ProductDes { get; set; }
        public double ProductRating { get; set; }
        public int UnitPrice { get; set; }
        public int Unit { get; set; }
        public string QuantitativeUnit { get; set; }
        public string Source { get; set; }
        public string Certificate { get; set; }
    }
}
