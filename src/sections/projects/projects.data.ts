import type { Project } from "./projects.types";

export const getProjects = (t: any): Project[] => [
  {
    id: 1,
    title: t.projects.items.matricula.title,
    category: t.projects.items.matricula.category,
    description: t.projects.items.matricula.description,
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "Hibernate",
      "PostgreSQL",
      "Gradle",
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Swagger/OpenAPI",
    ],
    capabilities: t.projects.items.matricula.capabilities,
    github: [
      "https://github.com/GinoAMB/MatriculaBackend",
      "https://github.com/GinoAMB/MatriculaFrontend",
    ],
    image: "/projects/matricula.webp",
    variant: "featured",
  },

  {
    id: 2,
    title: t.projects.items.inventario.title,
    category: t.projects.items.inventario.category,
    description: t.projects.items.inventario.description,
    technologies: [
      "Spring Security + JWT",
      "Arquitectura Hexagonal (Ports & Adapters)",
    ],
    capabilities: t.projects.items.inventario.capabilities,
    github: ["https://github.com/GinoAMB/Proyecto_Buggati"],
    image: "/projects/inventario.webp",
    variant: "split",
  },

  {
    id: 3,
    title: t.projects.items.deliveryNoche.title,
    category: t.projects.items.deliveryNoche.category,
    description: t.projects.items.deliveryNoche.description,
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Vercel Deploy",
    ],
    capabilities: t.projects.items.deliveryNoche.capabilities,
    github: ["https://github.com/devlab921-prog/Midnight_Snacks"],
    demo: "https://midnight-snacks.vercel.app/",
    image: "/projects/delivery-noche.webp",
    variant: "reverse",
  },

  {
    id: 4,
    title: t.projects.items.flowSync.title,
    category: t.projects.items.flowSync.category,
    description: t.projects.items.flowSync.description,
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
    ],
    capabilities: t.projects.items.flowSync.capabilities,
    github: ["https://github.com/devlab921-prog/Flowsync"],
    demo: "https://flowsync-pearl.vercel.app/",
    image: "/projects/flowsync.webp",
    variant: "minimal",
  },
];