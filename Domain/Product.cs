using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Domain
{
    public class Product
    {
        [Key]
        public int ProductID { get; set; }
        public string ProductName { get; set; }
        public string ProductImg1 { get; set; }
        public string ProductImg2 { get; set; }
        public decimal Price { get; set; }

        public string ProductSize { get; set; }
        public string Description { get; set; }

        public int SubcategoryID { get; set; }
        public virtual SubCategory Category { get; set; }
    }
}
