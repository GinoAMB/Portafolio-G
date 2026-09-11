import type { TechnologyCategory } from "./technologies.types";

export const technologyCategories: TechnologyCategory[] = [
  {
    id: 1,
    title: "FRONTEND",
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
    title: "BACKEND",
    technologies: [
      { name: "Java" },
      { name: "Spring Boot" },
      { name: "Node.js" },
      { name: "PHP" },
    ],
  },
  {
    id: 3,
    title: "BASES DE DATOS",
    technologies: [
      { name: "MySQL" },
      { name: "PostgreSQL" },
      { name: "SQL Server" },
    ],
  },
  {
    id: 4,
    title: "PERSISTENCIA",
    technologies: [
      { name: "Spring Data JPA" },
      { name: "Hibernate" },
      { name: "Prisma ORM" },
    ],
  },
  {
    id: 5,
    title: "HERRAMIENTAS",
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
    title: "METODOLOGÍAS",
    technologies: [
      { name: "Scrum" },
      { name: "Desarrollo Ágil" },
      { name: "Code Review" },
    ],
  },
  {
    id: 7,
    title: "ARQUITECTURA",
    technologies: [
      { name: "Hexagonal(Ports & Adapters)" },
      { name: "MVC" },
      { name: "DAO" },
      { name: "Arquitectura por capas" },
    ],
  },
  {
    id: 8,
    title: "APIS",
    technologies: [
      { name: "RESTfull APIs" },
      { name: "Axios" },
      { name: "Swagger / OpenAPI" },
    ],
  }
];