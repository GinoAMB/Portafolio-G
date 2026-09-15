import type { Education, Certification, SoftSkill } from "./education.types";

export const education: Education[] = [
  {
    title: "Ingeniería de Sistemas e Informática",
    institution: "Universidad Tecnológica del Perú - UTP  ",
    period: "08/2026",
    description:
      "Enfoque riguroso en ingeniería de software, algoritmos, bases de datos relacionales, gestión de proyectos y arquitecturas distribuidas.",
  },
];

export const softSkills: SoftSkill[] = [
  { name: "Trabajo en equipo" },
  { name: "Resolución de problemas" },
  { name: "Adaptabilidad" },
]

export const certifications: Certification[] = [
  {
    title: "Curso de Java Spring",
    institution: "Platzi",
    year: "2025",
    pdf: "/certifications/diploma-java-spring-boot.pdf",
  },
  {
    title: "Scrum Fundamentals Certified (SFC™)",
    institution: "SCRUMstudy",
    year: "2025",
    pdf: "/certifications/ScrumFundamentalsCertified-GinoAndersonMorenoBejarano-1130858.pdf",
  },
  {
    title: "Curso de Java",
    institution: "Platzi",
    year: "2025",
    pdf: "/certifications/diploma-java.pdf",
  },
  {
    title: "Introducción a la Terminal y Líneas de Comando",
    institution: "Platzi",
    year: "2025",
    pdf: "/certifications/diploma-terminal.pdf",
  },
];