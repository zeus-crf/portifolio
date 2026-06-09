import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PfRevealDirective } from '../../shared/directives/pf-reveal.directive';

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
  imagem?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, PfRevealDirective],
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
      title: 'Clínica de Estética - Renata Lopes',
      url: 'https://www.clinicarenatalopes.com',
      desc: 'Plataforma completa de agendamento e gestão com API Spring Boot e frontend Angular.',
      stack: ['Java', 'Spring Boot', 'Angular', 'MySQL'],
      featured: true,
      repoUrl: 'https://github.com/zeus-crf',
      demoUrl: 'https://www.clinicarenatalopes.com',
      imagem: '/assets/clinica_site.png',
    },
    {
      id: '02',
      cat: 'Backend',
      title: 'Config Server',
      url: 'config.dev',
      desc: 'Servidor de configuração centralizado para microsserviços.',
      stack: ['Java', 'Spring Boot', 'Spring Cloud'],
      repoUrl: 'https://github.com/zeus-crf/config-server',
      demoUrl: 'https://github.com/zeus-crf/config-server'
    },
    {
      id: '03',
      cat: 'Backend',
      title: 'Service registry',
      url: 'service-registry.app',
      desc: 'Sistema de registro de microsserviços',
      stack: ['Java', 'Spring Boot', 'Spring Cloud'],
      repoUrl: 'https://github.com/zeus-crf/service-registry-ms',
      demoUrl: 'https://github.com/zeus-crf/service-registry-ms'
    },
    {
      id: '04',
      cat: 'Backend',
      title: 'Shopflow',
      url: 'pay.dev',
      desc: 'Api de microsserviços para e-commercie',
      stack: ['Java', 'RabbitMQ', 'Redis'],
      repoUrl: 'https://github.com/zeus-crf',
      demoUrl: 'https://github.com/zeus-crf/shopflow'
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
