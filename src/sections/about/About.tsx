import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../locales";

function About() {

  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="sobre-mi"
      className="relative overflow-hidden bg-white px-5 py-8 sm:px-8 sm:py-10 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="flex items-center gap-3 py-8 sm:gap-5 sm:py-10">
          <span className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.15em] text-blue-600 sm:text-xs sm:tracking-[0.2em] lg:text-sm">
            {t.about.sectionNumber} {t.about.sectionLabel}
          </span>

          <span className="h-px flex-1 bg-gray-200" />

          <span className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400 sm:text-xs sm:tracking-[0.2em] lg:text-sm">
            {t.about.sectionLabel}
          </span>
        </div>

        {/* Main content */}
        <div className="grid gap-12 sm:gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          {/* Left column */}
          <div>
            <h2 className="max-w-xl font-syne text-3xl font-extrabold leading-[1.05] tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              {t.about.title}
            </h2>

            {/* Development philosophy */}
            <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:mt-10 sm:p-7">
              <span className="font-syne text-[11px] font-bold uppercase tracking-[0.15em] text-blue-600 sm:text-xs">
                {t.about.philosophy.label}
              </span>

              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                {t.about.philosophy.description}
              </p>
              <div className="mt-5 border-t border-gray-200 pt-4">
                <span className="font-mono text-[10px] tracking-widest text-gray-300">
                  {t.about.philosophy.input}
                </span>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div>
            <p className="text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              {t.about.introduction.paragraph1}
              <span className="font-semibold text-blue-600 underline underline-offset-4">
                {t.about.introduction.fullStack}
              </span>
              {t.about.introduction.paragraph1End}
              <strong className="font-semibold text-gray-900">
                {t.about.introduction.technologies}
              </strong>
              {t.about.introduction.paragraph1End2}
              <code className="rounded bg-blue-50 px-1.5 py-0.5 font-mono text-[0.9em] font-semibold text-blue-600">
                {t.about.introduction.apis}
              </code>
              {t.about.introduction.paragraph1End3}
            </p>

            <p className="mt-5 text-sm leading-7 text-gray-600 sm:mt-6 sm:text-base">
              {t.about.introduction.paragraph2Start}
              <strong className="font-semibold text-gray-900">
                {t.about.introduction.maintainableSoftware}
              </strong>
              {t.about.introduction.paragraph2Middle}
              <strong className="font-semibold text-gray-900 underline decoration-green-600 underline-offset-4">
                {t.about.introduction.tangibleValue}
              </strong>
              {t.about.introduction.paragraph2End}
            </p>

            {/* Technical approach */}
            <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-3">
              {/* Card 01 */}
              <div className="group rounded-2xl border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-600/30 hover:shadow-lg hover:shadow-gray-200/50">
                <span className="text-xs font-semibold tracking-[0.15em] text-blue-600">
                  {t.about.cards.cleanArchitecture.number}
                </span>

                <h3 className="mt-5 font-syne text-sm font-bold uppercase tracking-wide text-gray-900">
                  {t.about.cards.cleanArchitecture.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {t.about.cards.cleanArchitecture.description}
                </p>
              </div>

              {/* Card 02 */}
              <div className="group rounded-2xl border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-600/30 hover:shadow-lg hover:shadow-gray-200/50">
                <span className="text-xs font-semibold tracking-[0.15em] text-green-400">
                  {t.about.cards.restApis.number}
                </span>

                <h3 className="mt-5 font-syne text-sm font-bold uppercase tracking-wide text-gray-900">
                  {t.about.cards.restApis.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {t.about.cards.restApis.description}
                </p>
              </div>

              {/* Card 03 */}
              <div className="group rounded-2xl border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-600/30 hover:shadow-lg hover:shadow-gray-200/50">
                <span className="text-xs font-semibold tracking-[0.15em] text-gray-400">
                  {t.about.cards.modernUi.number}
                </span>

                <h3 className="mt-5 font-syne text-sm font-bold uppercase tracking-wide text-gray-900">
                  {t.about.cards.modernUi.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {t.about.cards.modernUi.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
