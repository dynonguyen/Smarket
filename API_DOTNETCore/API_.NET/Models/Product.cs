using System;
using System.Collections.Generic;

namespace API_.NET.Models
{
    public partial class Product
    {
        public Product()
        {
            CartDetail = new HashSet<CartDetail>();
            OrderDetail = new HashSet<OrderDetail>();
        }

        public int ProductId { get; set; }
        public int? StoreId { get; set; }
        public string ProductName { get; set; }
        public int? ProductTypeId { get; set; }
        public string ProductDes { get; set; }
        public double? ProductRating { get; set; }
        public double? UnitPrice { get; set; }
        public double? Unit { get; set; }
        public string Source { get; set; }
        public string Certificate { get; set; }

        public ProductType ProductType { get; set; }
        public ICollection<CartDetail> CartDetail { get; set; }
        public ICollection<OrderDetail> OrderDetail { get; set; }
    }
}
