using System;

namespace API_.NET.DTO
{
    public class DTO_StoreFeedback
    {
        public string Content { get; set; }
        public DateTime Time { get; set; }

        public DTO_StoreFeedback(string content, DateTime time)
        {
            this.Content = content;
            this.Time = time;
        }
    }
}