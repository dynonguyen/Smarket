using System;
using System.Collections.Generic;

namespace API_.NET.Models
{
    public partial class OrderDetail
    {
        public OrderDetail()
        {
            OrderDetailFeedback = new HashSet<OrderDetailFeedback>();
        }

        public int OrderDetailId { get; set; }
        public int OrderId { get; set; }
        public int ProductId { get; set; }
        public int UnitPrice { get; set; }
        public int Quantity { get; set; }
        public string OrderDetailDes { get; set; }

        public CusOrder Order { get; set; }
        public Product Product { get; set; }
        public ICollection<OrderDetailFeedback> OrderDetailFeedback { get; set; }
    }
}
