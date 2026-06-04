import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="max-w-6xl mx-auto px-4 py-24">
      <h1 class="text-4xl font-bold">Sobre</h1>
      <p class="text-slate-600 dark:text-slate-300 mt-4">Página de Sobre</p>
    </section>
  `,
})
export class AboutComponent {}