function About() {
  return (
    <section
      id="sobre-mi"
      className="relative overflow-hidden bg-white px-5 py-8 sm:px-8 sm:py-10 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="flex items-center gap-3 py-8 sm:gap-5 sm:py-10">
          <span className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.15em] text-blue-600 sm:text-xs sm:tracking-[0.2em] lg:text-sm">
            01. Sobre mí
          </span>

          <span className="h-px flex-1 bg-gray-200" />

          <span className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400 sm:text-xs sm:tracking-[0.2em] lg:text-sm">
            Sobre mí
          </span>
        </div>

        {/* Main content */}
        <div className="grid gap-12 sm:gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          {/* Left column */}
          <div>
            <h2 className="max-w-xl font-syne text-3xl font-extrabold leading-[1.05] tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Ingeniería de software con mentalidad pragmática y visión integral.
            </h2>

            {/* Development philosophy */}
            <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:mt-10 sm:p-7">
              <span className="font-syne text-[11px] font-bold uppercase tracking-[0.15em] text-blue-600 sm:text-xs">
                Filosofía de desarrollo
              </span>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                Priorizo la legibilidad del código, la separación de
                responsabilidades (SoC) y la resolución directa de
                requerimientos de negocio sobre la complejidad innecesaria.
              </p>
            </div>
          </div>

          {/* Right column */}
          <div>
            <p className="text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Soy desarrollador{" "}
              <span className="font-semibold text-blue-600 underline underline-offset-4">
                Full Stack
              </span>{" "}
              con experiencia en desarrollo backend y frontend. He trabajado
              con{" "}
              <strong className="font-semibold text-gray-900">
                Java, Spring Boot, React, Node.js, PHP y Prisma
              </strong>
              , desarrollando{" "}
              <code className="rounded bg-blue-50 px-1.5 py-0.5 font-mono text-[0.9em] font-semibold text-blue-600">
                APIs REST
              </code>{" "}
              robustas, interfaces web modernas y soluciones conectadas a
              bases de datos relacionales.
            </p>

            <p className="mt-5 text-sm leading-7 text-gray-600 sm:mt-6 sm:text-base">
              Me interesa profundamente construir{" "}
              <strong className="font-semibold text-gray-900">
                software mantenible
              </strong>
              , aprender nuevas tecnologías con rapidez y participar en
              equipos multidisciplinarios donde pueda{" "}
              <strong className="font-semibold text-gray-900 underline decoration-green-600 underline-offset-4">
                aportar valor tangible
              </strong>{" "}
              y seguir creciendo profesionalmente como ingeniero.
            </p>

            {/* Technical approach */}
            <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-3">
              {/* Card 01 */}
              <div className="group rounded-2xl border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-600/30 hover:shadow-lg hover:shadow-gray-200/50">
                <span className="text-xs font-semibold tracking-[0.15em] text-blue-600">
                  01
                </span>

                <h3 className="mt-5 font-syne text-sm font-bold uppercase tracking-wide text-gray-900">
                  Clear Architecture
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Patrones MVC, DAO y Arquitectura Hexagonal que garantizan
                  bajo acoplamiento.
                </p>
              </div>

              {/* Card 02 */}
              <div className="group rounded-2xl border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-600/30 hover:shadow-lg hover:shadow-gray-200/50">
                <span className="text-xs font-semibold tracking-[0.15em] text-green-400">
                  02
                </span>

                <h3 className="mt-5 font-syne text-sm font-bold uppercase tracking-wide text-gray-900">
                  REST APIs & DBs
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Persistencia con Spring Data JPA, Hibernate y Prisma sobre
                  PostgreSQL y MySQL.
                </p>
              </div>

              {/* Card 03 */}
              <div className="group rounded-2xl border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-600/30 hover:shadow-lg hover:shadow-gray-200/50">
                <span className="text-xs font-semibold tracking-[0.15em] text-gray-400">
                  03
                </span>

                <h3 className="mt-5 font-syne text-sm font-bold uppercase tracking-wide text-gray-900">
                  Modern UI/UX
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Componentes reutilizables con React, TypeScript y diseño
                  responsivo fluido.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
