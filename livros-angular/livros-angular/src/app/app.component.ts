// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LivroListaComponent } from './livro-lista/livro-lista.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, LivroListaComponent]  // Usando 'imports' e não 'import'
})
export class AppComponent {
  title = 'Catálogo de Livros';
}
