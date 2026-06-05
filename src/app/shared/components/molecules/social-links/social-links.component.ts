import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkComponent } from '../../atoms';

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-social-links',
  standalone: true,
  imports: [CommonModule, LinkComponent],
  template: `
    <div class="social-links">
      <app-link 
        *ngFor="let link of links"
        [label]="link.name"
        [href]="link.url"
        variant="primary"
        [external]="true"
      ></app-link>
    </div>
  `,
  styleUrl: './social-links.component.scss',
})
export class SocialLinksComponent {
  @Input() links: SocialLink[] = [
    { name: 'GitHub', url: 'https://github.com', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
    { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
  ];
}