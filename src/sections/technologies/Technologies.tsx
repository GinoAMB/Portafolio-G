import { technologyCategories } from "./technologies.data";

function Technologies() {
    return (
        <section id="stack" className="bg-gray-50 py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                {/* Section label */}
                <div className="flex items-center gap-3 py-8 sm:gap-5 sm:py-10">
                    <span className="whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.12em] text-blue-600 sm:text-xs sm:tracking-[0.2em] lg:text-sm">
                        04. Herramientas & conocimientos
                    </span>

                    <span className="h-px flex-1 bg-gray-200" />

                    <span className="whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.12em] text-gray-400 sm:text-xs sm:tracking-[0.2em] lg:text-sm">
                        Stack
                    </span>
                </div>

                {/* Header */}
                <div className="grid gap-6 md:grid-cols-2 md:items-end md:gap-8">
                    <div>
                        <h2 className="max-w-xl font-syne text-2xl font-extrabold leading-[1.05] tracking-tight text-black sm:text-4xl lg:text-4xl">
                            Tecnologías organizadas por especialidad.
                        </h2>
                    </div>

                    <div className="min-w-0 md:justify-self-end md:max-w-xl">
                        <p className="break-words text-base leading-7 text-gray-400 sm:text-lg md:text-right">
                            Tecnologías y herramientas que utilizo para desarrollar
                            aplicaciones web modernas, escalables y mantenibles.
                        </p>
                    </div>
                </div>

                {/* Categories */}
                <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
                    {technologyCategories.map((category) => (
                        <article
                            key={category.id}
                            className="group min-w-0 rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg sm:p-6 md:p-8"
                        >
                            {/* Category header */}
                            <div className="flex min-w-0 items-center gap-2">
                                <h3 className="break-words text-xs font-bold tracking-[0.12em] text-blue-600 sm:tracking-[0.15em]">
                                    {category.id} // {category.title}
                                </h3>
                            </div>

                            {/* Technologies */}
                            <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
                                {category.technologies.map((technology) => (
                                    <span
                                        key={technology.name}
                                        className="max-w-full break-words rounded-lg border border-gray-200 bg-gray-100 px-2 py-1 text-xs font-medium text-black transition-colors duration-300 group-hover:bg-gray-200 group-hover:text-gray-900 sm:text-sm"
                                    >
                                        {technology.name}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Technologies;
