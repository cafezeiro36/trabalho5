// src/app/livro.ts
export class Livro {
  _id: string; // Compatível com o MongoDB
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];

  constructor() {
    this._id = ""; // Inicializa com string vazia
    this.codEditora = 0;
    this.titulo = "";
    this.resumo = "";
    this.autores = [];
  }
}
