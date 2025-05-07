namespace MapaCafe.Models
{
    public class BebidaCafeteria
    {
        public int Id { get; set; }
        public string Nome { get; set; } = string.Empty;

        public int CafeteriaId { get; set; }
        public CadastroCafeteria Cafeteria { get; set; } = null!;
    }    
}
