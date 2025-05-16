using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;
using MapaCafe.Data;
using MapaCafe.Models;
namespace MapaCafe.Controllers

{
    [ApiController]
    [Route("api/[controller]")]

    public class CadastroController : ControllerBase
{
    private readonly MapaCafeContext _context;

    public ComidaController (MapaCafeContext context)
    {
        _context = context;
    }

    [HttpGet]

    public async Task<ActionResult<IEnumerable<ComidaCafeteria>>> GetComida()
    {
        return await _context.ComidasFavoritas.ToListAsync();
    }

    [HttpGet("{id}")]

    public async Task<ActionResult<ComidaCafeteria>> GetComida(int id)
    {
        var comida = await _context.ComidasFavoritas.FindAsync(id);

        if (comida == null)
        {
            return NotFound();
        }
        return comida;
    }

    [HttpPost]

    public async Task<ActionResult<ComidaCafeteria>> PostComida(ComidaCafeteria comida)
    {
        _context.ComidasFavoritas.Add(comida);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetComida), new {id = comida.Id}, comida);
    }

    [HttpPut("{id}")]

    public async Task<IActionResult> PutComida(int id, ComidaCafeteria comida)
    {
        if (id != comida.Id)
        {
            return BadRequest();
        }

        _context.Entry(comida).State = EntityState.Modified;

        try
        {
            {
                await _context.SaveChangesAsync();
            }    
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!_context.ComidasFavoritas.Any(e => e.Id == id))
            {
                return  NotFound();
            }
            throw;
        }
        
        return NoContent();
        
    }

    [HttpDelete("{id}")]
    
    
    public async Task<IActionResult> DeleteComida(int id)
    {
        var comida = await _context.ComidasFavoritas.FindAsync(id);
        if (comida == null)
        {
            return NotFound();
        }

        _context.ComidasFavoritas.Remove(comidas);
        await _context.SaveChangesAsync();

        return NoContent();

    }
    

}
}