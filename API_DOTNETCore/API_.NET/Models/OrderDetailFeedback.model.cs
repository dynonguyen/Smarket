using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API_.NET.Models
{
    public class OrderDetailFeedback
    {
        [Key]
        public int DetailId { get; set; }
        public string Content { get; set; }
        public float Rating { get; set; }
        public DateTime FeedbackTime { get; set; }
    }
}
