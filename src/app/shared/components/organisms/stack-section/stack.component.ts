import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ToolItem  { slug: string; label: string; variant?: string; }
interface ToolGroup { cat: string; icon: string; items: ToolItem[]; }

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.scss',
})
export class StackComponent {

  tabs = ['Todas', 'Backend', 'Frontend', 'Banco de Dados', 'DevOps', 'Ferramentas'];
  activeFilter = 'Todas';

  private allGroups: ToolGroup[] = [
    {
      cat: 'Backend',
      icon: 'server',
      items: [
        { slug: 'java',      label: 'Java'        },
        { slug: 'spring',    label: 'Spring Boot'  },
        { slug: 'maven',     label: 'Maven'        },
        { slug: 'hibernate', label: 'Hibernate'    },
        { slug: 'junit',     label: 'JUnit 5', variant: 'plain' },
      ],
    },
    {
      cat: 'Frontend',
      icon: 'layout',
      items: [
        { slug: 'angularjs',   label: 'Angular'    },
        { slug: 'typescript',  label: 'TypeScript' },
        { slug: 'javascript',  label: 'JavaScript' },
        { slug: 'html5',       label: 'HTML5'      },
        { slug: 'css3',        label: 'CSS3',  variant: 'plain' },
        { slug: 'tailwindcss', label: 'Tailwind', variant: 'plain' },
      ],
    },
    {
      cat: 'Banco de Dados',
      icon: 'database',
      items: [
        { slug: 'postgresql', label: 'PostgreSQL' },
        { slug: 'mysql',      label: 'MySQL'      },
        { slug: 'mongodb',    label: 'MongoDB'    },
        { slug: 'redis',      label: 'Redis'      },
      ],
    },
    {
      cat: 'DevOps',
      icon: 'ship',
      items: [
        { slug: 'docker',  label: 'Docker'         },
        { slug: 'github',  label: 'GitHub Actions', variant: 'original' },
        { slug: 'git',     label: 'Git'            },
        { slug: 'linux',   label: 'Linux'          },
      ],
    },
    {
      cat: 'Ferramentas',
      icon: 'briefcase',
      items: [
        { slug: 'vscode',    label: 'VS Code',    variant: 'original' },
        { slug: 'intellij',  label: 'IntelliJ',   variant: 'original' },
        { slug: 'postman',   label: 'Postman',    variant: 'original' },
        { slug: 'figma',     label: 'Figma'       },
      ],
    },
  ];

  get filteredGroups(): ToolGroup[] {
    if (this.activeFilter === 'Todas') return this.allGroups;
    return this.allGroups.filter(g => g.cat === this.activeFilter);
  }

  setFilter(tab: string) {
    this.activeFilter = tab;
  }

  deviconUrl(slug: string, variant = 'original'): string {
    return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-${variant}.svg`;
  }

  onImgError(event: Event) {
    (event.target as HTMLImageElement).style.opacity = '0.2';
  }
}
