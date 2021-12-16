using System;
using System.Collections.Generic;

namespace API_.NET.Models
{
    public partial class CartDetail
    {
        public int CartId { get; set; }
        public int ProductId { get; set; }
        public DateTime? AddTime { get; set; }

        public Cart Cart { get; set; }
        public Product Product { get; set; }
    }
}
