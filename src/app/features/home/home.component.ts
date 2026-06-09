import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent, AboutComponent} from '../../shared/components/organisms';
import { ProjectsComponent } from '../projects/projects.component';
import { StackComponent } from '../../shared/components/organisms/stack-section/stack.component';
import { ExperienceComponent } from '../../shared/components/organisms/experience-section/experience.component';
import { EducationComponent } from '../../shared/components/organisms/education-section/education.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroSectionComponent, AboutComponent, ProjectsComponent, StackComponent, ExperienceComponent, EducationComponent, ContactComponent],
  template: `
    <div>
      <app-hero-section></app-hero-section>
      <app-about></app-about>
      <app-projects></app-projects>
      <app-stack></app-stack>
      <app-experience></app-experience>
      <app-education></app-education>
      <app-contact></app-contact>
    </div>
  `,
})
export class HomeComponent {}
