import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import type { Project } from "../projects.types";

interface ProjectSplitProps {
  project: Project;
}

function ProjectSplit({ project }: ProjectSplitProps) {
  return (
    <article className="group overflow-hidden rounded-lg border border-white/10 bg-[#151C2B] p-3 sm:p-5">
      {/* Contenido superior */}
      <div className="grid gap-8 p-5 sm:gap-10 sm:p-8 md:grid-cols-2 md:p-10">
        {/* Columna izquierda */}
        <div className="flex flex-col justify-center">
          {/* Número + Categoría */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-medium uppercase tracking-wider text-emerald-400">
              PROYECTO 02
            </span>

            <span className="inline-flex rounded-md border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-violet-400 backdrop-blur-sm">
              {project.category}
            </span>
          </div>

          {/* Título */}
          <h3 className="mt-3 font-syne text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl">
            {project.title}
          </h3>

          {/* Descripción */}
          <p className="mt-5 text-sm leading-7 text-gray-500">
            {project.description}
          </p>

          {/* Tecnologías */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((technology, index) => (
              <span
                key={technology}
                className={`rounded-md border px-3 py-1.5 text-xs font-medium ${
                  index === 0
                    ? "border-blue-400/20 bg-blue-500/10 text-blue-400"
                    : "border-emerald-400/20 bg-emerald-500/10 text-emerald-400"
                }`}
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* Columna derecha */}
        <div className="flex flex-col justify-center border-t border-white/10 pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
          {/* Título */}
          <h4 className="text-xs font-medium uppercase tracking-wider text-gray-400">
            Aspectos arquitectónicos
          </h4>

          {/* Capacidades */}
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {project.capabilities?.map((capability) => (
              <div
                key={capability}
                className="flex items-start gap-2 text-sm text-gray-400"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400" />
                <span>{capability}</span>
              </div>
            ))}
          </div>

          {/* Repositorio */}
          {project.github?.[0] && (
            <div className="mt-8">
              <a
                href={project.github[0]}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-gray-300 transition hover:border-violet-400/30 hover:bg-violet-500/10 hover:text-violet-400"
              >
                <FaGithub />
                Ver repositorio
                <FaExternalLinkAlt className="text-xs" />
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Imagen abajo */}
      <div className="min-h-auto overflow-hidden rounded-xl bg-slate-100 sm:min-h-[280px] md:min-h-[320px]">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-contain rounded-xl transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
    </article>
  );
}

export default ProjectSplit;
