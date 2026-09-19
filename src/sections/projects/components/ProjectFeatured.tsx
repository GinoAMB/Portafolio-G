import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import type { Project } from "../projects.types";

import { useLanguage } from "../../../context/LanguageContext";
import { translations } from "../../../locales";

interface ProjectFeaturedProps {
  project: Project;
}

function ProjectFeatured({ project }: ProjectFeaturedProps) {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <article className="group overflow-hidden bg-transparent">
      <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">

        {/* Contenido */}
        <div className="order-2 md:order-1">

          {/* Categoría */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium uppercase tracking-wider text-emerald-400">
              {t.projects.labels.featuredProject}
            </span>

            <span className="inline-flex rounded-md border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-blue-500 backdrop-blur-sm">
              {project.category}
            </span>
          </div>

          {/* Título */}
          <h3 className="mt-3 font-syne text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
            {project.title}
          </h3>

          {/* Descripción */}
          <p className="mt-5 max-w-xl text-sm leading-7 text-gray-300 md:text-base">
            {project.description}
          </p>

          {/* Capacidades */}
          {project.capabilities && project.capabilities.length > 0 && (
            <div className="mt-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                {t.projects.labels.highlightedCapabilities}
              </h4>

              <ul className="mt-3 grid list-disc list-inside grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                {project.capabilities.map((capability) => (
                  <li
                    key={capability}
                    className="text-sm text-gray-300"
                  >
                    {capability}
                  </li>
                ))}
              </ul>
            </div>
          )}

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
            {project.github?.map((repository, index) => (
              <a
                key={repository}
                href={repository}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-lg border px-10 py-2 text-sm font-medium transition ${
                  project.github!.length > 1 && index === 0
                    ? "border-blue-500 bg-blue-500 text-white hover:bg-blue-600"
                    : "border-gray-600 bg-gray-700 text-gray-200 hover:bg-gray-600"
                }`}
              >
                <FaGithub />

                {project.github!.length > 1
                  ? index === 0
                    ? t.projects.labels.backend
                    : t.projects.labels.frontend
                  : t.projects.labels.github}
              </a>
            ))}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-600"
              >
                <FaExternalLinkAlt />
                {t.projects.labels.demo}
              </a>
            )}
          </div>
        </div>

        {/* Imagen */}
        <div className="order-1 overflow-hidden rounded-xl md:order-2">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.02]"
          />
        </div>
      </div>
    </article>
  );
}

export default ProjectFeatured;