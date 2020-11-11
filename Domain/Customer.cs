using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Customer
    {
        [Key]
        public int CustomerID { get; set; }
        public string UserName { get; set; }
        public string PassWord { get; set; }
        public string Adress { get; set; }
        public string Name { get; set; }
        public string PhoneNumber { get; set; }
        public virtual ICollection<Order> Orders { get; set; }
    }
}
