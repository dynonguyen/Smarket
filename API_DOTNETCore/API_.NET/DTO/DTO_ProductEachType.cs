using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API_.NET.DTO
{
    public class DTO_ProductEachType
    {
        [Key]
        public string ProductTypeName { get; set; }
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public int UnitPrice { get; set; }
        public int Unit { get; set; }
        public string Name { get; set; }
        public string QuantitativeUnit { get; set; }

    }
}