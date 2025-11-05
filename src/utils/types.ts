// src/utils/types.ts
export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  website: string;
  photoSrc: string;
}

export interface Job {
  id: number;
  icon: string;
  title: string;
  period: string;
  description: string;
  skills: string[];
}

export interface Project {
  id: number;
  title: string;
  img: string;
  tags: string[];
  description: string;
  url: string;
}

export interface Metadata {
  skills: string[];
}

export interface LinkItem {
  label: string;
  url: string;
}

export interface AppData {
  personalInfo: PersonalInfo;
  jobs: Job[];
  projects: Project[];
  metadata: Metadata;
  links: LinkItem[];
}
