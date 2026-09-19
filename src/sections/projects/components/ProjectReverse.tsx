import { FaCheck, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import type { Project } from "../projects.types";

import { useLanguage } from "../../../context/LanguageContext";
import { translations } from "../../../locales";

interface ProjectReverseProps {
  project: Project;
}

function ProjectReverse({ project }: ProjectReverseProps) {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <article className="group grid overflow-hidden md:grid-cols-2">
      {/* Imagen */}
      <div className="order-1 flex min-w-0 items-center justify-center rounded-lg p-2">
        <img
          src={project.image}
          alt={project.title}
          className="h-auto max-w-full rounded-lg object-contain transition duration-500 group-hover:scale-[1.03]"
        />
      </div>

      {/* Contenido */}
      <div className="order-2 flex min-w-0 flex-col justify-center p-5 sm:p-6 md:p-10">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs font-medium uppercase tracking-wider text-emerald-400">
            {t.projects.labels.project03}
          </span>

          <span className="inline-flex rounded-md border border-amber-400/20 bg-amber-500/10 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-amber-400 backdrop-blur-sm">
            {project.category}
          </span>
        </div>

        {/* Título */}
        <h3 className="mt-3 font-syne text-xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
          {project.title}
        </h3>

        {/* Descripción */}
        <p className="mt-5 max-w-xl text-sm leading-7 text-gray-300 md:text-base">
          {project.description}
        </p>

        {/* Capabilities */}
        <div className="mt-2">
          <ul className="mt-3 space-y-2">
            {project.capabilities?.map((capability) => (
              <li
                key={capability}
                className="flex items-start gap-2 text-sm leading-6 text-gray-300"
              >
                <FaCheck className="mt-1.5 shrink-0 text-xs text-emerald-400" />

                <span className="min-w-0 break-words">
                  {capability}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tecnologías */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-300"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Enlaces */}
        <div className="mt-8 flex flex-wrap gap-3">
          {project.github?.map((repository) => (
            <a
              key={repository}
              href={repository}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-600"
            >
              <FaGithub />
              {t.projects.labels.github}
            </a>
          ))}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              <FaExternalLinkAlt />
              {t.projects.labels.demo}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectReverse;