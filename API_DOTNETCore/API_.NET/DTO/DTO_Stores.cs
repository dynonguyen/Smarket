using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API_.NET.DTO
{
    public class DTO_Stores
    {
        [Key]
        public int UserId { get; set; }
        public string Name { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public int StoreId { get; set; }
        public int StoreType { get; set; }
        public int Area { get; set; }
        public string Categories { get; set; }
        public string Certificate { get; set; }
    }
}
