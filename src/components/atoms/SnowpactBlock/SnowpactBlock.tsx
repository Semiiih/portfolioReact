import mainLogo from "@/assets/main-logo.png";
import localisation2 from "@/assets/localisation2.png";
import MacSnow from "@/assets/MacSnow.png";

export const SnowpactBlock = () => {
  return (
    <div className="animate-fade-down rounded-xl border-2 border-violet-300/30 bg-gradient-to-br from-violet-500/20 to-indigo-600/30 shadow-lg backdrop-blur-sm animate-duration-[2500ms] animate-fill-backwards animate-once animate-ease-in-out lg:p-6 lg:p-8">
      <div className="flex flex-col gap-8 md:flex-row">
        {/* Left Column - Logo and Location */}
        <div className="flex flex-col items-center space-y-6 md:w-2/5">
          <div className="text-center">
            <h2 className="mb-2 pt-10 text-2xl font-bold text-white md:text-3xl lg:pt-0 lg:text-4xl">
              Snowpact
            </h2>
            <div className="relative mx-auto w-32 transition-all duration-300 hover:scale-105 lg:w-40">
              <img
                src={mainLogo}
                alt="Logo Snowpact"
                className="drop-shadow-lg"
              />
              <div className="absolute -inset-1 -z-10 rounded-full bg-violet-500/20 blur-md"></div>
            </div>
          </div>

          <div className="hover:scale-102 group w-full max-w-sm transition-all duration-300 md:mt-auto">
            <div className="overflow-hidden rounded-lg border-2 border-gray-300/30 shadow-md transition-all duration-300 group-hover:shadow-lg">
              <img
                src={localisation2}
                alt="Localisation Snowpact"
                className="w-full transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-2 text-center text-sm text-gray-200 opacity-80">
              Notre emplacement
            </div>
          </div>
        </div>

        {/* Right Column - MacSnow Image */}
        <div className="flex flex-1 items-center justify-center">
          <div className="relative max-w-full overflow-hidden rounded-xl transition-all duration-300 hover:shadow-2xl">
            <a
              href="https://snowpact.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              aria-label="Visiter le site de Snowpact"
            >
              <div className="overflow-hidden rounded-xl border-2 border-gray-300/30 shadow-lg">
                <img
                  src={MacSnow}
                  alt="Site web Snowpact affiché sur un MacBook"
                  className="w-full transform object-cover transition-all duration-500 hover:scale-105"
                />
              </div>
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <div className="mx-auto inline-block rounded-full bg-indigo-600/80 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-indigo-500">
                  Visiter le site
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
