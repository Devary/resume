import { Component, input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InnovationItem } from '../../models/resume.models';
import { SectionHeaderComponent } from '../section-header/section-header.component';

@Component({
  selector: 'app-innovation-grid',
  standalone: true,
  imports: [CardModule, SectionHeaderComponent],
  template: `
    <section class="innovation-section">
      <app-section-header
        eyebrow="Projects & innovation"
        title="Concrete improvements and technical ideas delivered in real projects"
        subtitle="Less template, more story: what changed because of the work"
      ></app-section-header>

      <div class="innovation-grid">
        @for (innovation of innovations(); track innovation.title) {
          <p-card class="innovation-card">
            <div class="innovation-card__head">
              <div>
                <h4>{{ innovation.title }}</h4>
                <p class="company">{{ innovation.context }}</p>
              </div>
            </div>

            <p class="timeline-card__summary">{{ innovation.impact }}</p>

            <ul class="bullet-list compact">
              @for (detail of innovation.details; track detail) {
                <li>{{ detail }}</li>
              }
            </ul>
          </p-card>
        }
      </div>
    </section>
  `
})
export class InnovationGridComponent {
  readonly innovations = input.required<InnovationItem[]>();
}
