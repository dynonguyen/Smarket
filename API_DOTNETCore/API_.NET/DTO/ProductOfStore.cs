using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API_.NET.DTO
{
    public class ProductOfStore
    {
        [Key]
        public int StoreId { get; set; }
        public string Name { get; set; }
        public int Amount { get; set; }

    }
}
