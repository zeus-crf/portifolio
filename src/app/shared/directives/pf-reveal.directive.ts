import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  OnDestroy,
} from '@angular/core';

/**
 * pfReveal — scroll-triggered entrance animation
 *
 * Usage:
 *   <div pfReveal>...</div>
 *   <div pfReveal [pfRevealDelay]="150">...</div>
 *
 * The element fades in + slides up when it enters the viewport.
 * Stagger children by passing incrementing pfRevealDelay values.
 */
@Directive({
  selector: '[pfReveal]',
  standalone: true,
})
export class PfRevealDirective implements OnInit, OnDestroy {
  /** Extra delay in milliseconds before the transition plays */
  @Input() pfRevealDelay = 0;

  private io!: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.el.nativeElement;
    const delay = this.pfRevealDelay;

    // Hidden initial state (set via inline style to avoid flash-of-invisible-text
    // on elements that are already in the viewport on load — the observer fires
    // before the next paint so the element is invisible for < 1 frame only)
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.willChange = 'opacity, transform';

    this.io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = `opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 0.65s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`;
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          this.io.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    this.io.observe(el);
  }

  ngOnDestroy(): void {
    this.io?.disconnect();
  }
}
