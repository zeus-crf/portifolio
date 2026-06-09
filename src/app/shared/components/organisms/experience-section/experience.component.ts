import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface XpEntry {
  period: string;
  role: string;
  company?: string;
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
      period: 'Jan/2026 — Mai/2026',
      role: 'Full-Stack Developer',
      company: 'Clinica Renata Lopes',
      points: [
        'Entrega de SPAs Angular + APIs Spring Boot para agendamentos online.',
        'Redução de 40% no tempo de agendamento na clínica.',
        'Setup de CI/CD com GitHub Actions e deploy automatizado.',
      ],
      stack: ['Angular', 'Spring Boot', 'Docker', 'Redis'],
    },
    {
      period: '2025 — No momento',
      role: 'Estagiário de Desenvolvimento',
      company: 'Inloco Solutions',
      points: [
        'Desenvolvimento de serviços web com Vue.js e Laravel.',
        'Code review e CI/CD com GitHub Actions.',
        'Versionamento de código com Git e GitHub',
      ],
      stack: ['Vue', 'Laravel', 'Git e GitHub'],
    },
    {
      period: 'Jan/2024 — Dez/2024',
      role: 'Desenvolvedor Backend',
      company: 'Trabalho de Conclusão de Curso(TCC) ',
      points: [
        'Manutenção e desenvolvimento de sistema de pedidos para restaurante de comida japonesa.',
        'Primeiros contatos com modelagem Mysql.',
        'Versionamento de código com Git e Github'
      ],
      stack: ['PHP', 'MysSQL', 'Git e GitHub'],
    },
  ];
}
