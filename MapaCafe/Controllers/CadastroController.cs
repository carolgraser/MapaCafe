using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MapaCafe.Data;
using MapaCafe.Models;

namespace MapaCafe.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CadastroController : ControllerBase
    {
        private readonly MapaCafeContext _context;

        public CadastroController(MapaCafeContext context)
        {
            _context = context;
        }

        // GET: api/Cadastro
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CadastroCafeteria>>> GetCafeteria()
        {
            return await _context.Cafeterias.ToListAsync();
        }

        // GET: api/Cadastro/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CadastroCafeteria>> GetCafeteria(int id)
        {
            var cafeteria = await _context.Cafeterias.FindAsync(id);

            if (cafeteria == null)
                return NotFound();

            return cafeteria;
        }

        // POST: api/Cadastro
        [HttpPost]
        public async Task<ActionResult<CadastroCafeteria>> PostCafeteria(CadastroCafeteria cafeteria)
        {
            _context.Cafeterias.Add(cafeteria);
            await _context.SaveChangesAsync();

            // Este NamedGet refere-se ao método GetCafeteria(int id) acima
            return CreatedAtAction(nameof(GetCafeteria), new { id = cafeteria.Id }, cafeteria);
        }

        // PUT: api/Cadastro/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCafeteria(int id, CadastroCafeteria cafeteria)
        {
            if (id != cafeteria.Id)
                return BadRequest();

            _context.Entry(cafeteria).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.Cafeterias.Any(e => e.Id == id))
                    return NotFound();
                throw;
            }

            return NoContent();
        }

        // DELETE: api/Cadastro/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCafeteria(int id)
        {
            var cafeteria = await _context.Cafeterias.FindAsync(id);
            if (cafeteria == null)
                return NotFound();

            _context.Cafeterias.Remove(cafeteria);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
