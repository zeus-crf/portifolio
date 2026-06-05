import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../atoms';
import { CommonModule } from '@angular/common';


export interface HeroData {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink?: string;
  backgroundImage?: string;
  showSecondaryButton?: boolean;
  secondaryCtaText?: string;
}


@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  @Input() heroData!: HeroData;

  // Para animação em cascata
  getAnimationDelay(index: number): string {
    return `${index * 0.1}s`;
  }

  onCtaClick() {
    if (this.heroData.ctaLink) {
      window.location.href = this.heroData.ctaLink;
    }
  }
}