// src/app/livro-dados/livro-dados.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ControleLivrosService } from '../controle-livros.service';
import { Livro } from '../livro';

@Component({
  selector: 'app-livro-dados',
  standalone: true,
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css'],
})
export class LivroDadosComponent {
  livro: Livro = new Livro();
  autores: string = '';

  constructor(
    private controleLivros: ControleLivrosService,
    private router: Router
  ) {}

  incluir(): void {
    this.livro.autores = this.autores.split('\n');
    this.controleLivros.incluir(this.livro).then((sucesso) => {
      if (sucesso) {
        this.router.navigateByUrl('/lista'); // Redireciona para a lista após inclusão
      }
    });
  }
}
