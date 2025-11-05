export interface Project {
  id: number;
  title: string;
  img: string;
  tags: string[];
  description: string;
  url: string;
}

export interface AppData {
  projects: Project[];
}
