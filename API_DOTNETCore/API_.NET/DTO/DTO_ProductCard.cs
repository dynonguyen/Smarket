using System.ComponentModel.DataAnnotations;

namespace API_.NET.DTO
{
    public class DTO_ProductCard
    {
        [Key]
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public int UnitPrice { get; set; }
        public string QuantitativeUnit { get; set; }
        public string Thumbnail { get; set; }
    }
}