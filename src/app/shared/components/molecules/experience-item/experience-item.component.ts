import {Component, Input} from '@angular/core';
import {CardComponent, BadgeComponent } from '../../atoms';

export interface Experience {
    id: string;
    title: string;
    company: string;
    description: string;
    period: string;
    technologies: string[];
}

@Component({
    selector: 'app-experience-item',
    standalone: true,
    imports: [CardComponent, BadgeComponent],
    template: `
    <app-card padding="lg">
      <div class="flex justify-between items-start mb-2">
        <div>
          <h3 class="text-xl font-bold">{{ experience.title }}</h3>
          <p class="text-slate-600 dark:text-slate-400">{{ experience.company }}</p>
        </div>
        <app-badge [label]="experience.period" variant="secondary"></app-badge>
      </div>

      <p class="text-slate-600 dark:text-slate-300 mb-4">
        {{ experience.description }}
      </p>

      <div class="flex flex-wrap gap-2">
        <app-badge 
          *ngFor="let tech of experience.technologies"
          [label]="tech"
          variant="primary"
        ></app-badge>
      </div>
    </app-card>
  `,
})

export class ExperienceItemComponent{
    @Input() experience! : Experience;
}