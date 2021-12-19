using System;
using System.Collections.Generic;

namespace API_.NET.Models
{
    public partial class Cart
    {
        public int CartId { get; set; }
        public string SessionId { get; set; }
        public int ProductId { get; set; }
        public int Quantity { get; set; }

        public Product Product { get; set; }
    }
}
