import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: string;
  cat: string;
  title: string;
  url: string;
  desc: string;
  stack: string[];
  featured?: boolean;
  demoUrl?: string;
  repoUrl?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  tabs = ['Todos', 'Full-Stack', 'Backend', 'Frontend'];
  activeTab = 'Todos';

  private allProjects: Project[] = [
    {
      id: '01',
      cat: 'Full-Stack',
      title: 'Clínica de Estética 2.0',
      url: 'clinica.app',
      desc: 'Plataforma completa de agendamento e gestão com API Spring Boot e frontend Angular.',
      stack: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL'],
      featured: true,
      demoUrl: '#',
      repoUrl: 'https://github.com/zeus-crf',
    },
    {
      id: '02',
      cat: 'Backend',
      title: 'Config Server',
      url: 'config.dev',
      desc: 'Servidor de configuração centralizado para microsserviços.',
      stack: ['Java', 'Spring Cloud'],
      repoUrl: 'https://github.com/zeus-crf',
    },
    {
      id: '03',
      cat: 'Frontend',
      title: 'Dashboard Analytics',
      url: 'dash.app',
      desc: 'Painel interativo de métricas em tempo real.',
      stack: ['Angular', 'RxJS', 'TypeScript'],
      repoUrl: 'https://github.com/zeus-crf',
    },
    {
      id: '04',
      cat: 'Full-Stack',
      title: 'API de Pagamentos',
      url: 'pay.dev',
      desc: 'Gateway de pagamentos com fila assíncrona.',
      stack: ['Java', 'RabbitMQ', 'Redis'],
      repoUrl: 'https://github.com/zeus-crf',
    },
  ];

  get filtered(): Project[] {
    if (this.activeTab === 'Todos') return this.allProjects;
    return this.allProjects.filter(p => p.cat === this.activeTab);
  }

  get featured(): Project | undefined {
    return this.filtered.find(p => p.featured) ?? this.filtered[0];
  }

  get rest(): Project[] {
    const feat = this.featured;
    return this.filtered.filter(p => p !== feat);
  }

  setTab(tab: string) {
    this.activeTab = tab;
  }
}
