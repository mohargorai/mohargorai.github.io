export interface Service {
  num: string;
  title: string;
  skills: string[];
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
