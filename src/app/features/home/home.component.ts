import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent, AboutComponent} from '../../shared/components/organisms';
import { ProjectsComponent } from '../projects/projects.component';
import { StackComponent } from '../../shared/components/organisms/stack-section/stack.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroSectionComponent, AboutComponent, ProjectsComponent, StackComponent],
  template: `
    <div>
      <app-hero-section></app-hero-section>
      <app-about></app-about>
      <app-projects></app-projects>
      <app-stack></app-stack>
    </div>
  `,
})
export class HomeComponent {}
