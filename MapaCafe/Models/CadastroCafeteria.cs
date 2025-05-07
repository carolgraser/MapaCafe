_namespace MapaCafe.Models
public class CadastroCafeteria{
    public int id{ get; set; };
    public string nomeCafeteria{ get; set; } = string.Empty;
    public string localizacaoCafeteria{ get; set; } = string.Empty;
    public string comidasFavoritas{ get; set; } = string.Empty; 
    public int avaliacaoCafeteria{get; set; };
    public string observacoesCafeteria{get; set; } = string.Empty;
}