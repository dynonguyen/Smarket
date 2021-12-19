using System;
using System.Collections.Generic;

namespace API_.NET.Models
{
    public partial class Account
    {
        public Account()
        {
            AppUser = new HashSet<AppUser>();
        }

        public int AccountId { get; set; }
        public int AccountType { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public DateTime CreateTime { get; set; }

        public ICollection<AppUser> AppUser { get; set; }
    }
}
