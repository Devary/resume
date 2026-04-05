export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface InnovationItem {
  title: string;
  context: string;
  impact: string;
  details: string[];
}

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
  location: string;
  details: string;
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: string;
}

export interface LanguageItem {
  name: string;
  level: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
}
