import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent, HeroData } from '../../shared/components/organisms';
import { ProjectCardComponent, SkillTagComponent } from '../../shared/components/molecules';
import { Project, Skill } from '../../shared/components/molecules';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroSectionComponent,
    ProjectCardComponent,
    SkillTagComponent,
  ],
  template: `
    <!-- HERO SECTION -->
    <app-hero-section [heroData]="heroData"></app-hero-section>

    <!-- SEÇÃO DE PROJETOS -->
    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold mb-4">Projetos em Destaque</h2>
        <p class="text-slate-600 dark:text-slate-400 text-lg">
          Alguns dos meus trabalhos recentes
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <app-project-card [project]="project1"></app-project-card>
        <app-project-card [project]="project2"></app-project-card>
      </div>
    </section>

    <!-- SEÇÃO DE SKILLS -->
    <section class="bg-slate-100 dark:bg-slate-800 py-24">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold mb-4">Minhas Habilidades</h2>
          <p class="text-slate-600 dark:text-slate-400 text-lg">
            Tecnologias que domino
          </p>
        </div>

        <div class="flex flex-wrap justify-center gap-4">
          <app-skill-tag *ngFor="let skill of skills" [skill]="skill"></app-skill-tag>
        </div>
      </div>
    </section>
  `,
})
export class HomeComponent {
  // ===== HERO DATA =====
  heroData: HeroData = {
    title: 'Miguel Developer',
    subtitle: 'Full Stack Developer',
    description:
      'Desenvolvedor apaixonado por criar experiências digitais incríveis com Angular, TypeScript e muito café ☕',
    ctaText: 'Ver Meus Projetos',
    ctaLink: '#projetos',
    backgroundImage:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80',
    showSecondaryButton: true,
    secondaryCtaText: 'Saiba Mais Sobre Mim',
  };

  // ===== PROJETOS =====
  project1: Project = {
    id: '1',
    title: 'E-commerce Platform',
    description: 'Plataforma de e-commerce completa com Angular e Node.js',
    image: 'https://via.placeholder.com/400x250?text=E-commerce',
    tags: ['Angular', 'Node.js', 'MongoDB'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
  };

  project2: Project = {
    id: '2',
    title: 'Dashboard Analytics',
    description: 'Dashboard de análise de dados em tempo real com gráficos interativos',
    image: 'https://via.placeholder.com/400x250?text=Dashboard',
    tags: ['Angular', 'D3.js', 'Firebase'],
    githubUrl: 'https://github.com/example',
  };

  // ===== SKILLS =====
  skills: Skill[] = [
    { name: 'Angular', category: 'frontend' },
    { name: 'TypeScript', category: 'frontend' },
    { name: 'Tailwind CSS', category: 'frontend' },
    { name: 'Node.js', category: 'backend' },
    { name: 'MongoDB', category: 'backend' },
    { name: 'Figma', category: 'design' },
    { name: 'Git', category: 'tools' },
    { name: 'Docker', category: 'tools' },
  ];
}