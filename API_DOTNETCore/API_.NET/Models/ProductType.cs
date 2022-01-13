using System;
using System.Collections.Generic;

namespace API_.NET.Models
{
    public partial class ProductType
    {
        public ProductType()
        {
            Product = new HashSet<Product>();
        }

        public int ProductTypeId { get; set; }
        public string ProductTypeName { get; set; }
        public string ProductTypeDes { get; set; }
        public int GroupType {get; set;}

        public ICollection<Product> Product { get; set; }
    }
}
