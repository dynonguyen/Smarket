using System;
using System.Collections.Generic;

namespace API_.NET.Models
{
    public partial class CusOrder
    {
        public CusOrder()
        {
            OrderDetail = new HashSet<OrderDetail>();
            Payment = new HashSet<Payment>();
            Refund = new HashSet<Refund>();
        }

        public int OrderId { get; set; }
        public int CustomerId { get; set; }
        public int ShipperId { get; set; }
        public int StoreId { get; set; }
        public string OrderCode { get; set; }
        public int OrderStatus { get; set; }
        public int OrderTotal { get; set; }
        public string DeliveryAddress { get; set; }
        public DateTime DeliveryDate { get; set; }
        public string ReceiverName { get; set; }
        public string ReceiverPhone { get; set; }
        public DateTime CreateDate { get; set; }

        public Customer Customer { get; set; }
        public Shipper Shipper { get; set; }
        public Store Store { get; set; }
        public ICollection<OrderDetail> OrderDetail { get; set; }
        public ICollection<Payment> Payment { get; set; }
        public ICollection<Refund> Refund { get; set; }
    }
}
