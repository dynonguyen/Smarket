using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace API_.NET.DTO
{
    public class DTO_OrderDetailProducts
    {


        [Key]
        public int OrderDetailId { get; set; }
        public int OrderId { get; set; }
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public int UnitPrice { get; set; }
        public int Quantity { get; set; }
        public string Source { get; set; }


        public DTO_OrderDetailProducts(int orderDetailId, int orderId, int productId, string productName, int unitPrice, int quantity, string source)
        {
            OrderDetailId = orderDetailId;
            OrderId = orderId;
            ProductId = productId;
            ProductName = productName;
            UnitPrice = unitPrice;
            Quantity = quantity;
            Source = source;
        }
    }
}