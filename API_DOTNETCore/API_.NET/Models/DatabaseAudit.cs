using System;
using System.Collections.Generic;

namespace API_.NET.Models
{
    public partial class DatabaseAudit
    {
        public int AuditId { get; set; }
        public int AdminId { get; set; }
        public DateTime CreateTime { get; set; }
        public string Action { get; set; }
        public int DangerousLevel { get; set; }
        public string Object { get; set; }
        public string Detail { get; set; }

        public AdminAccount Admin { get; set; }
    }
}
