import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PfRevealDirective } from '../../shared/directives/pf-reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, PfRevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  loading = signal(false);
  showToast = signal(false);
  toastSuccess = signal(true);

  form = {
    nome: '',
    email: '',
    assunto: '',
    mensagem: '',
  };

  async onSubmit(event: Event) {
    event.preventDefault();
    if (this.loading()) return;

    this.loading.set(true);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '227a5edc-266b-45f7-8020-a28f5c5b51d2',
          name: this.form.nome,
          email: this.form.email,
          subject: this.form.assunto,
          message: this.form.mensagem,
        }),
      });

      const data = await res.json();
      this.toastSuccess.set(data.success === true);
      if (data.success === true) {
        this.form = { nome: '', email: '', assunto: '', mensagem: '' };
      }
    } catch {
      this.toastSuccess.set(false);
    }

    this.loading.set(false);
    this.triggerToast();
  }

  private triggerToast() {
    this.showToast.set(true);
    setTimeout(() => this.showToast.set(false), 4000);
  }
}
