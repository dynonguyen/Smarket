using System;
using System.Collections.Generic;

namespace API_.NET.Models
{
    public partial class AppUser
    {
        public AppUser()
        {
            Customer = new HashSet<Customer>();
            Shipper = new HashSet<Shipper>();
            Store = new HashSet<Store>();
        }

        public int UserId { get; set; }
        public int AccountId { get; set; }
        public string Name { get; set; }
        public string PeopleId { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public int Ward { get; set; }

        public Account Account { get; set; }
        public Ward WardNavigation { get; set; }
        public ICollection<Customer> Customer { get; set; }
        public ICollection<Shipper> Shipper { get; set; }
        public ICollection<Store> Store { get; set; }
    }
}
