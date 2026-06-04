import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/organisms/header/header.component';
import { FooterComponent } from './shared/components/organisms/footer/footer.component';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class App {
  protected readonly title = signal('portifolio');

  
}
