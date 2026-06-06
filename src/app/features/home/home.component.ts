import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent, AboutComponent } from '../../shared/components/organisms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroSectionComponent, AboutComponent],
  template: `
    <div>
      <app-hero-section></app-hero-section>
      <app-about></app-about>
    </div>
  `,
})
export class HomeComponent {}
