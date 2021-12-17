using System;
using System.Collections.Generic;

namespace API_.NET.Models
{
    public partial class Payment
    {
        public string BankAccountNumber { get; set; }
        public int? CustomerId { get; set; }
        public int OrderId { get; set; }
        public int? PaymentMethod { get; set; }
        public int? ShippingMoney { get; set; }
        public int? TotalMoney { get; set; }
        public DateTime? PaymentTime { get; set; }

        public Customer Customer { get; set; }
        public CusOrder Order { get; set; }
    }
}
