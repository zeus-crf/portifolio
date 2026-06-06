import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './shared/components/organisms/header/header.component';
import { FooterComponent } from './shared/components/organisms/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    FooterComponent,
  ],
  template: `
    <div class="flex flex-col min-h-screen bg-dark-900">
      <!-- Header Fixo -->
      <app-header></app-header>

      <!-- Conteúdo Principal -->
      <main class="flex-1">
        <router-outlet></router-outlet>
      </main>

      <!-- Footer -->
      <app-footer></app-footer>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  title = 'portfolio';
}