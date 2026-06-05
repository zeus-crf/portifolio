import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


type LinkVariant = 'primary' | 'secondary' | 'underline';
@Component({
  selector: 'app-link',
  imports: [CommonModule, RouterModule],
  template: `
    <a 
      [class]="linkClasses"
      [routerLink]="routerLink"
      [href]="href"
      [target]="external ? '_blank' : '_self'"
      [rel]="external ? 'noopener noreferrer' : ''"
    >
      {{ label }}
    </a>
  `,
  styleUrl: './link.component.scss',
})
export class LinkComponent {

  @Input() label: string = 'Link';
  @Input() variant: LinkVariant = 'primary';
  @Input() routerLink: string | string[] | null = null;
  @Input() href: string | null = null;
  @Input() external: boolean = false;

  get linkClasses(): string {
    return `app-link app-link--${this.variant}`;
  }

}
