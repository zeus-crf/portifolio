import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from '../../shared/components/organisms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroSectionComponent],
  template: `
    <div>
      <app-hero-section></app-hero-section>
    </div>
  `,
})
export class HomeComponent {}