import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  standalone: true,
  template: `
    <div class="section-heading">
      <p class="section-label">{{ eyebrow() }}</p>
      <h3>{{ title() }}</h3>
      @if (subtitle()) {
        <p class="section-subtitle">{{ subtitle() }}</p>
      }
    </div>
  `
})
export class SectionHeaderComponent {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly subtitle = input<string>('');
}
