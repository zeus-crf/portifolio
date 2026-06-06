import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface XpEntry {
  period: string;
  role: string;
  company: string;
  points: string[];
  stack: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  entries: XpEntry[] = [
    {
      period: '2024 — Presente',
      role: 'Full-Stack Developer',
      company: 'Freelance',
      points: [
        'Entrega de SPAs Angular + APIs Spring Boot para clientes de saúde e varejo.',
        'Redução de 40% no tempo de agendamento em sistema de clínica.',
        'Setup de CI/CD com GitHub Actions e deploy automatizado.',
      ],
      stack: ['Angular', 'Spring Boot', 'Docker'],
    },
    {
      period: '2023 — 2024',
      role: 'Desenvolvedor Backend Jr.',
      company: 'Tech Solutions',
      points: [
        'Desenvolvimento de microsserviços em Java com Spring Cloud.',
        'Integração de filas RabbitMQ para processamento assíncrono.',
        'Cobertura de testes elevada a 80% com JUnit 5.',
      ],
      stack: ['Java', 'Spring Cloud', 'RabbitMQ'],
    },
    {
      period: '2022 — 2023',
      role: 'Estagiário de Desenvolvimento',
      company: 'Startup XYZ',
      points: [
        'Manutenção de telas Angular e correção de bugs em produção.',
        'Primeiros contatos com modelagem PostgreSQL.',
      ],
      stack: ['Angular', 'PostgreSQL'],
    },
  ];
}
