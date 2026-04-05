import { Component } from '@angular/core';

const THEME_STORAGE_KEY = 'resume-veegine-theme';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { DividerModule } from 'primeng/divider';
import { TagModule } from 'primeng/tag';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
}

interface SkillGroup {
  title: string;
  items: string[];
}

interface InnovationItem {
  title: string;
  context: string;
  impact: string;
  details: string[];
}

interface EducationItem {
  school: string;
  degree: string;
  period: string;
  location: string;
  details: string;
}

interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ButtonModule, CardModule, ChipModule, DividerModule, TagModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected isLightMode = this.getInitialTheme();

  protected readonly profile = {
    name: 'Fakher (Alex) Hammami',
    title: 'Technical Expert & Senior Software Engineer in Digital Transformation',
    intro:
      'Technical expert and senior software engineer with 10 years of experience across banking, legal search, insurance, and institutional platforms. Main strengths: Java, Spring, reactive services, microservices, Angular, and delivery automation.',
    location: 'Luxembourg',
    availability: 'Open to technical expert, senior engineering, and digital transformation opportunities'
  };

  protected readonly contacts: ContactLink[] = [
    {
      label: 'Email',
      value: 'Contact by email — I will call you',
      href: 'mailto:hfekher@gmail.com',
      icon: 'pi pi-envelope'
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/fakher-hammami',
      href: 'https://www.linkedin.com/in/fakher-hammami/',
      icon: 'pi pi-linkedin'
    },
    {
      label: 'GitHub',
      value: 'github.com/devary',
      href: 'https://github.com/devary',
      icon: 'pi pi-github'
    }
  ];

  protected readonly stats = [
    { value: '10', label: 'Years experience' },
    { value: '6', label: 'Employers listed' },
    { value: '3', label: 'Languages' }
  ];

  protected readonly focusAreas = [
    'Java 17',
    'Spring Boot',
    'Quarkus',
    'Angular',
    'PrimeNG',
    'Microservices',
    'CQRS / SAGA',
    'ISO 20022',
    'SEPA / SWIFT',
    'Elasticsearch',
    'Docker',
    'Kubernetes'
  ];

  protected readonly experiences: ExperienceItem[] = [
    {
      company: 'Société Générale',
      role: 'Technical Expert · External',
      period: 'Sep 2025 — Present',
      location: 'Esch-sur-Alzette, Luxembourg',
      summary:
        'Enterprise payment modernization in a high-availability banking environment covering interbank transfers, SEPA operations, and SWIFT messaging.',
      highlights: [
        'Enhanced backend services for interbank payment processing',
        'Worked with ISO 20022 message families: pacs, camt, pain',
        'Refactored blocking services into reactive APIs',
        'Migrated repository tooling from Nexus to JFrog Artifactory with Xray'
      ]
    },
    {
      company: 'Court of Justice of the European Union',
      role: 'Senior Software Engineer · External',
      period: 'Feb 2025 — Aug 2025',
      location: 'Luxembourg, Luxembourg',
      summary:
        'Distributed multilingual legal document indexing and retrieval platform with strong search and content-processing concerns.',
      highlights: [
        'Built document processing engine using Apache POI',
        'Developed resilient Spring Boot APIs',
        'Integrated Elasticsearch indexing and document retrieval flows',
        'Connected preprocessing workflows with Angular-facing services'
      ]
    },
    {
      company: 'European Parliament',
      role: 'Senior Software Engineer · External',
      period: 'Feb 2024 — Jan 2025',
      location: 'Kirchberg, Luxembourg',
      summary:
        'Worked on enterprise application unification through microfrontends and event-driven architecture principles.',
      highlights: [
        'Integrated applications into a unified microfrontend architecture',
        'Implemented CQRS, SAGA, and event sourcing patterns',
        'Improved CI/CD automation pipelines',
        'Mentored developers on clean code and testing'
      ]
    },
    {
      company: 'VERMEG',
      role: 'Team Lead / Software Engineer',
      period: 'Jan 2019 — Jan 2024',
      location: 'Tunis, Tunisia',
      summary:
        'Worked on a core insurance and asset management platform for international clients, then led a small engineering team on delivery and correction streams.',
      highlights: [
        'Led a team of 5 developers',
        'Coordinated estimation, technical analysis, and ticket distribution',
        'Handled complex production issues and urgent corrections',
        'Developed REST services and database logic in a financial context'
      ]
    },
    {
      company: 'Dewinter Group',
      role: 'Software Engineer',
      period: 'Sep 2017 — Dec 2018',
      location: 'Tunis, Tunisia',
      summary:
        'Worked on web applications with template customization, online payments, administration features, and delivery improvements.',
      highlights: [
        'Implemented online payment processing with fee and tax logic',
        'Developed backend administration dashboard capabilities',
        'Improved performance and usability of applications',
        'Contributed to deployment automation improvements'
      ]
    },
    {
      company: 'Genioworx',
      role: 'Junior Software Engineer / Intern',
      period: 'Jun 2016 — Sep 2017',
      location: 'Tunis, Tunisia',
      summary:
        'Contributed to a logistics platform by integrating Angular dashboards with a Java backend and supporting testing and rollout.',
      highlights: [
        'Developed Java backend services and ORM mappings',
        'Integrated Angular dashboards with backend data',
        'Participated in testing and deployment phases',
        'Supported user training and release rollout'
      ]
    }
  ];

  protected readonly innovations: InnovationItem[] = [
    {
      title: 'Payment modernization',
      context: 'Société Générale',
      impact:
        'Improved scalability and operational resilience in critical banking flows by modernizing services and reducing legacy friction.',
      details: [
        'Moved services toward reactive APIs for better throughput',
        'Supported modernization choices with technical PoCs and comparisons',
        'Strengthened dependency governance through repository modernization'
      ]
    },
    {
      title: 'Search and legal content platform',
      context: 'Court of Justice of the European Union',
      impact:
        'Made multilingual legal content easier to process, index, and retrieve in a distributed search-oriented architecture.',
      details: [
        'Combined document extraction, indexing, and API delivery in one flow',
        'Improved accessibility of heterogeneous document repositories',
        'Connected processing pipelines with frontend-facing services'
      ]
    },
    {
      title: 'Internal engineering innovation',
      context: 'VERMEG / Dewinter',
      impact:
        'Built tools and automation that improved team efficiency, visibility, and delivery reliability.',
      details: [
        'Created JQCD to centralize delivered queries across clients',
        'Built graph-generation tooling to map non-relational links across entities',
        'Replaced manual deployment steps with cleaner CI/CD-oriented automation'
      ]
    }
  ];

  protected readonly education: EducationItem[] = [
    {
      school: 'Private Higher School of Engineering and Technologies (ESPRIT)',
      degree: 'Computer Science Engineer',
      period: 'Sep 2018 — Jul 2022',
      location: 'Tunis, Tunisia',
      details: 'Engineering degree in computer science.'
    },
    {
      school: 'Higher Institute of Technological Studies of Kelibia',
      degree: 'Higher Technical Diploma · Computer Science',
      period: 'Sep 2012 — Jun 2016',
      location: 'Kelibia, Tunisia',
      details: 'Technical diploma focused on software and computing fundamentals.'
    }
  ];

  protected readonly certifications = [
    { title: 'Certified Professional Scrum Master', issuer: 'scrum.org' },
    { title: 'Oracle Certified Professional: Java SE 11 Developer', issuer: 'Oracle' }
  ];

  protected readonly languages = [
    { name: 'Arabic', level: 'Native' },
    { name: 'English', level: 'C1' },
    { name: 'French', level: 'C1/B2' }
  ];

  protected readonly skillGroups: SkillGroup[] = [
    {
      title: 'Backend',
      items: ['Java 8–17', 'Spring Boot', 'Quarkus', 'REST APIs', 'Reactive programming']
    },
    {
      title: 'Frontend',
      items: ['Angular', 'PrimeNG', 'JavaScript', 'HTML5', 'SCSS']
    },
    {
      title: 'Architecture',
      items: ['Microservices', 'Microfrontends', 'CQRS', 'SAGA', 'Modernization']
    },
    {
      title: 'Data & Search',
      items: ['Oracle', 'PostgreSQL', 'Redis', 'Elasticsearch']
    },
    {
      title: 'DevOps',
      items: ['Docker', 'Kubernetes', 'Jenkins', 'Rundeck', 'Artifactory']
    }
  ];

  protected toggleTheme(): void {
    this.isLightMode = !this.isLightMode;
    localStorage.setItem(THEME_STORAGE_KEY, this.isLightMode ? 'light' : 'dark');
  }

  private getInitialTheme(): boolean {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    return storedTheme === 'light';
  }
}
