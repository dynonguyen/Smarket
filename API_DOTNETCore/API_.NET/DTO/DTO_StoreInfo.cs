using System;
using System.Collections.Generic;
using API_.NET.Models;

namespace API_.NET.DTO
{
    public class DTO_StoreInfo
    {
        public string StoreName { get; set; }
        public string Avatar { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public string Categories { get; set; }
        public int Status { get; set; }
        public DateTime CreateDate { get; set; }
        public List<DTO_ProductCard> Products { get; set; }
        public List<DTO_StoreFeedback> Feedbacks { get; set; }

        public DTO_StoreInfo() { }
    }
}