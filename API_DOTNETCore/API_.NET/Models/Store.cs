using System;
using System.Collections.Generic;

namespace API_.NET.Models
{
    public partial class Store
    {
        public Store()
        {
            CusOrder = new HashSet<CusOrder>();
            StoreFeedback = new HashSet<StoreFeedback>();
        }

        public int StoreId { get; set; }
        public int? StoreType { get; set; }
        public int? Status { get; set; }
        public int? Area { get; set; }
        public string Categories { get; set; }
        public string Certificate { get; set; }

        public AppUser StoreNavigation { get; set; }
        public ICollection<CusOrder> CusOrder { get; set; }
        public ICollection<StoreFeedback> StoreFeedback { get; set; }
    }
}
