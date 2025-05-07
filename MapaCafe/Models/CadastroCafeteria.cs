_namespace MapaCafe.Models
public class CadastroCafeteria{
    public int id{ get; set; };
    public string nomeCafeteria{ get; set; } = string.Empty;
    public string ruaCafeteria{ get; set; } = string.Empty;
    public string? complementoEndereco{ get; set; };
    public string bairroCafeteria{get; set; } = string.Empty;
    public int numeroEndereco{get; set; };
    public string? cepEndereco{get; set;};
    public string comidasFavoritas{ get; set; } = string.Empty; 
    public int avaliacaoCafeteria{get; set; };
    public string observacoesCafeteria{get; set; } = string.Empty;
}