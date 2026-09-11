import type { Project } from "./projects.types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Sistema de Matrícula Escolar",
    category: "Full Stack · 2026",
    description:
      "Sistema Full Stack para la gestión integral del proceso de matrícula escolar, usuarios, estudiantes, periodos académicos y catálogos administrativos. Incluye un backend REST con Java y Spring Boot y un frontend desarrollado con React y TypeScript.",
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
    capabilities: [
      "15 Repositorios JPA",
      "Persistencia JPA / Hibernate",
      "Operaciones CRUD Múltiples",
      "APIs REST Completas",
      "Relaciones entre Entidades",
      "Componentes React UI",
      "Documentación viva con Swagger/OpenAPI",
    ],
    github: [
      "https://github.com/GinoAMB/MatriculaBackend",
      "https://github.com/GinoAMB/MatriculaFrontend",
    ],
    image: "/projects/matricula.webp",
    variant: "featured",
  },

  {
    id: 2,
    title: "Sistema de Gestión de Inventario",
    category: "Backend · 2026",
    description:
      "API REST para la gestión de inventario, almacenes, materiales, movimientos de entrada y salida, usuarios y roles. Implementa autenticación y autorización con Spring Security y JWT, junto con Arquitectura Hexagonal.",
    technologies: [
      "Spring Security + JWT",
      "Arquitectura Hexagonal (Ports & Adapters)",
    ],
    capabilities: [
      "Control de Roles (RBAC)",
      "Control estricto de stock",
      "Manejo de excepciones y errores",
      "Recuperación por Tokens",
      "DTOs & MapStruct",
      "Validación de negocio",
      "Cloudinary Asset Upload",
      "Swagger/OpenAPI 3",
    ],
    github: ["https://github.com/GinoAMB/Proyecto_Buggati"],
    image: "/projects/inventario.webp",
    variant: "split",
  },

  {
    id: 3,
    title: "DeliveryNoche",
    category: "Landing Frontend · 2026",
    description:
      "Landing page responsive para un servicio de delivery, desarrollada con React y TypeScript. Incluye navegación, hero, cobertura, especialidades, testimonios, llamadas a la acción y contacto directo mediante WhatsApp.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Vercel Deploy",
    ],
    capabilities: [
      "Componentes modulares reutilizables & diseño responsive",
      "Hero de alta conversión, Cobertura, Especialidades y Testimonios",
      "Integración directa con WhatsApp para pedidos rapidos",
    ],
    github: ["https://github.com/devlab921-prog/Midnight_Snacks"],
    demo: "https://midnightsnacks.vercel.app/",
    image: "/projects/delivery-noche.webp",
    variant: "reverse",
  },

  {
    id: 4,
    title: "FlowSync",
    category: "Landing Frontend · 2026",
    description:
      "Landing page para una plataforma de productividad y gestión de procesos, desarrollada con React y TypeScript. Presenta funcionalidades, precios, testimonios, FAQ y navegación mediante componentes reutilizables.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
    ],
    capabilities: [
      "Diseño responsive adaptado a distintos dispositivos",
      "Componentes reutilizables y estructura modular",
      "Secciones de funcionalidades, precios, testimonios y FAQ",
      "Navegación fluida y experiencia de usuario intuitiva",
    ],
    github: ["https://github.com/devlab921-prog/Flowsync"],
    demo: "https://flowsync-pearl.vercel.app/",
    image: "/projects/flowsync.webp",
    variant: "minimal",
  },
];