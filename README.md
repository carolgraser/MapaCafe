# 📚 MapaCafe

> Mapa Café

## 🧾 O Mapa Café é uma plataforma web interativa desenvolvida com o objetivo de conectar amantes de café a experiências únicas em cafeterias. O site permite aos usuários descobrir cafeterias aconchegantes e charmosas, com base em localização, avaliações e preferências pessoais. Além da descoberta de novos locais, os usuários podem registrar memórias de suas visitas, incluindo notas e comentários, criando um diário personalizado de experiências. Também é possível avaliar as cafeterias visitadas, criar uma lista personalizada dos seus lugares favoritos, facilitando futuras visitas ou recomendações. O Mapa Café valoriza tanto a experiência sensorial do café quanto os aspectos sociais e emocionais das visitas às cafeterias, oferecendo uma ferramenta completa para explorar e organizar essa paixão.

Explique o **enredo ou contexto** onde essa API se aplica. Por exemplo:

> Esta API simula a gestão de experiências em cafeterias. Permite cadastrar cafeterias, registrar visitas, avaliações e criar listas personalizadas de locais favoritos."

---

## 👥 Integrantes da Dupla

- Carolina Cochlar Graser - [carolgraser](https://github.com/carolgraser)
- Erik Santiago Piana - [ErikArsego](https://github.com/ErikArsego)

---

## 🛠️ Tecnologias Utilizadas

- **Linguagem:** C# (.NET 8)
- **Framework:** ASP.NET Core
- **ORM:** Entity Framework Core
- **Banco de Dados:** MySQL
- **Front-end:** React
- **Versionamento:** Git + GitHub

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

- [.NET SDK 8.0+](https://dotnet.microsoft.com/en-us/download)
- MySQL instalado
- Git instalado
- Entity Framework Core
- dotnet add package Microsoft.EntityFrameworkCore --version 7.0.7
- dotnet add package Microsoft.EntityFrameworkCore.Tools --version 7.0.7
- dotnet add package Pomelo.EntityFrameworkCore.MySql --version 7.0.0
- Node JS (https://nodejs.org/pt)
- Npm install antd
- Npm install @ant-design/icons

### Passos

```bash
# 1. Clone o repositório
git clone https://github.com/carolgraser/MapaCafe.git

# 2. Acesse a pasta do projeto
cd .\MapaCafe\MapaCafe

# 3. Baixar o pacote EntityFrameworkCore, e execute os seguintes comandos:
dotnet add package Microsoft.EntityFrameworkCore --version 7.0.7
dotnet add package Microsoft.EntityFrameworkCore.Tools --version 7.0.7
dotnet add package Pomelo.EntityFrameworkCore.MySql --version 7.0.0

# 4. Atualize a senha do Banco de Dados no seguinte arquivo:
cd .\MapaCafe\MapaCafe\appsettings.json

# 5. Execute o Migrations no terminal:
dotnet ef migrations add InitialCreate
dotnet ef database update

# 6. Rode o Backend
dotnet run

# 7. Abra um novo terminal e acesse a pasta do frontend
 cd \MapaCafe\MapaCafe\frontend

# 8. Baixe React, com os seguintes comandos no terminal:
npm install antd
npm install @ant-design/icons

# 9. Rode o Frontend
npm start