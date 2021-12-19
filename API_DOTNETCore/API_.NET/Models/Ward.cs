using System;
using System.Collections.Generic;

namespace API_.NET.Models
{
    public partial class Ward
    {
        public Ward()
        {
            AppUser = new HashSet<AppUser>();
        }

        public int WardId { get; set; }
        public string WardName { get; set; }
        public string Prefix { get; set; }
        public int District { get; set; }

        public District DistrictNavigation { get; set; }
        public ICollection<AppUser> AppUser { get; set; }
    }
}
