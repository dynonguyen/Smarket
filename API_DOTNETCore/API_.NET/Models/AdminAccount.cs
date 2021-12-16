using System;
using System.Collections.Generic;

namespace API_.NET.Models
{
    public partial class AdminAccount
    {
        public AdminAccount()
        {
            DatabaseAudit = new HashSet<DatabaseAudit>();
        }

        public int AccountId { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public int? PermissionLevel { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }

        public ICollection<DatabaseAudit> DatabaseAudit { get; set; }
    }
}
