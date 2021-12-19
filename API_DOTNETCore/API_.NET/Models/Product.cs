using System;
using System.Collections.Generic;

namespace API_.NET.Models
{
    public partial class Product
    {
        public Product()
        {
            Cart = new HashSet<Cart>();
            OrderDetail = new HashSet<OrderDetail>();
            ProductImage = new HashSet<ProductImage>();
        }

        public int ProductId { get; set; }
        public int StoreId { get; set; }
        public string ProductName { get; set; }
        public int ProductTypeId { get; set; }
        public string ProductDes { get; set; }
        public double ProductRating { get; set; }
        public int UnitPrice { get; set; }
        public int Unit { get; set; }
        public string QuantitativeUnit { get; set; }
        public string Source { get; set; }
        public string Certificate { get; set; }

        public ProductType ProductType { get; set; }
        public ICollection<Cart> Cart { get; set; }
        public ICollection<OrderDetail> OrderDetail { get; set; }
        public ICollection<ProductImage> ProductImage { get; set; }
    }
}
