using System;
using System.Collections.Generic;

namespace API_.NET.Models
{
    public partial class Cart
    {
        public Cart()
        {
            CartDetail = new HashSet<CartDetail>();
        }

        public int CartId { get; set; }
        public int? CustomerId { get; set; }

        public Customer Customer { get; set; }
        public ICollection<CartDetail> CartDetail { get; set; }
    }
}
