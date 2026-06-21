export interface Skill {
  name: string;
  url: string;
}

export interface Service {
  num: string;
  title: string;
  skills: Skill[];
}

export interface Project {
  num: string;
  cat: string;
  title: string;
  description: string;
  link?: string;
  liveLink?: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  image?: string;
  pdf?: string;
  link: string;
}
