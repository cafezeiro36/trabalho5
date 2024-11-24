const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/livraria")
  .then(() => console.log("Conexão com o MongoDB bem-sucedida!"))
  .catch((error) => console.error("Erro ao conectar ao MongoDB:", error));

module.exports = mongoose;
