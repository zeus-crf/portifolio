import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Degree {
  title: string;
  inst: string;
  period: string;
  status: 'Concluído' | 'Em andamento';
}

interface Cert {
  name: string;
  inst: string;
  date: string;
  status: 'Concluído';
  progress?: number; // percentage, only for Em andamento
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {

  degrees: Degree[] = [
    {
      title: 'Técnico em Informática',
      inst: 'ETEC — Escola Técnica Estadual',
      period: '2022 — 2023',
      status: 'Concluído',
    },
    {
      title: 'Engenharia de Software',
      inst: 'Universidade Paulista (UNIP)',
      period: '2024 — Presente',
      status: 'Em andamento',
    },
  ];

  certs: Cert[] = [
    {
      name: 'Microsserviços na prática: implementando com Java e Spring',
      inst: 'Alura',
      date: 'Jun. 2026',
      status: 'Concluído',
    },
    {
      name: 'Microsserviços na prática: entendendo a tomada de decisões',
      inst: 'Alura',
      date: 'Mai. 2026',
      status: 'Concluído',
      progress: 54,
    },
    {
      name: 'Microsserviços com Java: construa soluções escaláveis',
      inst: 'Alura',
      date: 'Mai. 2026',
      status: 'Concluído',
    },
    {
      name: 'Java e Spring Security: login com GitHub, Google e autenticação de 2 fatores',
      inst: 'Alura',
      date: 'Mai. 2026',
      status: 'Concluído',
    },
    {
      name: 'Java e Spring Security: proteja suas aplicações web',
      inst: 'Alura',
      date: 'Mai. 2026',
      status: 'Concluído',
    },
    {
      name: 'Java e Spring Security: proteja suas APIs REST',
      inst: 'Alura',
      date: 'Mar. 2026',
      status: 'Concluído',
    },
    {
      name: 'Java e Spring Security: crie perfis e autorize requisições',
      inst: 'Alura',
      date: 'Mar. 2026',
      status: 'Concluído',
    },
    {
      name: 'Python: crie a sua primeira aplicação',
      inst: 'Alura',
      date: 'Mar. 2026',
      status: 'Concluído',
    },
    {
      name: 'Python: aplicando a Orientação a Objetos',
      inst: 'Alura',
      date: 'Mar. 2026',
      status: 'Concluído',
    },
    {
      name: 'Python: avance na Orientação a Objetos e consuma API',
      inst: 'Alura',
      date: 'Mar. 2026',
      status: 'Concluído',
    },
  ];
}
