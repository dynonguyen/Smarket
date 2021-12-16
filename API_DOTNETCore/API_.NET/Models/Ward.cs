using System;
using System.Collections.Generic;

namespace API_.NET.Models
{
    public partial class Ward
    {
        public int WardId { get; set; }
        public string WardName { get; set; }
        public int? District { get; set; }

        public District DistrictNavigation { get; set; }
    }
}
