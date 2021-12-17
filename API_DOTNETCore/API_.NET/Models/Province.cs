using System;
using System.Collections.Generic;

namespace API_.NET.Models
{
    public partial class Province
    {
        public Province()
        {
            District = new HashSet<District>();
        }

        public int ProvinceId { get; set; }
        public string ProvinceName { get; set; }

        public ICollection<District> District { get; set; }
    }
}
