import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="form-field">
      <label *ngIf="label" [for]="id" class="form-label">
        {{ label }}
        <span *ngIf="required" class="text-red-500">*</span>
      </label>

      <input 
        *ngIf="type !== 'textarea'"
        [id]="id"
        [type]="type"
        [(ngModel)]="value"
        [placeholder]="placeholder"
        [required]="required"
        [disabled]="disabled"
        class="form-input"
      />

      <textarea 
        *ngIf="type === 'textarea'"
        [id]="id"
        [(ngModel)]="value"
        [placeholder]="placeholder"
        [required]="required"
        [disabled]="disabled"
        class="form-input"
        rows="4"
      ></textarea>

      <span *ngIf="error" class="form-error">
        {{ error }}
      </span>
    </div>
  `,
  styleUrl: './form-field.component.scss',
})
export class FormFieldComponent implements ControlValueAccessor {
  @Input() id: string = 'field-' + Math.random();
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: 'text' | 'email' | 'password' | 'textarea' = 'text';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() error: string = '';

  value: any = '';

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}