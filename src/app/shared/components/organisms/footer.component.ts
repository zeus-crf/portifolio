import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-dark-900 text-white py-8">
      <div class="max-w-6xl mx-auto px-4 text-center">
        <p>&copy; 2026 Seu Portfolio. Desenvolvido com Angular + Tailwind.</p>
      </div>
    </footer>
  `,
})
export class FooterComponent {}