function Experience() {
  const responsibilities = [
    {
      number: "01",
      title: "Desarrollo Backend con Node.js & Prisma ORM",
      description:
        "Diseño, construcción y optimización de servicios de persistencia y modelos relacionales seguros.",
    },
    {
      number: "02",
      title: "Integración de 10 Endpoints RESTful",
      description:
        "Validaciones exhaustivas de entradas, control de códigos de estado HTTP y manejo centralizado de excepciones.",
    },
    {
      number: "03",
      title: "Componentes React Reutilizables en 11 Módulos",
      description:
        "Construcción de interfaces interactivas, tablas dinámicas, modales y formularios reactivos de alta precisión.",
    },
    {
      number: "04",
      title: "Consumo de APIs con Axios y Sincronización de Datos",
      description:
        "Implementación de interceptores de solicitudes, renderizado condicional de estados de carga y manejo de errores asíncronos.",
    },
    {
      number: "05",
      title: "Colaboración Ágil Scrum en Equipo de 2 Desarrolladores",
      description:
        "Control de versiones con Git/GitHub, code reviews continuos y entregas incrementales en sprints quincenales.",
    },
  ];

  return (
    <section
      id="experiencia"
      className="relative overflow-hidden px-5 py-8 sm:px-8 sm:py-10 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="flex items-center gap-3 py-8 sm:gap-5 sm:py-10">
          <span className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.15em] text-blue-600 sm:text-xs sm:tracking-[0.2em] lg:text-sm">
            02. Trayectoria
          </span>

          <span className="h-px flex-1 bg-gray-200" />

          <span className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400 sm:text-xs sm:tracking-[0.2em] lg:text-sm">
            Experiencia
          </span>
        </div>

        {/* Experience card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.35fr_0.65fr] lg:gap-8">
            {/* Company information */}
            <div className="border-b border-gray-200 pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
              {/* Period */}
              <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-green-600 sm:text-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                2025 — 2026 · Remoto
              </span>

              {/* Company */}
              <h2 className="mt-6 font-syne text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                AM CODE
              </h2>

              {/* Position */}
              <p className="mt-1 text-xs font-semibold text-blue-600 sm:text-sm">
                Desarrollador Web — Prácticas Preprofesionales
              </p>

              {/* Description */}
              <p className="mt-6 max-w-sm text-sm leading-6 text-gray-500">
                Participación activa en el ciclo de vida del software,
                colaborando en el diseño y despliegue de módulos funcionales
                bajo metodología ágil Scrum.
              </p>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-3 gap-2 sm:max-w-sm sm:gap-3">
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-3 text-center">
                  <span className="block font-syne text-lg font-bold text-blue-600">
                    10
                  </span>
                  <span className="mt-1 block text-[8px] font-semibold uppercase tracking-wide text-gray-400 sm:text-[9px]">
                    Endpoints
                    <br />
                    REST
                  </span>
                </div>

                <div className="rounded-lg border border-gray-200 bg-gray-50 p-3 text-center">
                  <span className="block font-syne text-lg font-bold text-gray-900">
                    11
                  </span>
                  <span className="mt-1 block text-[8px] font-semibold uppercase tracking-wide text-gray-400 sm:text-[9px]">
                    Módulos
                    <br />
                    React
                  </span>
                </div>

                <div className="rounded-lg border border-gray-200 bg-gray-50 p-3 text-center">
                  <span className="block font-syne text-lg font-bold text-green-500">
                    2
                  </span>
                  <span className="mt-1 block text-[8px] font-semibold uppercase tracking-wide text-gray-400 sm:text-[9px]">
                    Devs
                    <br />
                    Equipo
                  </span>
                </div>
              </div>
            </div>

            {/* Responsibilities */}
            <div>
              <h3 className="font-syne text-xs font-bold uppercase tracking-[0.08em] text-gray-900 sm:text-sm">
                Aportes y responsabilidades técnicas
              </h3>

              <div className="mt-7 space-y-6">
                {responsibilities.map((item) => (
                  <div
                    key={item.number}
                    className="flex gap-4"
                  >
                    {/* Number */}
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-blue-50 font-mono text-[8px] font-bold text-blue-600 sm:h-10 sm:w-10 sm:text-[15px]">
                      {item.number}
                    </span>

                    {/* Content */}
                    <div>
                      <h4 className="text-xs font-semibold text-gray-900 sm:text-sm">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-[11px] leading-5 text-gray-500 sm:text-xs sm:leading-5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t border-gray-100 pt-4">
                <span className="font-mono text-[10px] tracking-widest text-gray-200">
                  INPUT // ↓ ↓
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;