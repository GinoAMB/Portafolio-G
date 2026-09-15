import { useState } from "react";
import { FaRegFilePdf } from "react-icons/fa";

import { education, certifications, softSkills } from "./education.data";
import CertificateModal from "./modals/CertificateModal";

function Education() {
  const [selectedCertificate, setSelectedCertificate] =
    useState<{
      title: string;
      pdf: string;
    } | null>(null);

  return (
    <section
      id="formacion"
      className="relative overflow-hidden bg-white px-5 py-8 sm:px-8 sm:py-10 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Two columns */}
        <div className="grid gap-12 sm:gap-14 lg:grid-cols-2 lg:gap-10">
          {/* Academic */}
          <div className="min-w-0">
            {/* Section heading */}
            <div className="flex items-center gap-3 py-8 sm:gap-5 sm:py-10">
              <span className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.15em] text-blue-600 sm:text-xs sm:tracking-[0.2em] lg:text-sm">
                05. Académico
              </span>

              <span className="h-px min-w-0 flex-1 bg-gray-200" />
            </div>

            {/* Academic content */}
            <div className="min-w-0">
              <h2 className="max-w-xl font-syne text-3xl font-extrabold leading-[1.05] tracking-tight text-gray-900 sm:text-4xl lg:text-3xl">
                Formación
              </h2>

              <div className="mt-8 space-y-8">
                {education.map((item) => (
                  <article
                    key={`${item.title}-${item.institution}`}
                    className="min-w-0 rounded-xl border border-gray-200 bg-gray-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-600/30 hover:shadow-lg hover:shadow-gray-200/50"
                  >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="min-w-0 break-words text-lg font-bold text-gray-900 sm:text-xl">
                        {item.title}
                      </h3>

                      <span className="w-fit shrink-0 rounded-lg border border-blue-600 bg-blue-50 px-3 py-1.5 text-xs font-semibold tracking-[0.12em] text-blue-600">
                        EGRESO: {item.period}
                      </span>
                    </div>

                    <p className="mt-1 break-words text-sm font-medium text-gray-500">
                      {item.institution}
                    </p>

                    {item.description && (
                      <p className="mt-4 break-words text-sm text-gray-600">
                        {item.description}
                      </p>
                    )}
                  </article>
                ))}
              </div>

              {/* Soft skills */}
              <div className="mt-10">
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-500 sm:text-sm">
                  HABILIDADES BLANDAS //
                </span>

                <div className="mt-4 flex flex-wrap gap-3">
                  {softSkills.map((skill) => (
                    <span
                      key={skill.name}
                      className="rounded-lg border border-gray-200 bg-gray-100 px-4 py-2 text-sm font-medium text-gray-600 transition duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="min-w-0">
            {/* Section heading */}
            <div className="flex items-center gap-3 py-8 sm:gap-5 sm:py-10">
              <span className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.15em] text-green-500 sm:text-xs sm:tracking-[0.2em] lg:text-sm">
                06. Acreditaciones
              </span>

              <span className="h-px min-w-0 flex-1 bg-gray-200" />
            </div>

            {/* Certifications content */}
            <div className="min-w-0">
              <h2 className="max-w-xl font-syne text-xl font-extrabold leading-[1.05] tracking-tight text-gray-900 sm:text-4xl lg:text-3xl">
                Certificaciones
              </h2>

              <div className="mt-8 space-y-2">
                {certifications.map((item) => (
                  <article
                    key={`${item.title}-${item.institution}`}
                    className="min-w-0 rounded-xl border border-gray-200 bg-gray-50 p-4 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg hover:shadow-gray-200/50"
                  >
                    <div className="flex min-w-0 items-start gap-4">
                      <div className="flex min-w-0 flex-1 flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                        {/* Información */}
                        <div className="min-w-0">
                          <h3 className="break-words text-lg font-bold text-gray-900 sm:text-xl">
                            {item.title}
                          </h3>

                          <p className="mt-2 break-words text-sm font-medium text-gray-500">
                            {item.institution}
                          </p>
                        </div>

                        {/* Año + botón */}
                        <div className="flex shrink-0 items-center gap-3">
                          <span className="text-xs font-semibold text-gray-500">
                            {item.year}
                          </span>

                          <button
                            type="button"
                            onClick={() =>
                              setSelectedCertificate({
                                title: item.title,
                                pdf: item.pdf,
                              })
                            }
                            className="flex items-center gap-2 cursor-pointer rounded-lg border border-blue-500 bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-600 transition duration-300 hover:bg-blue-500 hover:text-white"
                          >
                            <FaRegFilePdf className="text-sm" />

                            <span className="hidden sm:inline">
                              Ver certificado
                            </span>

                            <span className="sm:hidden">Ver PDF</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <CertificateModal
          title={selectedCertificate.title}
          pdf={selectedCertificate.pdf}
          onClose={() => setSelectedCertificate(null)}
        />
      )}
    </section>
  );
}

export default Education;
