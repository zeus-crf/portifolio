import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent, BadgeComponent } from '../../atoms';

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'design';
}

@Component({
  selector: 'app-skill-tag',
  standalone: true,
  imports: [IconComponent, BadgeComponent],
  template: `
    <div class="skill-tag">
      <app-icon [name]="getIconName()" size="sm"></app-icon>
      <app-badge [label]="skill.name" [variant]="getVariant()"></app-badge>
    </div>
  `,
  styleUrl: './skill-tag.component.scss',
})

export class SkillTagComponent {
  @Input() skill!: Skill;

    getVariant(): 'primary' | 'secondary' | 'success' | 'warning' | 'danger' {
    const variantMap = {
      frontend: 'primary',
      backend: 'secondary',
      tools: 'success',
      design: 'warning',
    } as const;

    return variantMap[this.skill.category];
  } 

   getIconName(): 'check' {
    return 'check'; // Pode expandir depois
  }
}
