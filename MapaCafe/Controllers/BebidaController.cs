using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;
using MapaCafe.Data;
using MapaCafe.Models;
namespace MapaCafe.Controllers

{
    [ApiController]
    [Route("api/[controller]")]

    public class BebidaController : ControllerBase
{
    private readonly MapaCafeContext _context;

    public BebidaController (MapaCafeContext context)
    {
        _context = context;
    }

    [HttpGet]

    public async Task<ActionResult<IEnumerable<BebidaCafeteria>>> GetBebidas()
    {
        return await _context.BebidasFavoritas.ToListAsync();
    }

    [HttpGet("{id}")]

    public async Task<ActionResult<BebidaCafeteria>> GetBebida(int id)
    {
        var bebida = await _context.BebidasFavoritas.FindAsync(id);

        if (bebida == null)
        {
            return NotFound();
        }
        return bebida;
    }

    [HttpPost]

    public async Task<ActionResult<BebidaCafeteria>> PostBebida(BebidaCafeteria bebida)
    {
        _context.BebidasFavoritas.Add(bebida);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetBebida), new {id = bebida.Id}, bebida);
    }

    [HttpPut("{id}")]

    public async Task<IActionResult> PutBebida(int id, BebidaCafeteria bebida)
    {
        if (id != bebida.Id)
        {
            return BadRequest();
        }

        _context.Entry(bebida).State = EntityState.Modified;

        try
        {
            {
                await _context.SaveChangesAsync();
            }    
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!_context.BebidasFavoritas.Any(e => e.Id == id))
            {
                return  NotFound();
            }
            throw;
        }
        
        return NoContent();
        
    }

    [HttpDelete("{id}")]
    
    
    public async Task<IActionResult> DeleteBebida(int id)
    {
        var bebida = await _context.BebidasFavoritas.FindAsync(id);
        if (bebida == null)
        {
            return NotFound();
        }

        _context.BebidasFavoritas.Remove(bebida);
        await _context.SaveChangesAsync();

        return NoContent();

    }
    

}
}