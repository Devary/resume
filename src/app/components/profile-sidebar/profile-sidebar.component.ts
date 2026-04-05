import { Component, input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { DividerModule } from 'primeng/divider';
import { TagModule } from 'primeng/tag';
import {
  CertificationItem,
  ContactLink,
  EducationItem,
  LanguageItem,
  SkillGroup
} from '../../models/resume.models';
import { SectionHeaderComponent } from '../section-header/section-header.component';

@Component({
  selector: 'app-profile-sidebar',
  standalone: true,
  imports: [CardModule, ChipModule, DividerModule, TagModule, SectionHeaderComponent],
  template: `
    <div class="sidebar-stack">
      <div class="hero__panel glass-panel">
        <p-card>
          <ng-template pTemplate="header">
            <div class="panel-header">
              <span class="panel-header__dot"></span>
              <span>Profile snapshot</span>
            </div>
          </ng-template>

          <div class="snapshot-grid">
            @for (stat of stats(); track stat.label) {
              <div class="snapshot-item">
                <strong>{{ stat.value }}</strong>
                <span>{{ stat.label }}</span>
              </div>
            }
          </div>

          <p-divider></p-divider>

          <div class="contact-list">
            @for (contact of contacts(); track contact.label) {
              <a [href]="contact.href" target="_blank" rel="noopener">
                <i [class]="contact.icon"></i>
                {{ contact.value }}
              </a>
            }
          </div>
        </p-card>
      </div>

      <app-section-header eyebrow="Skills" title="Organized by domain"></app-section-header>
      <div class="skill-group-list">
        @for (group of skillGroups(); track group.title) {
          <p-card class="skill-card">
            <h4>{{ group.title }}</h4>
            <div class="chip-grid compact-chips">
              @for (item of group.items; track item) {
                <p-chip [label]="item"></p-chip>
              }
            </div>
          </p-card>
        }
      </div>

      <app-section-header eyebrow="Education" title="Academic background"></app-section-header>
      <div class="education-list">
        @for (item of education(); track item.school) {
          <p-card class="education-card">
            <div class="education-card__top">
              <div>
                <h4>{{ item.degree }}</h4>
                <p class="company">{{ item.school }}</p>
              </div>
              <p-tag severity="contrast" [value]="item.period"></p-tag>
            </div>
            <p class="timeline-card__location"><i class="pi pi-map-marker"></i>{{ item.location }}</p>
            <p class="timeline-card__summary">{{ item.details }}</p>
          </p-card>
        }
      </div>

      <app-section-header eyebrow="Certifications" title="Validated credentials"></app-section-header>
      <div class="education-list">
        @for (cert of certifications(); track cert.title) {
          <p-card class="education-card">
            <h4>{{ cert.title }}</h4>
            <p class="company">{{ cert.issuer }}</p>
          </p-card>
        }
      </div>

      <app-section-header eyebrow="Languages" title="Working fluency"></app-section-header>
      <div class="language-list">
        @for (language of languages(); track language.name) {
          <div class="language-item">
            <span>{{ language.name }}</span>
            <p-tag severity="info" [value]="language.level"></p-tag>
          </div>
        }
      </div>
    </div>
  `
})
export class ProfileSidebarComponent {
  readonly stats = input.required<{ value: string; label: string }[]>();
  readonly contacts = input.required<ContactLink[]>();
  readonly skillGroups = input.required<SkillGroup[]>();
  readonly education = input.required<EducationItem[]>();
  readonly certifications = input.required<CertificationItem[]>();
  readonly languages = input.required<LanguageItem[]>();
}
