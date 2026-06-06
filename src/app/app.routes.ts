import { Routes } from '@angular/router';

export const routes: Routes = [

    {path: '', redirectTo: 'home', pathMatch: 'full'},

    {path: 'home', loadComponent: () => import('./features/home/home.component')
        .then(m => m.HomeComponent),
        data: {title: 'Home - Portifólio'}
    },
    {
        path: 'sobre',
        loadComponent: () => import('./features/about/about.component')
        .then(m => m.AboutComponent),
        data: { title: 'Sobre' }
    },

    {path: 'projects', loadComponent: () => import('./features/projects/projects.component')
        .then(m => m.ProjectsComponent),
        data: {title: 'Projetos - Portifólio'}
    },

    {path: 'contact', loadComponent: () => import('./features/contact/contact.component')
        .then(m => m.ContactComponent),
        data: {title: 'Contato - Portifólio'}
    },

    {
    path: '**',
    redirectTo: 'home'
  }
];
