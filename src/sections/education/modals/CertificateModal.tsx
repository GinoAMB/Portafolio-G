import { createPortal } from "react-dom";
import { FiX } from "react-icons/fi";

interface CertificateModalProps {
  title: string;
  pdf: string;
  onClose: () => void;
}

function CertificateModal({
  title,
  pdf,
  onClose,
}: CertificateModalProps) {
  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-2 backdrop-blur-sm sm:p-4"
      onClick={onClose}
    >
      <div
        className="relative flex h-[95vh] w-full max-w-5xl flex-col overflow-hidden rounded-lg bg-white shadow-2xl sm:h-[90vh] sm:rounded-xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Modal header */}
        <div className="flex shrink-0 items-center justify-between gap-3 border-b border-gray-200 bg-white px-3 py-3 sm:px-5 sm:py-4 md:px-6">
          <div className="min-w-0 flex-1">
            <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-green-500 sm:text-xs sm:tracking-[0.15em]">
              06. Acreditación
            </span>

            <h3 className="mt-1 break-words text-sm font-bold leading-tight text-gray-900 sm:truncate sm:text-base">
              {title}
            </h3>
          </div>

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition duration-300 hover:border-gray-300 hover:bg-gray-100 hover:text-gray-900 sm:h-9 sm:w-9"
            aria-label="Cerrar certificado"
          >
            <FiX className="text-base sm:text-lg" />
          </button>
        </div>

        {/* PDF viewer */}
        <div className="min-h-0 flex-1 bg-gray-100">
          <iframe
            src={pdf}
            title={title}
            className="h-full w-full border-0"
          />
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default CertificateModal;