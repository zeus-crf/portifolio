import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  sent = false;

  form = {
    nome: '',
    email: '',
    assunto: '',
    mensagem: '',
  };

  onSubmit(event: Event) {
    event.preventDefault();
    this.sent = true;
    setTimeout(() => {
      this.sent = false;
      this.form = { nome: '', email: '', assunto: '', mensagem: '' };
    }, 3000);
  }
}
