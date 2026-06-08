import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  profilePhoto = '/assets/foto-perfil.jpeg';

  pills = ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'PostgreSQL'];

  paras = [
    'Comecei na programação movido pela curiosidade de entender como sistemas se conectam. Hoje trabalho de ponta a ponta — desenho APIs em Spring Boot, modelo bancos relacionais e construo interfaces reativas em Angular.',
    'Busco oportunidades — CLT ou freelance — onde eu possa entregar software bem arquitetado, testado e que resolva problemas reais. Valorizo código limpo, revisões honestas e times que aprendem juntos.',
  ];

  stack = ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Docker'];
}
