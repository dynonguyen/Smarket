using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API_.NET.Models
{
    public class CusOrder
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int OrderId { get; set; }
        public int CustomerId { get; set; }
        public int ShipperId { get; set; }
        public int StoreId { get; set; }
        public string OrderCode { get; set; }
        public int OrderStatus { get; set; }
        public float OrderTotal { get; set; }
        public string DeliveryAddress { get; set; }
        public DateTime DeliveryDate { get; set; }
        public string RecieverName { get; set; }
        public string RecieverPhone { get; set; }
        public string CreateDate { get; set; }
    }
}
