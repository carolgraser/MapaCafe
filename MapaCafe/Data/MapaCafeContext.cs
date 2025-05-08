using Microsoft.EntityFrameworkCore;
using MapaCafe.Models;

namespace MapaCafe.Data
{
    public class MapaCafeContext : DbContext
    {
        public MapaCafeContext(DbContextOptions<MapaCafeContext> options)
            : base(options)
        {
        }

        public DbSet<CadastroCafeteria> Cafeterias { get; set; }
        public DbSet<CadastroUsuario> Usuarios { get; set; }
        public DbSet<PerfilUsuario> Perfis { get; set; }

     
        public DbSet<ComidaCafeteria> ComidasFavoritas { get; set; }
        public DbSet<BebidaCafeteria> BebidasFavoritas { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);


            modelBuilder.Entity<DadosUsuario>().HasKey(u => u.id);
            modelBuilder.Entity<CadastroUsuario>().HasBaseType<DadosUsuario>();
            modelBuilder.Entity<PerfilUsuario>().HasBaseType<DadosUsuario>();

            
            modelBuilder.Entity<CadastroCafeteria>()
                .HasOne(c => c.Usuario)
                .WithMany(u => u.CafeteriasCadastradas)
                .HasForeignKey(c => c.UsuarioId);

            
            modelBuilder.Entity<ComidaCafeteria>()
                .HasOne(cf => cf.Cafeteria)
                .WithMany(c => c.ComidasFavoritas)
                .HasForeignKey(cf => cf.CafeteriaId);

            
            modelBuilder.Entity<BebidaCafeteria>()
                .HasOne(bf => bf.Cafeteria)
                .WithMany(c => c.BebidasFavoritas)
                .HasForeignKey(bf => bf.CafeteriaId);
        }
    }
}