import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { contactInfo } from "./contact.data";

function Contact() {
    return (
        <section
            id="contacto"
            className="relative overflow-hidden bg-[#151C2B] px-5 py-8 sm:px-8 sm:py-20 lg:px-12"
        >
            <div className="mx-auto max-w-7xl">
                {/* Section heading */}
                <div className="flex items-start gap-3 sm:items-center">
                    <span className="relative mt-0.5 flex h-2.5 w-2.5 shrink-0 sm:mt-0">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                    </span>

                    <span className="text-xs font-semibold uppercase leading-relaxed tracking-[0.12em] text-white/70">
                        // 07. CONEXIÓN DIRECTA
                    </span>
                </div>

                {/* Content */}
                <div className="mt-10 grid gap-10 lg:mt-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-16">
                    {/* Left */}
                    <div className="min-w-0">
                        <h2 className="max-w-2xl font-syne text-2xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                            ¿HABLAMOS?
                        </h2>

                        <p className="mt-5 max-w-2xl text-base leading-7 text-white/60 sm:mt-6 sm:text-lg sm:leading-8">
                            Estoy interesado en oportunidades como desarrollador{" "}
                            <strong className="font-semibold text-white">
                                Full Stack Junior
                            </strong>{" "}
                            y en participar en proyectos donde pueda aportar valor,
                            aprender y seguir creciendo profesionalmente.
                        </p>

                        {/* Email */}
                        <a
                            href="mailto:gino.anderson2011@gmail.com"
                            className="mt-7 inline-flex max-w-full break-all font-syne text-base font-medium text-blue-500 underline transition duration-300 hover:text-blue-400 sm:mt-8 sm:text-2xl"
                        >
                            gino.anderson2011@gmail.com
                        </a>

                        {/* Social links */}
                        <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-3">
                            {contactInfo
                                .filter((item) => item.label !== "Email")
                                .map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex min-w-0 items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition duration-300 hover:-translate-y-1 hover:border-green-500/30 hover:bg-white/10"
                                    >
                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white transition duration-300 group-hover:bg-blue-500 group-hover:text-white">
                                            {item.label === "WhatsApp" && (
                                                <FaWhatsapp size={17} />
                                            )}

                                            {item.label === "LinkedIn" && (
                                                <FaLinkedin size={17} />
                                            )}

                                            {item.label === "GitHub" && (
                                                <FaGithub size={17} />
                                            )}
                                        </div>

                                        <div className="min-w-0">
                                            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-white/40">
                                                {item.label}
                                            </p>

                                            <p className="mt-1 truncate text-sm font-medium text-white/70 group-hover:text-white">
                                                {item.value}
                                            </p>
                                        </div>
                                    </a>
                                ))}
                        </div>
                    </div>

                    {/* Right */}
                    <div className="min-w-0 space-y-4">
                        {/* Developer card */}
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-7">
                            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-green-500">
                                DESARROLLADOR
                            </p>

                            <h3 className="mt-4 break-words font-syne text-2xl font-bold leading-tight text-white sm:text-3xl">
                                Gino Anderson Moreno Bejarano
                            </h3>

                            <p className="mt-2 text-sm font-medium text-white/50">
                                Full Stack Junior
                            </p>

                            <div className="mt-6 space-y-4 border-t border-white/10 pt-5">
                                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                                    <span className="text-sm text-white/40">
                                        Ubicación
                                    </span>

                                    <span className="text-sm font-medium text-white/80 sm:text-right">
                                        Chimbote, Perú
                                    </span>
                                </div>

                                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                                    <span className="text-sm text-white/40">
                                        Disponibilidad
                                    </span>

                                    <span className="text-sm font-medium text-green-400 sm:text-right">
                                        Inmediata
                                    </span>
                                </div>

                                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                                    <span className="text-sm text-white/40">
                                        Especialidad
                                    </span>

                                    <span className="break-words text-sm font-medium text-white/80 sm:text-right">
                                        Java · Spring · React · Node
                                    </span>
                                </div>

                                {/* Description card */}
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-7">
                                    <p className="font-syne text-base font-semibold leading-7 text-white/80 sm:text-lg sm:leading-8">
                                        “Enfocado en construir aplicaciones web
                                        funcionales, mantenibles y orientadas a
                                        resolver problemas reales.”
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
