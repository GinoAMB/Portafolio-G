import type { TechnologyCategory } from "./technologies.types";

export const getTechnologyCategories = (t: any): TechnologyCategory[] => [
  {
    id: 1,
    title: t.technologies.categories.frontend,
    technologies: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
  },
  {
    id: 2,
    title: t.technologies.categories.backend,
    technologies: [
      { name: "Java" },
      { name: "Spring Boot" },
      { name: "Node.js" },
      { name: "PHP" },
    ],
  },
  {
    id: 3,
    title: t.technologies.categories.databases,
    technologies: [
      { name: "MySQL" },
      { name: "PostgreSQL" },
      { name: "SQL Server" },
    ],
  },
  {
    id: 4,
    title: t.technologies.categories.persistence,
    technologies: [
      { name: "Spring Data JPA" },
      { name: "Hibernate" },
      { name: "Prisma ORM" },
    ],
  },
  {
    id: 5,
    title: t.technologies.categories.tools,
    technologies: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Gradle" },
      { name: "IntelliJ IDEA" },
      { name: "Visual Studio Code" },
      { name: "Postman" },
      { name: "Docker" },
      { name: "Figma" },
      { name: "NetBeans" },
    ],
  },
  {
    id: 6,
    title: t.technologies.categories.methodologies,
    technologies: [
      { name: "Scrum" },
      { name: "Desarrollo Ágil" },
      { name: "Code Review" },
    ],
  },
  {
    id: 7,
    title: t.technologies.categories.architecture,
    technologies: [
      { name: "Hexagonal (Ports & Adapters)" },
      { name: "MVC" },
      { name: "DAO" },
      { name: "Arquitectura por capas" },
    ],
  },
  {
    id: 8,
    title: t.technologies.categories.apis,
    technologies: [
      { name: "RESTful APIs" },
      { name: "Axios" },
      { name: "Swagger / OpenAPI" },
    ],
  },
];