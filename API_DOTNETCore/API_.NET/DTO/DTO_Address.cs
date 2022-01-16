using System.ComponentModel.DataAnnotations;

namespace API_.NET.DTO
{
    public class DTO_Address
    {
        [Key]
        public string Ward { get; set; }
        public string District { get; set; }
        public string Province { get; set; }

        public DTO_Address(string ward, string district, string province)
        {
            this.Ward = ward;
            this.District = district;
            this.Province = province;
        }
    }
}