import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../locales";

function Experience() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="experiencia"
      className="relative overflow-hidden px-5 py-8 sm:px-8 sm:py-10 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="flex items-center gap-3 py-8 sm:gap-5 sm:py-10">
          <span className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.15em] text-blue-600 sm:text-xs sm:tracking-[0.2em] lg:text-sm">
            {t.experience.sectionNumber} {t.experience.sectionLabel}
          </span>

          <span className="h-px flex-1 bg-gray-200" />

          <span className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400 sm:text-xs sm:tracking-[0.2em] lg:text-sm">
            {t.experience.sectionLabel}
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
                {t.experience.period}
              </span>

              {/* Company */}
              <h2 className="mt-6 font-syne text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {t.experience.company}
              </h2>

              {/* Position */}
              <p className="mt-1 text-xs font-semibold text-blue-600 sm:text-sm">
                {t.experience.position}
              </p>

              {/* Description */}
              <p className="mt-6 max-w-sm text-sm leading-6 text-gray-500">
                {t.experience.description}
              </p>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-3 gap-2 sm:max-w-sm sm:gap-3">
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-3 text-center">
                  <span className="block font-syne text-lg font-bold text-blue-600">
                    10
                  </span>

                  <span className="mt-1 block text-[8px] font-semibold uppercase tracking-wide text-gray-400 sm:text-[9px]">
                    {t.experience.stats.endpoints}
                    <br />
                    {t.experience.stats.rest}
                  </span>
                </div>

                <div className="rounded-lg border border-gray-200 bg-gray-50 p-3 text-center">
                  <span className="block font-syne text-lg font-bold text-gray-900">
                    11
                  </span>

                  <span className="mt-1 block text-[8px] font-semibold uppercase tracking-wide text-gray-400 sm:text-[9px]">
                    {t.experience.stats.modules}
                    <br />
                    {t.experience.stats.react}
                  </span>
                </div>

                <div className="rounded-lg border border-gray-200 bg-gray-50 p-3 text-center">
                  <span className="block font-syne text-lg font-bold text-green-500">
                    2
                  </span>

                  <span className="mt-1 block text-[8px] font-semibold uppercase tracking-wide text-gray-400 sm:text-[9px]">
                    {t.experience.stats.devs}
                    <br />
                    {t.experience.stats.team}
                  </span>
                </div>
              </div>
            </div>

            {/* Responsibilities */}
            <div>
              <h3 className="font-syne text-xs font-bold uppercase tracking-[0.08em] text-gray-900 sm:text-sm">
                {t.experience.responsibilitiesTitle}
              </h3>

              <div className="mt-7 space-y-6">
                {t.experience.responsibilities.map((item) => (
                  <div key={item.number} className="flex gap-4">
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
                  {t.experience.input}
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