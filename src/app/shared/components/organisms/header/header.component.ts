import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav [class.scrolled]="scrolled" class="pf-nav">
      <div class="pf-nav-inner">

        <!-- Logo -->
        <a class="pf-logo" routerLink="/">MP</a>

        <!-- Links -->
        <div class="pf-nav-links">
          <a routerLink="/sobre">Sobre</a>
          <a routerLink="/projetos">Projetos</a>
          <a routerLink="/ferramentas">Ferramentas</a>
          <a routerLink="/experiencia">Experiência</a>
          <a routerLink="/contato">Contato</a>
        </div>

        <!-- CTA -->
        <button class="pf-btn pf-btn-primary" routerLink="/contato">Contato</button>

      </div>
    </nav>
  `,
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  scrolled = false;

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 40;
  }
}