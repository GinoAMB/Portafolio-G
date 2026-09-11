import {
    FiArrowDown,
    FiDownload,
    FiGithub,
    FiLinkedin,
    FiMail,
} from "react-icons/fi";

function Hero() {
    return (
        <section id="inicio" className="min-h-screen">
            <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-10 px-4 pt-28 pb-8 sm:gap-12 sm:px-6 sm:pt-32 sm:pb-10 lg:gap-16 lg:px-8">
                {/* Información superior */}
                <div className="hero-fade-down flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    {/* Disponibilidad */}
                    <div className="flex items-start gap-3 sm:items-center">
                        <span className="relative mt-0.5 flex h-2.5 w-2.5 shrink-0 sm:mt-0">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                        </span>

                        <span className="text-xs font-semibold uppercase leading-relaxed tracking-[0.12em] text-gray-500">
                            Disponible para nuevos proyectos & rol Full Stack
                        </span>
                    </div>

                    {/* Ubicación */}
                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-400 sm:text-right">
                        Chimbote, Perú&nbsp; / &nbsp;LATAM · Remoto
                    </span>
                </div>

                {/* Contenido */}
                <div className="grid flex-1 items-center gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
                    {/* Columna izquierda */}
                    <div className="max-w-4xl">
                        <p className="hero-fade-up hero-delay-1 mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 sm:text-sm">
    // Full Stack Developer
                        </p>
                        <h1 className="hero-fade-up hero-delay-2 max-w-full font-syne text-[clamp(2.1rem,9.5vw,6rem)] font-extrabold leading-[0.95] tracking-tight text-gray-900">
                            Gino Anderson
                            <br />
                            <span className="text-blue-600">
                                Moreno
                            </span>{" "}
                            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-gray-900 bg-clip-text text-transparent">
                                Bejarano
                            </span>
                        </h1>


                        <p className="hero-fade-up hero-delay-3 mt-6 max-w-2xl text-base leading-relaxed text-gray-600 sm:mt-8 sm:text-lg md:text-xl">
                            “Construyo aplicaciones web modernas, funcionales y orientadas a
                            resolver problemas reales.”
                        </p>

                        {/* Tecnologías principales */}
                        <div className="hero-fade-up hero-delay-4 mt-8 flex flex-wrap gap-2 sm:mt-10 sm:gap-3">                            <div className="flex h-9 items-center rounded-full border border-gray-200 bg-white px-4 transition hover:-translate-y-1 hover:border-blue-600 hover:shadow-sm sm:h-10 sm:px-5">
                            <span className="font-syne text-xs font-bold text-gray-900 sm:text-sm">
                                Java
                            </span>
                        </div>

                            <div className="flex h-9 items-center rounded-full border border-gray-200 bg-white px-4 transition hover:-translate-y-1 hover:border-blue-600 hover:shadow-sm sm:h-10 sm:px-5">
                                <span className="font-syne text-xs font-bold text-gray-900 sm:text-sm">
                                    Spring Boot
                                </span>
                            </div>

                            <div className="flex h-9 items-center rounded-full border border-gray-200 bg-white px-4 transition hover:-translate-y-1 hover:border-blue-600 hover:shadow-sm sm:h-10 sm:px-5">
                                <span className="font-syne text-xs font-bold text-gray-900 sm:text-sm">
                                    React
                                </span>
                            </div>

                            <div className="flex h-9 items-center rounded-full border border-gray-200 bg-white px-4 transition hover:-translate-y-1 hover:border-blue-600 hover:shadow-sm sm:h-10 sm:px-5">
                                <span className="font-syne text-xs font-bold text-gray-900 sm:text-sm">
                                    Node.js
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Columna derecha */}
                    <div className="hero-fade-right hero-delay-3 w-full max-w-md lg:ml-auto">
                        {/* Architecture Spec */}
                        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
                            <div className="flex items-center justify-between gap-4 border-b border-gray-200 pb-3">
                                <div className="flex min-w-0 items-center gap-3">
                                    <span className="h-2 w-2 shrink-0 rounded-full bg-blue-600" />

                                    <span className="truncate font-syne text-xs font-bold uppercase tracking-[0.12em] text-gray-400 sm:text-sm">
                                        Architecture Spec
                                    </span>
                                </div>

                                <span className="shrink-0 font-syne text-xs font-bold tracking-[0.12em] text-gray-400">
                                    v2.6
                                </span>
                            </div>

                            <div className="mt-4 space-y-4 text-sm text-gray-600">
                                <div className="flex items-start justify-between gap-4">
                                    <span className="shrink-0 font-semibold text-gray-400">
                                        Backend:
                                    </span>

                                    <span className="text-right font-semibold text-gray-900">
                                        Spring Boot + Hexagonal
                                    </span>
                                </div>

                                <div className="flex items-start justify-between gap-4">
                                    <span className="shrink-0 font-semibold text-gray-400">
                                        Frontend:
                                    </span>

                                    <span className="text-right font-semibold text-gray-900">
                                        React + TS + Tailwind
                                    </span>
                                </div>

                                <div className="flex items-start justify-between gap-4">
                                    <span className="shrink-0 font-semibold text-gray-400">
                                        Persistencia:
                                    </span>

                                    <span className="text-right font-semibold text-gray-900">
                                        PostgreSQL / JPA / Prisma
                                    </span>
                                </div>

                                <div className="flex items-start justify-between gap-4">
                                    <span className="shrink-0 font-semibold text-gray-400">
                                        API Specs:
                                    </span>

                                    <span className="text-right font-semibold text-blue-600">
                                        OpenAPI / Swagger 3.0
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Acciones */}
                        <div className="hero-fade-up hero-delay-4 mt-5 space-y-3 sm:mt-6">
                            <a
                                href="#proyectos"
                                className="flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-700"
                            >
                                Ver proyectos
                                <FiArrowDown size={18} />
                            </a>

                            <a
                                href="/CV_Gino_Moreno_Bejarano.pdf"
                                download="Gino-Moreno-Bejarano-CV.pdf"
                                className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3.5 font-semibold text-gray-900 transition hover:bg-gray-50"
                            >
                                Descargar CV
                                <FiDownload size={18} />
                            </a>
                        </div>

                        {/* Redes profesionales */}
                        <div className="hero-fade-up hero-delay-5 mt-7 flex flex-col gap-4 border-t border-gray-200 pt-5 sm:mt-8 sm:flex-row sm:items-center sm:gap-6 sm:pt-6">
                            <p className="text-xs font-semibold uppercase leading-relaxed tracking-[0.15em] text-gray-400"> Redes <br /> profesionales: </p>

                            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                                <a
                                    href="https://github.com/GinoAMB"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm font-semibold text-gray-700 transition hover:text-blue-600"
                                >
                                    <FiGithub size={18} />
                                    GitHub
                                </a>

                                <a
                                    href="https://linkedin.com/in/ginomorenobejarano"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm font-semibold text-gray-700 transition hover:text-blue-600"
                                >
                                    <FiLinkedin size={18} />
                                    LinkedIn
                                </a>

                                <a
                                    href="mailto:gino.anderson2011@gmail.com"
                                    className="flex items-center gap-2 text-sm font-semibold text-gray-700 transition hover:text-blue-600"
                                >
                                    <FiMail size={18} />
                                    Email
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Información inferior */}
                <div className="hero-fade-up hero-delay-6 grid border-t border-gray-200 pt-6 md:grid-cols-2 lg:grid-cols-4 lg:pt-8">                    {/* 01 */}
                    <div className="border-b border-gray-200 py-5 md:pr-8 lg:border-b-0 lg:border-r">
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
                            01 / Enfoque
                        </p>

                        <p className="mt-2 font-syne text-sm font-bold text-gray-900">
                            Arquitectura Limpia & REST
                        </p>
                    </div>

                    {/* 02 */}
                    <div className="border-b border-gray-200 py-5 md:pl-8 md:pr-8 lg:border-b-0 lg:border-r">
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
                            02 / Core Stack
                        </p>

                        <p className="mt-2 font-syne text-sm font-bold text-gray-900">
                            Spring Boot & React TS
                        </p>
                    </div>

                    {/* 03 */}
                    <div className="border-b border-gray-200 py-5 md:pr-8 lg:border-b-0 lg:border-r lg:pl-8">
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
                            03 / Exp. Profesional
                        </p>

                        <p className="mt-2 font-syne text-sm font-bold text-gray-900">
                            AM CODE (Backend/Frontend)
                        </p>
                    </div>

                    {/* 04 */}
                    <div className="py-5 md:pl-8">
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
                            04 / Disponibilidad
                        </p>

                        <p className="mt-2 font-syne text-sm font-bold text-green-600">
                            Inmediata · Remoto / Híbrido
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
