using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API_.NET.Models
{
    public class Payment
    {
        [Key]
        public int OrderId { get; set; }
        public int CustomerId { get; set; }
        public string BankAccountNumber { get; set; }
        public int PaymentMetod { get; set; }
        public int ShippingMoney { get; set; }
        public int TotalMoney { get; set; }
        public DateTime PaymentTime { get; set; }
    }
}
