import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/organisms/header.component';
import { FooterComponent } from './shared/components/organisms/footer.component';


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
export class AppComponent {
  protected readonly title = signal('portifolio');

  
}
