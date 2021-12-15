using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API_.NET.Models
{
    public class StoreFeedback
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int FeedbackId { get; set; }
        public int StoreId { get; set; }
        public string Content { get; set; }
        public DateTime FeedbackTime { get; set; }
    }
}
