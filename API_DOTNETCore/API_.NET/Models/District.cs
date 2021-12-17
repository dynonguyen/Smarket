using System;
using System.Collections.Generic;

namespace API_.NET.Models
{
    public partial class District
    {
        public District()
        {
            Shipper = new HashSet<Shipper>();
            Ward = new HashSet<Ward>();
        }

        public int DistrictId { get; set; }
        public string DistrictName { get; set; }
        public int? Province { get; set; }

        public Province ProvinceNavigation { get; set; }
        public ICollection<Shipper> Shipper { get; set; }
        public ICollection<Ward> Ward { get; set; }
    }
}
