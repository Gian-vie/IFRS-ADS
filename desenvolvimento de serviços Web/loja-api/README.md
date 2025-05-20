# 🛒 Loja API
API RESTful simples para cadastro e gerenciamento de produtos, desenvolvida com
Node.js, Express e MySQL.
---
## 🚀 Funcionalidades
- Cadastrar novos produtos
- Listar todos os produtos
- Atualizar produtos existentes
- Excluir produtos
- Validação de dados (nome, preço, estoque)
---
## 🛠 Tecnologias
- Node.js
- Express
- MySQL
- ESLint
- Prettier
- REST Client (testes no VS Code)
---
## ⚙️ Como executar
1. Clone o repositório:
 ```bash
 git clone https://github.com/Gian-vie/IFRS-ADS.git
 cd '.\desenvolvimento de serviços Web\loja-api\'
 2. Instale as dependências:
 ```bash
 npm install
 ```
3. Configure o banco de dados:
 - Rode os scripts:
 - `create_database.sql`
 - `create_tables.sql`
 - `seed_data.sql`
 - Crie um arquivo `.env` com:
 ```env
 DB_HOST=localhost
 DB_USER=root
 DB_PASS=sua_senha
 DB_NAME=loja_db
 ```
4. Inicie o servidor:
 ```bash
 npm run dev
 ```
5. Teste os endpoints com o arquivo:
 ```
 tests/products_api_test.rest
 ```
---
## 📁 Estrutura resumida
```
src/
├── config/ # Conexão com o banco
├── controllers/ # Lógica das requisições
├── models/ # Queries SQL
├── services/ # Regras de negócio
├── routes/ # Rotas da API
├── middlewares/ # Tratamento de erros
├── utils/ # Validações
└── app.js # App Express
```
---
## 🧹 Padrões de Código
- ESLint + Prettier integrados
- Formatado automaticamente ao salvar
---
## 📜 Licença
Uso livre para fins educacionais e profissionais.