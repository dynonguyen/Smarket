using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API_.NET.Models;
namespace API_.NET.DTO
{
    public class ProductWithImages
    {
        public Product product { get; set; }
        public List<ProductImage> images { get; set; }
    }
}
