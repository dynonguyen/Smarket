using System;
using System.Collections.Generic;

namespace API_.NET.Models
{
    public partial class StoreFeedback
    {
        public int FeedbackId { get; set; }
        public int? StoreId { get; set; }
        public string Content { get; set; }
        public DateTime? FeedbackTime { get; set; }

        public Store Store { get; set; }
    }
}
