using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Order
    {
        [Key]
        public int OrderID { get; set; }
        public int OrderDetailsID { get; set; }
        public int CustomerID { get; set; }
        public virtual Customer Customer { get; set; }
        public virtual OrderDetails OrderDetails { get; set; }
    }
}
