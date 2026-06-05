import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent, BadgeComponent, ButtonComponent } from '../../atoms';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, CardComponent, BadgeComponent, ButtonComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})

export class ProjectCardComponent {

  @Input() project! : Project;
  

  get hasLinks(): boolean{
    return !!(this.project?.liveUrl  || this.project?.githubUrl);
  }

}
