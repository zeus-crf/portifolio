import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
   template: `
    <div [class]="cardClasses">
      <ng-content></ng-content>
    </div>
  `,
  styleUrl: './card.component.scss',
})
export class CardComponent {

  @Input() padding: 'sm' | 'md' | 'lg' = 'md';
  @Input() hoverable: boolean = false;

  get cardClasses(): string {
    const base = 'app-card';
    const paddingClass = `app-card--padding-${this.padding}`;
    const hoverClass = this.hoverable ? 'app-card--hoverable' : '';

    return `${base} ${paddingClass} ${hoverClass}`;
  }

}
