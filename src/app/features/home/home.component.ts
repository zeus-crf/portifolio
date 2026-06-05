import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent, Project, SkillTagComponent, Skill, SocialLinksComponent } from '../../shared/components/molecules';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent, SkillTagComponent, SocialLinksComponent],
  template: `
    <section class="max-w-6xl mx-auto px-4 py-24">
      <h1 class="text-5xl font-bold text-gradient mb-12">Meu Portfólio</h1>

      <!-- Projects -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold mb-6">Projetos</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <app-project-card [project]="project1"></app-project-card>
          <app-project-card [project]="project2"></app-project-card>
        </div>
      </div>

      <!-- Skills -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold mb-6">Skills</h2>
        <div class="flex flex-wrap gap-4">
          <app-skill-tag [skill]="skill1"></app-skill-tag>
          <app-skill-tag [skill]="skill2"></app-skill-tag>
          <app-skill-tag [skill]="skill3"></app-skill-tag>
        </div>
      </div>

      <!-- Social Links -->
      <div>
        <h2 class="text-3xl font-bold mb-6">Me encontre</h2>
        <app-social-links></app-social-links>
      </div>
    </section>
  `,
})
export class HomeComponent {
  project1: Project = {
    id: '1',
    title: 'E-commerce Platform',
    description: 'Plataforma de e-commerce completa com Angular e Node.js',
    image: 'https://via.placeholder.com/400x200',
    tags: ['Angular', 'Node.js', 'MongoDB'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
  };

  project2: Project = {
    id: '2',
    title: 'Dashboard Analytics',
    description: 'Dashboard de análise de dados em tempo real',
    image: 'https://via.placeholder.com/400x200',
    tags: ['Angular', 'D3.js', 'TypeScript'],
    githubUrl: 'https://github.com/example',
  };

  skill1: Skill = { name: 'Angular', category: 'frontend' };
  skill2: Skill = { name: 'Node.js', category: 'backend' };
  skill3: Skill = { name: 'Figma', category: 'design' };
}