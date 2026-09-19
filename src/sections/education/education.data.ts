import type { Education, Certification, SoftSkill } from "./education.types";

export const getEducation = (t: any): Education[] => [
  {
    title: t.education.items.degree.title,
    institution: t.education.items.degree.institution,
    period: t.education.items.degree.period,
    description: t.education.items.degree.description,
  },
];

export const getCertifications = (t: any): Certification[] => [
  {
    title: t.education.certifications.javaSpring.title,
    institution: t.education.certifications.javaSpring.institution,
    year: t.education.certifications.javaSpring.year,
    pdf: "/certificates/java-spring.pdf",
  },
  {
    title: t.education.certifications.scrum.title,
    institution: t.education.certifications.scrum.institution,
    year: t.education.certifications.scrum.year,
    pdf: "/certificates/scrum.pdf",
  },
  {
    title: t.education.certifications.java.title,
    institution: t.education.certifications.java.institution,
    year: t.education.certifications.java.year,
    pdf: "/certificates/java.pdf",
  },
  {
    title: t.education.certifications.terminal.title,
    institution: t.education.certifications.terminal.institution,
    year: t.education.certifications.terminal.year,
    pdf: "/certificates/terminal.pdf",
  },
];

export const getSoftSkills = (t: any): SoftSkill[] => [
  {
    name: t.education.softSkills.teamwork,
  },
  {
    name: t.education.softSkills.problemSolving,
  },
  {
    name: t.education.softSkills.adaptability,
  },
];