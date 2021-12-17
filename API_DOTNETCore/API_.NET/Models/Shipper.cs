using System;
using System.Collections.Generic;

namespace API_.NET.Models
{
    public partial class Shipper
    {
        public Shipper()
        {
            CusOrder = new HashSet<CusOrder>();
        }

        public int ShipperId { get; set; }
        public int? Status { get; set; }
        public int? Area { get; set; }
        public string ShipperLicense { get; set; }
        public double? ShipperRating { get; set; }

        public District AreaNavigation { get; set; }
        public AppUser ShipperNavigation { get; set; }
        public ICollection<CusOrder> CusOrder { get; set; }
    }
}
