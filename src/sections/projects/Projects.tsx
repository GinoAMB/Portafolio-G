import GridBackground from "../../components/ui/GridBackground";
import { projects } from "./projects.data";
import ProjectFeatured from "./components/ProjectFeatured";
import ProjectSplit from "./components/ProjectSplit";
import ProjectReverse from "./components/ProjectReverse";
import ProjectMinimal from "./components/ProjectMinimal";

function Projects() {
  const renderProject = (project: (typeof projects)[number]) => {
    switch (project.variant) {
      case "featured":
        return <ProjectFeatured key={project.id} project={project} />;

      case "split":
        return <ProjectSplit key={project.id} project={project} />;

      case "reverse":
        return <ProjectReverse key={project.id} project={project} />;

      case "minimal":
        return <ProjectMinimal key={project.id} project={project} />;

      default:
        return null;
    }
  };

  return (
    <section
      id="proyectos"
      className="relative overflow-hidden bg-[#0F172A] py-16 sm:py-20 md:py-24"
    >
      {/* Cuadrícula */}
      <GridBackground variant="dark" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6">
        {/* Encabezado */}
        <div className="mb-12 grid min-w-0 gap-6 sm:mb-14 md:mb-16 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div className="min-w-0">
            <span className="block max-w-full text-sm font-medium uppercase tracking-wider text-green-400">
      // 03. CASE STUDIES
            </span>

            <h2 className="mt-3 break-words font-syne text-2xl font-extrabold uppercase leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl">
              Proyectos seleccionados
            </h2>
          </div>

          <div className="min-w-0 md:justify-self-end md:max-w-md">
            <p className="break-words text-lg leading-7 text-gray-400 md:text-right">
              Una selección de aplicaciones y soluciones que he desarrollado
              utilizando diferentes tecnologías y arquitecturas.
            </p>
          </div>
        </div>

        {/* Proyectos */}
        <div className="min-w-0 space-y-8 sm:space-y-10">
          {projects.map(renderProject)}
        </div>
      </div>
    </section>
  );
}

export default Projects;
