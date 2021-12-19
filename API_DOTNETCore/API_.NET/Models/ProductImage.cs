using System;
using System.Collections.Generic;

namespace API_.NET.Models
{
    public partial class ProductImage
    {
        public int ProductImageId { get; set; }
        public int ProductId { get; set; }
        public bool IsThumnail { get; set; }
        public string Source { get; set; }

        public Product Product { get; set; }
    }
}
