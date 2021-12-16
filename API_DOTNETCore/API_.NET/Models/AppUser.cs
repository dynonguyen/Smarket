using System;
using System.Collections.Generic;

namespace API_.NET.Models
{
    public partial class AppUser
    {
        public int? AccountId { get; set; }
        public int UserId { get; set; }
        public string Name { get; set; }
        public string PeopleId { get; set; }

        public Account Account { get; set; }
        public Customer Customer { get; set; }
        public Shipper Shipper { get; set; }
        public Store Store { get; set; }
    }
}
