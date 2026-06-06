import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  template: `
    <footer class="pf-footer">
      <span class="pf-logo-sm">MP</span>
      <span class="pf-foot-copy">© 2026 Miguel Pereira · Full-Stack Developer</span>
      <nav class="pf-foot-links">
        <a routerLink="/sobre">Sobre</a>
        <a routerLink="/projetos">Projetos</a>
        <a routerLink="/ferramentas">Ferramentas</a>
        <a routerLink="/experiencia">Experiência</a>
        <a routerLink="/contato">Contato</a>
      </nav>
    </footer>
  `,
})
export class FooterComponent {}
