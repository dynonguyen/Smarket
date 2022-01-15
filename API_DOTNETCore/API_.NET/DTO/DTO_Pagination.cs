using System.Collections.Generic;

namespace API_.NET.DTO
{
    public class DTO_Pagination<T>
    {
        public int Total { get; set; }
        public int Page { get; set; }
        public int PageSize { get; set; }
        public List<T> Data { get; set; }
        public DTO_Pagination() { }
        public DTO_Pagination(int total, int page, int pageSize, List<T> data)
        {
            this.Total = total;
            this.Page = page;
            this.PageSize = pageSize;
            this.Data = new List<T>(data);
        }
    }
}