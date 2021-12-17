using System;
using System.Collections.Generic;

namespace API_.NET.Models
{
    public partial class OrderDetail
    {
        public int OrderDetailId { get; set; }
        public int? OrderId { get; set; }
        public int? ProductId { get; set; }
        public double? UnitPrice { get; set; }
        public double? Quantity { get; set; }
        public string OrderDetailDes { get; set; }

        public CusOrder Order { get; set; }
        public Product Product { get; set; }
        public OrderDetailFeedback OrderDetailFeedback { get; set; }
    }
}
