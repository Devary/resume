import { Component, input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { ExperienceItem } from '../../models/resume.models';
import { SectionHeaderComponent } from '../section-header/section-header.component';

@Component({
  selector: 'app-experience-list',
  standalone: true,
  imports: [CardModule, TagModule, SectionHeaderComponent],
  template: `
    <app-section-header
      eyebrow="Experience"
      title="Full work history"
      subtitle="Chronological overview with delivery context and engineering impact"
    ></app-section-header>

    <div class="timeline-list">
      @for (experience of experiences(); track experience.company + experience.period) {
        <p-card class="timeline-card">
          <div class="timeline-card__top">
            <div>
              <h4>{{ experience.role }}</h4>
              <p class="company">{{ experience.company }}</p>
            </div>
            <p-tag severity="info" [value]="experience.period"></p-tag>
          </div>

          <p class="timeline-card__location">
            <i class="pi pi-map-marker"></i>
            {{ experience.location }}
          </p>

          <p class="timeline-card__summary">{{ experience.summary }}</p>

          <ul class="bullet-list compact">
            @for (highlight of experience.highlights; track highlight) {
              <li>{{ highlight }}</li>
            }
          </ul>
        </p-card>
      }
    </div>
  `
})
export class ExperienceListComponent {
  readonly experiences = input.required<ExperienceItem[]>();
}
