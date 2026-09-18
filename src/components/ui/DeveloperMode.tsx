import { useEffect, useState } from "react";
import { FiTerminal, FiX } from "react-icons/fi";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

function DeveloperMode() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let currentIndex = 0;

    const handleKeyDown = (event: KeyboardEvent) => {
      const key =
        event.key.length === 1 ? event.key.toLowerCase() : event.key;

      if (key === KONAMI_CODE[currentIndex]) {
        currentIndex++;

        if (currentIndex === KONAMI_CODE.length) {
          setIsOpen(true);
          currentIndex = 0;
        }

        return;
      }

      currentIndex = key === KONAMI_CODE[0] ? 1 : 0;
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
      <div className="w-full max-w-lg overflow-hidden rounded-xl border border-white/10 bg-[#0F172A] shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex items-center gap-2 font-mono text-xs text-white/60">
            <FiTerminal size={14} />
            <span>developer-mode</span>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="text-white/40 transition-colors hover:text-white"
            aria-label="Cerrar"
          >
            <FiX size={18} />
          </button>
        </div>

        {/* Terminal */}
        <div className="p-6 font-mono text-sm">
          <div className="space-y-2">
            <p className="text-white/40">
              gino@portfolio:~$
            </p>

            <p className="text-blue-400">
              &gt; modo desarrollador
            </p>

            <p className="text-white/70">
              &gt; activando...
            </p>

            <p className="text-emerald-400">
              &gt; acceso concedido ✓
            </p>

            <div className="my-5 h-px bg-white/10" />

            <p className="text-white">
              Bien jugado, desarrollador.
            </p>

            <p className="mt-2 text-white/40">
              Encontraste algo que estaba oculto entre el código.
            </p>

            <p className="mt-4 animate-pulse text-blue-400">
              &gt; continúa explorando_
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 px-6 py-3">
          <p className="font-mono text-[10px] uppercase tracking-widest text-white/30">
            Presiona ESC para cerrar
          </p>
        </div>
      </div>
    </div>
  );
}

export default DeveloperMode;