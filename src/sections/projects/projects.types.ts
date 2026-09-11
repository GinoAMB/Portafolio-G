export type ProjectVariant =
  | "featured"
  | "split"
  | "reverse"
  | "minimal";

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  capabilities?: string[];
  github?: string[];
  demo?: string;
  image: string;
  variant: ProjectVariant;
}