using System;
using System.Collections.Generic;

namespace API_.NET.Models
{
    public partial class OrderDetailFeedback
    {
        public int OrderDetailFeedbackId { get; set; }
        public int DetailId { get; set; }
        public string Content { get; set; }
        public double Rating { get; set; }
        public DateTime FeedbackTime { get; set; }

        public OrderDetail Detail { get; set; }
    }
}
