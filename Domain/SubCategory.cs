using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class SubCategory
    {
       [Key]
        public int SubCategoryID { get; set; }
        public string SubcategoryName { get; set; }
        public int CategoryID { get; set; }
        public virtual Category Category { get; set; }
    }
}
