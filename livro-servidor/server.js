const express = require("express");
const cors = require("cors");
const livroRouter = require("./rotas/livros");

const app = express();
const PORT = 3030;

// Configurações do servidor
app.use(cors()); // Ativa o CORS
app.use(express.json()); // Permite o envio de JSON nas requisições

// Rotas
app.use("/livros", livroRouter); // Rota para o gerenciamento de livros

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
