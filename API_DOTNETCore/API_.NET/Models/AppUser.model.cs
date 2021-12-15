using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API_.NET.Models
{
    public class AppUser
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int UserId { get; set; }
        public int AccountId { get; set; }
        public string Name { get; set; }
        public string PeopleId { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public int Ward { get; set; }
    }
}
