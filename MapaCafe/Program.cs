using Microsoft.EntityFrameworkCore;
using MapaCafe.Data;

var builder = WebApplication.CreateBuilder(args);

// Exemplo usando usuário “mapauser” que tenha permissão no banco “mapacafe”
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection")
                      ?? "server=localhost;database=mapacafe;user=root;password=Carol";

builder.Services.AddDbContext<MapaCafeContext>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));

// ... o resto do Program.cs permanece igual


// 2) Registre os Controllers
builder.Services.AddControllers();

// 3) Habilite o Swagger (opcional, mas ajuda a testar via UI)
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// 4) Configure CORS para permitir chamadas do React (origem http://localhost:3000)
builder.Services.AddCors(options =>
{
    options.AddPolicy("ReactPolicy", policy =>
    {
        policy.WithOrigins("http://localhost:3000")  // porta padrão do Create React App
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

var app = builder.Build();

// 5) Configure o pipeline de middleware
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// 6) Aplique a política de CORS antes de MapControllers
app.UseCors("ReactPolicy");

// 7) Mapear rotas dos Controllers (CadastroController, etc.)
app.MapControllers();

// 8) (Opcional) rota de exemplo de weather, se você ainda quiser manter
app.MapGet("/weatherforecast", () =>
{
    var summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", 
        "Balmy", "Hot", "Sweltering", "Scorching"
    };

    var forecast = Enumerable.Range(1, 5).Select(index =>
        new WeatherForecast
        (
            DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            Random.Shared.Next(-20, 55),
            summaries[Random.Shared.Next(summaries.Length)]
        ))
        .ToArray();
    return forecast;
})
.WithName("GetWeatherForecast")
.WithOpenApi();

app.Run();


record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}
