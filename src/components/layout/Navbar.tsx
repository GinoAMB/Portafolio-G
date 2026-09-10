import { useState } from "react";
import {
  FiMenu,
  FiX,
  FiDownload,
} from "react-icons/fi";

const navItems = [
  { label: "INICIO", href: "#inicio" },
  { label: "SOBRE MI", href: "#sobre-mi" },
  { label: "EXPERIENCIA", href: "#experiencia" },
  { label: "PROYECTOS", href: "#proyectos" },
  { label: "STACK", href: "#stack" },
  { label: "CONTACTO", href: "#contacto" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-200/70 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo / Nombre */}
        <div className="flex items-end gap-3">
          <a
            href="#inicio"
            className="font-syne text-3xl font-extrabold tracking-tight text-gray-900"
          >
            Gino<span className="text-blue-600">.</span>
          </a>

          <span className="h-3 w-px bg-gray-300 mb-1" />

          <span className="text-xs font-semibold tracking-wide text-gray-300 mb-1">
            FS DEV
          </span>
        </div>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop Descargar CV */}
        <a
          href="/CV_Gino_Moreno_Bejarano.pdf"
          download="Gino-Moreno-Bejarano-CV.pdf"
          className="hidden items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-gray-800 md:flex"
        >
          Descargar CV
          <FiDownload size={16} />
        </a>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100 md:hidden"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="border-t border-gray-200 bg-white px-6 py-5 md:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-600"
              >
                {item.label}
              </a>
            ))}

            {/* Mobile Descargar CV */}
            <a
              href="/CV_Gino_Moreno_Bejarano.pdf"
              download="Gino-Moreno-Bejarano-CV.pdf"
              onClick={handleLinkClick}
              className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800"
            >
              Descargar CV
              <FiDownload size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
