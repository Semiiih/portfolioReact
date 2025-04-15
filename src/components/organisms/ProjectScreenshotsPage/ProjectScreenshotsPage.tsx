import { useState } from "react";
import FancyText from "@carefully-coded/react-text-gradient";

interface ProjectScreenshotsPageProps {
  project: any;
  title?: string;
}

export const ProjectScreenshotsPage = ({
  project,
  title = "Aperçu du site",
}: ProjectScreenshotsPageProps) => {
  const [activePage, setActivePage] = useState(0);

  if (!project.webScreenshots || project.webScreenshots.length === 0) {
    return null;
  }

  const screenshots = project.webScreenshots;

  // Déterminer si le fichier est un PDF
  const isPdf = screenshots[activePage].src?.toLowerCase().endsWith(".pdf");

  return (
    <div className="mx-auto my-10 w-full max-w-4xl">
      <h2 className="mb-4 text-center text-2xl font-bold">
        <FancyText
          gradient={{ from: "#FFFF", to: "#808080", type: "linear" }}
          animateTo={{ from: "#8a8a8a", to: "#FFFF" }}
          animateDuration={1000}
        >
          {title}
        </FancyText>
      </h2>

      {/* Boutons des pages */}
      <div className="mb-4 flex flex-wrap justify-center gap-2">
        {screenshots.map((screenshot: any, index: any) => (
          <button
            key={index}
            onClick={() => setActivePage(index)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
              activePage === index
                ? "scale-105 transform bg-violet-600 text-white shadow-lg"
                : "bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white"
            }`}
          >
            {screenshot.label || `Page ${index + 1}`}
          </button>
        ))}
      </div>

      <div className="relative">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border-4 border-violet-500 bg-slate-200 shadow-xl shadow-violet-500/30">
          <div className="h-[600px] overflow-auto">
            {screenshots[activePage].src ? (
              isPdf ? (
                <object
                  data={screenshots[activePage].src}
                  type="application/pdf"
                  className="h-full w-full"
                >
                  <div className="flex h-full flex-col items-center justify-center bg-slate-200 p-10">
                    <p className="text-lg text-gray-600">
                      Votre navigateur ne peut pas afficher ce PDF.
                      <a
                        href={screenshots[activePage].src}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 text-violet-600 hover:underline"
                      >
                        Télécharger le PDF
                      </a>
                    </p>
                  </div>
                </object>
              ) : (
                <img
                  src={screenshots[activePage].src}
                  alt={`Capture d'écran ${screenshots[activePage].label} - ${project.title}`}
                  className="w-full object-contain"
                  style={{ minWidth: "100%", minHeight: "100%" }}
                />
              )
            ) : (
              <div className="flex h-full flex-col items-center justify-center bg-red-200 p-10">
                <div className="text-center text-lg font-semibold text-gray-600">
                  {project.title} - {screenshots[activePage].label}
                </div>
              </div>
            )}
          </div>

          {/* Barre navigateur */}
          <div className="absolute left-0 top-0 flex w-full items-center justify-between bg-slate-800 px-4 py-2">
            <div className="flex space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
            <div className="mx-4 flex-1">
              <div className="mx-auto w-full max-w-md truncate rounded-full bg-slate-700 px-4 py-1 text-center text-xs text-white">
                {isPdf ? (
                  <span className="flex items-center justify-center space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      {screenshots[activePage].label ||
                        `Document ${activePage + 1}`}
                      .pdf
                    </span>
                  </span>
                ) : (
                  `${project.title.toLowerCase().replace(/\s+/g, "")}.com${
                    screenshots[activePage].path
                      ? "/" + screenshots[activePage].path
                      : ""
                  }`
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex justify-center space-x-1">
        {screenshots.map((_: any, index: any) => (
          <button
            key={index}
            onClick={() => setActivePage(index)}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              activePage === index
                ? "bg-violet-600"
                : "bg-slate-600 hover:bg-slate-500"
            }`}
            aria-label={`Aller à la page ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
