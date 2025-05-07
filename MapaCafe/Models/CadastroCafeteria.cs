namespace MapaCafe.Models
{
    public class CadastroCafeteria
    {
        public int id { get; set; }
        public string nomeCafeteria { get; set; } = string.Empty;
        public string ruaCafeteria { get; set; } = string.Empty;
        public string? complementoEndereco { get; set; }
        public string bairroCafeteria { get; set; } = string.Empty;
        public int numeroEndereco { get; set; }
        public string? cepEndereco { get; set; }

        public int avaliacaoCafeteria { get; set; }
        public string observacoesCafeteria { get; set; } = string.Empty;

        public int UsuarioId { get; set; }
        public CadastroUsuario Usuario { get; set; } = null!;

        public int CadastroUsuarioId { get; set; }
        public CadastroUsuario? CadastroUsuario { get; set; }

        public ICollection<ComidaCafeteria> ComidasFavoritas { get; set; } = new List<ComidaCafeteria>();
        public ICollection<BebidaCafeteria> BebidasFavoritas { get; set; } = new List<BebidaCafeteria>();
    }    
}

