# API Express + MongoDB

Uma API simples em Node.js usando Express e MongoDB via Mongoose para gerenciar livros e autores.

## 🚀 Funcionalidades

- CRUD de autores
- CRUD de livros
- Livro com autor embutido no documento
- Respostas em JSON

## 📁 Estrutura do projeto

- `server.js` - entrypoint do servidor
- `src/app.js` - configuração principal do Express
- `src/config/dbConnect.js` - conexão com MongoDB
- `src/routes/` - rotas da API
  - `autoresRoutes.js`
  - `livrosRoutes.js`
  - `index.js`
- `src/controller/` - controladores das rotas
  - `autorController.js`
  - `livroController.js`
- `src/models/` - modelos Mongoose
  - `Autores.js`
  - `Livro.js`

## 🧩 Tecnologias

- Node.js
- Express
- MongoDB
- Mongoose
- dotenv
- nodemon

## ⚙️ Instalação

1. Clone o projeto:

```bash
git clone <seu-repositorio> express-mongo
cd express-mongo
```

2. Instale as dependências:

```bash
npm install
```

3. Configure o `.env` (se necessário):

```env
PORT=3000
MONGODB_URL=mongodb://localhost:27017/nome-do-banco
```

4. Inicie o servidor:

```bash
npm start
```

## 🌐 Rotas da API

### Autores

- `GET /autores`
  - Lista todos autores
- `POST /autores`
  - Cadastra um novo autor
  - Exemplo de body:
    ```json
    {
      "nome": "Hélio Levi",
      "nacionalidade": "Do céu"
    }
    ```
- `GET /autores/:id`
  - Busca autor por ID
- `PUT /autores/:id`
  - Atualiza autor por ID
- `DELETE /autores/:id`
  - Remove autor por ID

### Livros

- `GET /livros`
  - Lista todos livros
- `POST /livros`
  - Cadastra um novo livro
  - Exemplo de body:
    ```json
    {
      "titulo": "Teste de criação pelo id do autor",
      "autor": "<ID_DO_AUTOR>"
    }
    ```
- `GET /livros/:id`
  - Busca livro por ID
- `PUT /livros/:id`
  - Atualiza livro por ID
- `DELETE /livros/:id`
  - Remove livro por ID

## 💡 Dicas importantes

- Para cadastrar livro, use o _id_ de um autor já existente.
- Se a rota retornar `[]` no `GET /autores`, significa que ainda não há nenhum autor cadastrado.
- Se a rota retornar erro 500 no cadastro de livro, verifique se o `autor` existe e se o ID está correto.

## ✅ Execução

Após iniciar o servidor, acesse:

- `http://localhost:3000/autores`
- `http://localhost:3000/livros`

---
