import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="sticky top-0 z-50 bg-white dark:bg-slate-800 shadow-md">
      <nav class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center">
          <span class="text-xl font-bold text-primary-500">Portfolio</span>
        </div>

        <!-- Menu -->
        <ul class="flex gap-8 items-center">
          <li><a routerLink="/home" routerLinkActive="text-primary-500" [routerLinkActiveOptions]="{ exact: true }" class="hover:text-primary-500 transition-colors">Home</a></li>
          <li><a routerLink="/about" routerLinkActive="text-primary-500" class="hover:text-primary-500 transition-colors">Sobre</a></li>
          <li><a routerLink="/projects" routerLinkActive="text-primary-500" class="hover:text-primary-500 transition-colors">Projetos</a></li>
          <li><a routerLink="/contact" routerLinkActive="text-primary-500" class="hover:text-primary-500 transition-colors">Contato</a></li>
        </ul>
      </nav>
    </header>
  `,
})
export class HeaderComponent {}