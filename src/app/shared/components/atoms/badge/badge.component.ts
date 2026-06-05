import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';


@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span [class]="badgeClasses">
      {{ label }}
    </span>
  `,
  styleUrl: './badge.component.scss',
})
export class BadgeComponent {

  @Input() label: string = 'Badge';
  @Input() variant: BadgeVariant = 'primary';

  get badgeClasses(): string {
    return `app-badge app-badge--${this.variant}`; 
  }
  

}
