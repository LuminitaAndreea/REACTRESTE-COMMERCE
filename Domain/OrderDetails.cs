using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class OrderDetails
    {
        [Key]
        public int OrderDetailsID{ get; set; }
        public int OrderID { get; set; }
        public int ProductID { get; set; }
        public int Quantitiy { get; set; }
        public decimal Price { get; set; }
        public decimal Total
        {
            get
            {
                return (Price * Quantitiy);
            }
            private set { }
        }
        public virtual Product Product { get; set; }
    }
}
