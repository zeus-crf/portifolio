import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

declare let tsParticles: any;

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent implements OnInit, OnDestroy {
  userPhoto = '/assets/foto-perfil.jpeg';
  userName = 'Miguel Pereira';
  subtitle = 'Full-Stack Developer';
  description = `Desenvolvedor full-stack focado em construir produtos sólidos e escaláveis com Java, Spring Boot e Angular — do banco de dados à interface.`;

  stats = [
    { number: '3+', label: 'Anos' },
    { number: '15+', label: 'Projetos' },
    { number: '10+', label: 'Tecnologias' },
  ];

  private particlesContainer: any;

  ngOnInit() {
    this.initParticles();
  }

  ngOnDestroy() {
    this.particlesContainer?.destroy();
  }

  initParticles() {
    const tryLoad = () => {
      if (typeof tsParticles === 'undefined') {
        setTimeout(tryLoad, 100);
        return;
      }

      // tsParticles v3 API: load({ id, options })
      tsParticles.load({
        id: 'hero-particles',
        options: {
          fpsLimit: 60,
          fullScreen: { enable: false },
          background: { color: { value: 'transparent' } },
          detectRetina: true,
          particles: {
            number: {
              value: 160,
              density: { enable: true, area: 900 },
            },
            color: { value: '#3b82f6' },
            opacity: {
              value: { min: 0.2, max: 0.5 },
            },
            size: {
              value: { min: 1.5, max: 3 },
            },
            links: {
              enable: true,
              distance: 150,
              color: '#3b82f6',
              opacity: 0.18,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.7,
              direction: 'none',
              random: true,
              straight: false,
              outModes: { default: 'out' },
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'grab' },
              onClick: { enable: false },
            },
            modes: {
              grab: { distance: 160, links: { opacity: 0.25 } },
            },
          },
        },
      }).then((container: any) => {
        this.particlesContainer = container;
      });
    };

    tryLoad();
  }

  onViewProjects() {
    console.log('Navigate to projects');
  }

  onDownloadCV() {
    console.log('Download CV');
  }
}
