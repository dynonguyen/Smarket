using System;
using System.Collections.Generic;

namespace API_.NET.Models
{
    public partial class Customer
    {
        public Customer()
        {
            Cart = new HashSet<Cart>();
            CusOrder = new HashSet<CusOrder>();
            Payment = new HashSet<Payment>();
        }

        public int CustomerId { get; set; }
        public int? CustomerLevel { get; set; }

        public AppUser CustomerNavigation { get; set; }
        public ICollection<Cart> Cart { get; set; }
        public ICollection<CusOrder> CusOrder { get; set; }
        public ICollection<Payment> Payment { get; set; }
    }
}
