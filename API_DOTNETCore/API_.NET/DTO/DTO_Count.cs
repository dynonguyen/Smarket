using System.ComponentModel.DataAnnotations;

namespace API_.NET.DTO
{
    public class DTO_Count
    {
        [Key]
        public int Id { get; set; }

        public int Quantity {get; set; }
    }
}
