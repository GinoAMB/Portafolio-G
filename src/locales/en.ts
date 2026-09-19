export const en = {
  nav: {
    home: "HOME",
    about: "ABOUT ME",
    experience: "EXPERIENCE",
    projects: "PROJECTS",
    stack: "STACK",
    contact: "CONTACT",
    downloadCv: "Download CV",
  },
  hero: {
    availability: "Available for new projects & Full Stack roles",
    location: "Chimbote, Peru / LATAM · Remote",

    role: "// Full Stack Developer",

    firstName: "Gino Anderson",
    lastName: "Moreno",
    surname: "Bejarano",

    description:
      "I build modern, functional web applications focused on solving real-world problems.",

    technologies: {
      java: "Java",
      springBoot: "Spring Boot",
      react: "React",
      node: "Node.js",
    },

    architecture: {
      title: "Architecture Spec",
      version: "v2.6",
      backend: "Backend:",
      backendValue: "Spring Boot + Hexagonal",
      frontend: "Frontend:",
      frontendValue: "React + TS + Tailwind",
      persistence: "Persistence:",
      persistenceValue: "PostgreSQL / JPA / Prisma",
      apiSpecs: "API Specs:",
      apiSpecsValue: "OpenAPI / Swagger 3.0",
    },

    actions: {
      viewProjects: "View projects",
      downloadCv: "Download CV",
    },

    professionalNetworks: "Professional networks:",

    bottom: {
      focus: "01 / Focus",
      focusValue: "Clean Architecture & REST",

      coreStack: "02 / Core Stack",
      coreStackValue: "Spring Boot & React TS",

      professionalExperience: "03 / Professional Exp.",
      professionalExperienceValue: "AM CODE (Backend/Frontend)",

      availability: "04 / Availability",
      availabilityValue: "Immediate · Remote / Hybrid",
    },
  },
  about: {
    sectionNumber: "01.",
    sectionLabel: "About me",

    title:
      "Software engineering with a pragmatic mindset and a holistic vision.",

    philosophy: {
      label: "Development philosophy",
      description:
        "I prioritize code readability, separation of concerns (SoC), and direct resolution of business requirements over unnecessary complexity.",
      input: "INPUT // ↑ ↑",
    },

    introduction: {
      paragraph1: "I am a ",
      fullStack: "Full Stack",
      paragraph1End:
        " developer with experience in backend and frontend development. I have worked with ",
      technologies: "Java, Spring Boot, React, Node.js, PHP and Prisma",
      paragraph1End2:
        ", developing ",
      apis: "REST APIs",
      paragraph1End3:
        " robust, modern web interfaces, and solutions connected to relational databases.",

      paragraph2Start:
        "I am deeply interested in building ",
      maintainableSoftware: "maintainable software",
      paragraph2Middle:
        ", learning new technologies quickly, and working in multidisciplinary teams where I can ",
      tangibleValue: "deliver tangible value",
      paragraph2End:
        " and continue growing professionally as an engineer.",
    },

    cards: {
      cleanArchitecture: {
        number: "01",
        title: "Clear Architecture",
        description:
          "MVC, DAO, and Hexagonal Architecture patterns that ensure low coupling.",
      },

      restApis: {
        number: "02",
        title: "REST APIs & DBs",
        description:
          "Persistence with Spring Data JPA, Hibernate, and Prisma on PostgreSQL and MySQL.",
      },

      modernUi: {
        number: "03",
        title: "Modern UI/UX",
        description:
          "Reusable components with React, TypeScript, and fluid responsive design.",
      },
    },
  },
  experience: {
    sectionNumber: "02.",
    sectionLabel: "Experience",

    period: "2025 — 2026 · Remote",

    company: "AM CODE",

    position: "Web Developer — Pre-Professional Internship",

    description:
      "Active participation in the software development lifecycle, collaborating in the design and deployment of functional modules under the Scrum agile methodology.",

    stats: {
      endpoints: "Endpoints",
      rest: "REST",
      modules: "Modules",
      react: "React",
      devs: "Devs",
      team: "Team",
    },

    responsibilitiesTitle: "Technical contributions and responsibilities",

    responsibilities: [
      {
        number: "01",
        title: "Backend Development with Node.js & Prisma ORM",
        description:
          "Design, development, and optimization of secure persistence services and relational models.",
      },
      {
        number: "02",
        title: "Integration of 10 RESTful Endpoints",
        description:
          "Comprehensive input validation, HTTP status code handling, and centralized exception management.",
      },
      {
        number: "03",
        title: "Reusable React Components across 11 Modules",
        description:
          "Development of interactive interfaces, dynamic tables, modals, and high-precision reactive forms.",
      },
      {
        number: "04",
        title: "API Consumption with Axios and Data Synchronization",
        description:
          "Implementation of request interceptors, conditional rendering of loading states, and asynchronous error handling.",
      },
      {
        number: "05",
        title: "Agile Scrum Collaboration in a Team of 2 Developers",
        description:
          "Version control with Git/GitHub, continuous code reviews, and incremental deliveries in two-week sprints.",
      },
    ],

    input: "INPUT // ↓ ↓",
  },



  projects: {
    sectionNumber: "03.",
    sectionLabel: "CASE STUDIES",
    title: "Selected projects",
    description:
      "A selection of applications and solutions I have developed using different technologies and architectures.",
    input: "INPUT // ← →",

    labels: {
      featuredProject: "PROJECT 01 // FEATURED",
      project02: "PROJECT 02",
      project03: "PROJECT 03",
      project04: "PROJECT 04",
      highlightedCapabilities: "FEATURED CAPABILITIES:",
      architecturalAspects: "Architectural aspects",
      viewRepository: "View repository",
      backend: "Backend",
      frontend: "Frontend",
      github: "GitHub",
      demo: "Demo",
    },

    items: {
      matricula: {
        title: "School Enrollment System",
        category: "Full Stack · 2026",
        description:
          "Full Stack system for the comprehensive management of the school enrollment process, users, students, academic periods, and administrative catalogs. It includes a REST backend built with Java and Spring Boot and a frontend developed with React and TypeScript.",
        capabilities: [
          "15 JPA Repositories",
          "JPA / Hibernate Persistence",
          "Multiple CRUD Operations",
          "Complete REST APIs",
          "Entity Relationships",
          "React UI Components",
          "Live Documentation with Swagger/OpenAPI",
        ],
      },

      inventario: {
        title: "Inventory Management System",
        category: "Backend · 2026",
        description:
          "REST API for managing inventory, warehouses, materials, inbound and outbound movements, users, and roles. Implements authentication and authorization with Spring Security and JWT, together with Hexagonal Architecture.",
        capabilities: [
          "Role-Based Access Control (RBAC)",
          "Strict Stock Control",
          "Exception and Error Handling",
          "Token-Based Recovery",
          "DTOs & MapStruct",
          "Business Validation",
          "Cloudinary Asset Upload",
          "Swagger/OpenAPI 3",
        ],
      },

      deliveryNoche: {
        title: "DeliveryNoche",
        category: "Frontend Landing Page · 2026",
        description:
          "Responsive landing page for a delivery service, developed with React and TypeScript. Includes navigation, hero section, coverage, specialties, testimonials, calls to action, and direct contact through WhatsApp.",
        capabilities: [
          "Reusable Modular Components & Responsive Design",
          "High-Conversion Hero, Coverage, Specialties & Testimonials",
          "Direct WhatsApp Integration for Quick Orders",
        ],
      },

      flowSync: {
        title: "FlowSync",
        category: "Frontend Landing Page · 2026",
        description:
          "Landing page for a productivity and process management platform, developed with React and TypeScript. Features product functionality, pricing, testimonials, FAQ, and navigation through reusable components.",
        capabilities: [
          "Responsive Design Adapted to Different Devices",
          "Reusable Components and Modular Structure",
          "Features, Pricing, Testimonials and FAQ Sections",
          "Smooth Navigation and Intuitive User Experience",
        ],
      },
    },

  },

  technologies: {
    sectionNumber: "04.",
    sectionLabel: "TOOLS & KNOWLEDGE",
    stack: "STACK",
    title: "Technologies organized by specialization.",
    description:
      "Technologies and tools I use to build modern, scalable, and maintainable web applications.",
    input: "INPUT // ← →",
    categories: {
      frontend: "FRONTEND",
      backend: "BACKEND",
      databases: "DATABASES",
      persistence: "PERSISTENCE",
      tools: "TOOLS",
      methodologies: "METHODOLOGIES",
      architecture: "ARCHITECTURE",
      apis: "APIs",
    },
  },

  education: {
    sectionNumber: "05.",
    sectionLabel: "ACADEMIC",
    title: "Education",
    graduation: "GRADUATION",
    softSkillsTitle: "SOFT SKILLS //",
    certificationsSectionNumber: "06.",
    certificationsSectionLabel: "CERTIFICATIONS",
    certificationsTitle: "Certifications",
    viewCertificate: "View certificate",
    viewPdf: "View PDF",

    items: {
      degree: {
        title: "Systems Engineering and Computer Science",
        institution: "Universidad Tecnológica del Perú - UTP",
        period: "08/2026",
        description:
          "Rigorous focus on software engineering, algorithms, relational databases, project management, and distributed architectures.",
      },
    },

    certifications: {
      javaSpring: {
        title: "Java Spring Course",
        institution: "Platzi",
        year: "2025",
      },
      scrum: {
        title: "Scrum Fundamentals Certified (SFC™)",
        institution: "SCRUMstudy",
        year: "2025",
      },
      java: {
        title: "Java Course",
        institution: "Platzi",
        year: "2025",
      },
      terminal: {
        title: "Introduction to Terminal and Command Line",
        institution: "Platzi",
        year: "2025",
      },
    },

    softSkills: {
      teamwork: "Teamwork",
      problemSolving: "Problem Solving",
      adaptability: "Adaptability",
    },
  },
  contact: {
    sectionNumber: "07.",
    sectionLabel: "DIRECT CONNECTION",

    title: "LET'S TALK?",

    descriptionStart:
      "I am interested in opportunities as a",
    descriptionRole: "Full Stack Junior",
    descriptionEnd:
      "developer and in participating in projects where I can contribute value, learn, and continue growing professionally.",

    social: {
      whatsapp: "WhatsApp",
      linkedin: "LinkedIn",
      github: "GitHub",
    },

    developerLabel: "DEVELOPER",
    role: "Full Stack Junior",

    details: {
      location: "Location",
      locationValue: "Chimbote, Peru",
      availability: "Availability",
      availabilityValue: "Immediate",
      specialty: "Specialty",
      specialtyValue: "Java · Spring · React · Node",
    },

    quote:
      "Focused on building functional, maintainable web applications oriented toward solving real-world problems.",

    input: "INPUT // B A",
  },
};