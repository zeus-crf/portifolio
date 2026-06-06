import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

export interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  category: 'full-stack' | 'backend' | 'frontend';
  featured?: boolean;
}

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss',
})

export class ProjectsComponents {

    selectedFilter = 'todos';
  projects: Project[] = [
    {
      id: '1',
      number: '#01',
      title: 'Clínica de Estética 2.0',
      description: 'Plataforma completa de agendamento e gestão com API Spring Boot e frontend Angular.',
      image: '/assets/projects/clinica.jpg',
      tags: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL'],
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      category: 'full-stack',
      featured: true,
    },
    {
      id: '2',
      number: '#02',
      title: 'Config Server',
      description: 'Servidor de configuração centralizado para microserviços.',
      tags: ['Java', 'Spring Cloud'],
      githubUrl: 'https://github.com/example',
      category: 'backend',
    },
    {
      id: '3',
      number: '#03',
      title: 'Dashboard Analytics',
      description: 'Painel interativo de métricas em tempo real.',
      tags: ['Angular', 'RxJS', 'TypeScript'],
      category: 'frontend',
    },
  ];

  get filterOptions() {
    return ['todos', 'full-stack', 'backend', 'frontend'];
  }

  get filteredProjects() {
    if (this.selectedFilter === 'todos') return this.projects;
    return this.projects.filter(p => p.category === this.selectedFilter);
  }

  setFilter(filter: string) {
    this.selectedFilter = filter;
  }

  getFilterLabel(filter: 'todos' |'full-stack' | 'backend' | 'frontend' ): string {
    const labels = {
      'todos': 'Todos',
      'full-stack': 'Full-Stack',
      'backend': 'Backend',
      'frontend': 'Frontend',
    };
    return labels[filter] || filter;
  }
}