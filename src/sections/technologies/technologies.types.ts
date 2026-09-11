export interface Technology {
  name: string;
  icon?: string;
}

export interface TechnologyCategory {
  id: number;
  title: string;
  technologies: Technology[];
}