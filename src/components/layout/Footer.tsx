function Footer() {
    return (
        <footer className="bg-black px-4 py-12 sm:px-12 lg:px-16">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                {/* Brand */}
                <div className="min-w-0">
                    <a
                        href="#inicio"
                        className="font-syne text-2xl font-extrabold tracking-tight text-white sm:text-3xl"
                    >
                        GINO<span className="text-blue-600">.</span>
                    </a>

                    <p className="mt-2 max-w-xl text-xs font-medium leading-5 tracking-wide text-white/60 sm:text-sm">
                        Full Stack Developer · Java · Spring Boot · React · Node.js ·
                        Chimbote, Perú
                    </p>
                </div>

                {/* Links */}
                <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 sm:gap-x-8">
                    <a
                        href="https://github.com/GinoAMB"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-white/60 transition-colors hover:text-blue-500 sm:text-sm"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://linkedin.com/in/ginomorenobejarano"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-white/60 transition-colors hover:text-blue-500 sm:text-sm"
                    >
                        LinkedIn
                    </a>

                    <a
                        href="mailto:gino.anderson2011@gmail.com"
                        className="text-xs font-medium text-white/60 transition-colors hover:text-blue-500 sm:text-sm"
                    >
                        Email
                    </a>
                </nav>

                {/* Copyright */}
                <p className="shrink-0 text-xs font-medium text-white/40 lg:text-right">
                    © 2026 Gino Anderson Moreno Bejarano
                </p>
            </div>
        </footer>
    );
}

export default Footer;
