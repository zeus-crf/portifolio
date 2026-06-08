import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav [class.scrolled]="scrolled" class="pf-nav">
      <div class="pf-nav-inner">

        <!-- Logo -->
        <a class="pf-logo" (click)="scrollTo('inicio')" style="cursor:pointer">MP</a>

        <!-- Links -->
        <div class="pf-nav-links">
          <a (click)="scrollTo('sobre')" style="cursor:pointer">Sobre</a>
          <a (click)="scrollTo('projetos')" style="cursor:pointer">Projetos</a>
          <a (click)="scrollTo('ferramentas')" style="cursor:pointer">Ferramentas</a>
          <a (click)="scrollTo('experiencia')" style="cursor:pointer">Experiência</a>
          <a (click)="scrollTo('contato')" style="cursor:pointer">Contato</a>
        </div>

        <!-- CTA -->
        <button class="pf-btn pf-btn-primary" (click)="scrollTo('contato')">Contato</button>

      </div>
    </nav>
  `,
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  scrolled = false;
  private router = inject(Router);

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 40;
  }

  async scrollTo(sectionId: string) {
    if (!this.router.url.startsWith('/home')) {
      await this.router.navigate(['/home']);
      setTimeout(() => this.smoothScroll(sectionId), 150);
    } else {
      this.smoothScroll(sectionId);
    }
  }

  private smoothScroll(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}