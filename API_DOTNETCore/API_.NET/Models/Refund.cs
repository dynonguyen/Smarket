using System;
using System.Collections.Generic;

namespace API_.NET.Models
{
    public partial class Refund
    {
        public int RefundId { get; set; }
        public int OrderId { get; set; }
        public string Reasons { get; set; }
        public DateTime RefundTime { get; set; }

        public CusOrder Order { get; set; }
    }
}
