import { Component, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ContactLink } from '../../models/resume.models';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonModule],
  template: `
    <section class="hero surface-panel">
      <div class="hero__content">
        <div class="hero__headline">
          <p class="eyebrow">Elegant resume showcase</p>
          <h1>{{ name() }}</h1>
          <h2>{{ title() }}</h2>
          <p class="hero__intro">{{ intro() }}</p>
        </div>

        <div class="hero__actions">
          <a class="hero-link" [href]="primaryLink()" target="_blank" rel="noopener">
            <p-button label="LinkedIn" icon="pi pi-linkedin" severity="contrast"></p-button>
          </a>
          <a class="hero-link" [href]="secondaryLink()">
            <p-button label="Email" icon="pi pi-envelope" [outlined]="true"></p-button>
          </a>
        </div>

        <div class="hero__meta">
          <span><i class="pi pi-map-marker"></i> {{ location() }}</span>
          <span><i class="pi pi-briefcase"></i> {{ availability() }}</span>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {
  readonly name = input.required<string>();
  readonly title = input.required<string>();
  readonly intro = input.required<string>();
  readonly location = input.required<string>();
  readonly availability = input.required<string>();
  readonly primaryLink = input.required<string>();
  readonly secondaryLink = input.required<string>();
}
