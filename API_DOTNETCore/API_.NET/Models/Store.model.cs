using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API_.NET.Models
{
    public class Store
    {
        [Key]
        public int StoreId { get; set; }
        public int StoreType { get; set; }
        public int Status { get; set; }
        public int Area { get; set; }
        public string Categories { get; set; }
        public string Certificate { get; set; }
    }
}
