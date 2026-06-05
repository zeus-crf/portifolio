import { Component } from '@angular/core';
import { ButtonComponent, BadgeComponent, CardComponent, LinkComponent } from '../../shared/components/atoms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent, BadgeComponent, CardComponent, LinkComponent],
  template: `
    <section class="max-w-6xl mx-auto px-4 py-24">
      <h1 class="text-5xl font-bold text-gradient">Bem-vindo!</h1>
      
      <!-- Teste dos Atoms -->
      <div class="mt-8 space-y-6">
        
        <!-- Button -->
        <div>
          <h2 class="text-2xl font-bold mb-4">Buttons</h2>
          <div class="flex gap-4">
            <app-button label="Primary" variant="primary" (clicked)="onTest()"></app-button>
            <app-button label="Secondary" variant="secondary"></app-button>
            <app-button label="Outline" variant="outline"></app-button>
            <app-button label="Ghost" variant="ghost"></app-button>
          </div>
        </div>

        <!-- Badge -->
        <div>
          <h2 class="text-2xl font-bold mb-4">Badges</h2>
          <div class="flex gap-4">
            <app-badge label="Angular" variant="primary"></app-badge>
            <app-badge label="TypeScript" variant="secondary"></app-badge>
            <app-badge label="Tailwind" variant="success"></app-badge>
          </div>
        </div>

        <!-- Card -->
        <div>
          <h2 class="text-2xl font-bold mb-4">Cards</h2>
          <app-card [hoverable]="true">
            <h3 class="text-xl font-bold mb-2">Card Title</h3>
            <p class="text-slate-600 dark:text-slate-300">
              Este é um card reutilizável com conteúdo dinâmico.
            </p>
          </app-card>
        </div>

        <!-- Link -->
        <div>
          <h2 class="text-2xl font-bold mb-4">Links</h2>
          <div class="flex gap-4">
            <app-link label="Link Primary" variant="primary" [routerLink]="'/about'"></app-link>
            <app-link label="Link External" variant="secondary" href="https://angular.io" [external]="true"></app-link>
          </div>
        </div>

      </div>
    </section>
  `,
})
export class HomeComponent {
  onTest() {
    alert('Atom funcionando!');
  }
}