import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <section class="max-w-6xl mx-auto px-4 py-24">
      <h1 class="text-5xl font-bold text-gradient">Bem-vindo ao meu Portfólio</h1>
      <p class="text-xl text-slate-600 dark:text-slate-300 mt-4">Esta é a página home</p>
    </section>
  `,
})
export class HomeComponent {}