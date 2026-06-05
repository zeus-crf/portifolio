import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";


type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';


@Component({
    selector: 'app-button',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss',
})

export class ButtonComponent {

    //  INPUTS - dados que vem de fora

    @Input() label : string = 'Clique';
    @Input() variant: ButtonVariant = 'primary';
    @Input() size: ButtonSize = 'md';
    @Input() disabled: boolean = false;
    @Input() fullWidth: boolean = false;
    @Input() isLoading: boolean = false;

    // OUTPUTS - dados que saem daqui

    @Output() clicked = new EventEmitter<void>;


    // MÉTODOS

    onClick() {
        if(!this.disabled && !this.isLoading){
            this.clicked.emit();
        }
    }

    // COMPUTED CLASSES - calcula classes dinamicamente

    get buttonClasses(): string {
    const baseClasses = 'app-button';
    const variantClass = `app-button--${this.variant}`;
    const sizeClass = `app-button--${this.size}`;
    const widthClass = this.fullWidth ? 'w-full' : '';
    const loadingClass = this.isLoading ? 'is-loading' : '';

    return `${baseClasses} ${variantClass} ${sizeClass} ${widthClass} ${loadingClass}`;
  }
}