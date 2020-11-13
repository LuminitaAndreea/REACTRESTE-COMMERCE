using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Domain;
using Persistance;
using MediatR;
using Application.Activities;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Products1Controller : ControllerBase
    {
        private readonly IMediator _mediator;

        public Products1Controller(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<List<Product>>> List()
        {
            return await _mediator.Send(new List.Query());
        }

        //    // GET: api/Products1/5
        //    [HttpGet("{id}")]
        //    public async Task<ActionResult<Product>> GetProduct(int id)
        //    {
        //        var product = await _mediator.Products.FindAsync(id);

        //        if (product == null)
        //        {
        //            return NotFound();
        //        }

        //        return product;
        //    }

        //    // PUT: api/Products1/5
        //    // To protect from overposting attacks, enable the specific properties you want to bind to, for
        //    // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        //    [HttpPut("{id}")]
        //    public async Task<IActionResult> PutProduct(int id, Product product)
        //    {
        //        if (id != product.ProductID)
        //        {
        //            return BadRequest();
        //        }

        //        _mediator.Entry(product).State = EntityState.Modified;

        //        try
        //        {
        //            await _mediator.SaveChangesAsync();
        //        }
        //        catch (DbUpdateConcurrencyException)
        //        {
        //            if (!ProductExists(id))
        //            {
        //                return NotFound();
        //            }
        //            else
        //            {
        //                throw;
        //            }
        //        }

        //        return NoContent();
        //    }

        //    // POST: api/Products1
        //    // To protect from overposting attacks, enable the specific properties you want to bind to, for
        //    // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        //    [HttpPost]
        //    public async Task<ActionResult<Product>> PostProduct(Product product)
        //    {
        //        _context.Products.Add(product);
        //        await _context.SaveChangesAsync();

        //        return CreatedAtAction("GetProduct", new { id = product.ProductID }, product);
        //    }

        //    // DELETE: api/Products1/5
        //    [HttpDelete("{id}")]
        //    public async Task<ActionResult<Product>> DeleteProduct(int id)
        //    {
        //        var product = await _context.Products.FindAsync(id);
        //        if (product == null)
        //        {
        //            return NotFound();
        //        }

        //        _context.Products.Remove(product);
        //        await _context.SaveChangesAsync();

        //        return product;
        //    }

        //    private bool ProductExists(int id)
        //    {
        //        return _context.Products.Any(e => e.ProductID == id);
        //    }
        }
}
