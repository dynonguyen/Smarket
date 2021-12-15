using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API_.NET.Models
{
    public class DatabaseAudit
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int AuditId { get; set; }
        public int AdminId { get; set; }
        public DateTime CreateTime { get; set; }
        public string Action { get; set; }
        public int DangerousLevel { get; set; }
        public string Object { get; set; }
        public string Detail { get; set; }


    }
}
