const express = require("express");
const { obterLivros, incluir, excluir } = require("../modelo/livro-dao");
const router = express.Router();

// Rota GET: Retorna todos os livros
router.get("/", async (req, res) => {
  try {
    const livros = await obterLivros();
    res.json(livros);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Rota POST: Adiciona um novo livro
router.post("/", async (req, res) => {
  try {
    await incluir(req.body);
    res.json({ message: "Inclusão efetuada" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Rota DELETE: Remove um livro pelo _id
router.delete("/:id", async (req, res) => {
    try {
      const resultado = await excluir(req.params.id); // A função excluir no DAO deve funcionar corretamente
      if (resultado.deletedCount === 0) {
        return res.status(404).json({ message: "Livro não encontrado" });
      }
      res.json({ message: "Exclusão efetuada" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  

module.exports = router;
