const express = require("express");
const cors = require("cors");
const livroRouter = require("./rotas/livros");

const app = express();
app.use(cors()); // Configurar CORS
app.use(express.json()); // Middleware para JSON
app.use("/livros", livroRouter); // Configurar rota para livros

module.exports = app;
