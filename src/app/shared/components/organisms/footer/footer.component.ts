import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-dark-900 border-t border-slate-800/30 mt-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <!-- Esquerda -->
          <div>
            <span class="text-lg font-bold text-white border border-slate-600 px-3 py-1 rounded inline-block">
              MP
            </span>
            <p class="text-slate-400 mt-4 text-sm">
              © 2026 Miguel Pereira · Full-Stack Developer
            </p>
          </div>

          <!-- Direita - Links -->
          <div class="flex gap-8 justify-end">
            <a href="#" class="text-slate-400 hover:text-primary-500 transition-colors">Sobre</a>
            <a href="#" class="text-slate-400 hover:text-primary-500 transition-colors">Projetos</a>
            <a href="#" class="text-slate-400 hover:text-primary-500 transition-colors">Ferramentas</a>
            <a href="#" class="text-slate-400 hover:text-primary-500 transition-colors">Experiência</a>
            <a href="#" class="text-slate-400 hover:text-primary-500 transition-colors">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {}