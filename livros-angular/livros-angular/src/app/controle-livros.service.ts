// src/app/controle-livros.service.ts
import { Injectable } from '@angular/core';
import { Livro } from './livro';

const baseURL = "http://localhost:3030/livros"; // URL do backend

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  // Método para obter todos os livros
  async obterLivros(): Promise<Livro[]> {
    const resposta = await fetch(baseURL, { method: 'GET' });
    const livros = await resposta.json();
    return livros.map((livro: any) => ({
      _id: livro._id,
      codEditora: livro.codEditora,
      titulo: livro.titulo,
      resumo: livro.resumo,
      autores: livro.autores,
    }));
  }

  // Método para incluir um novo livro
  async incluir(livro: Livro): Promise<boolean> {
    const livroMongo = { ...livro, _id: null };
    const resposta = await fetch(baseURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(livroMongo),
    });
    return resposta.ok;
  }

  // Método para excluir um livro
  async excluir(codigo: string): Promise<boolean> {
    const resposta = await fetch(`${baseURL}/${codigo}`, { method: 'DELETE' });
    return resposta.ok;
  }
}
