import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type IconName = 'github' | 'linkedin' | 'twitter' | 'mail' | 'arrow-right' | 'check';
type IconSize = 'sm' | 'md' | 'lg' | 'xl';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span [class]="iconClasses" [attr.aria-hidden]="true">
      <svg [attr.viewBox]="viewBox" [attr.data-icon]="name">
        <use [attr.xlink:href]="'#icon-' + name"></use>
      </svg>
    </span>
  `,
  styleUrl: './icon.component.scss',
})
export class IconComponent {
  @Input() name: IconName = 'check';
  @Input() size: IconSize = 'md';

  viewBox = '0 0 24 24';

  get iconClasses(): string {
    return `app-icon app-icon--${this.size}`;
  }
}