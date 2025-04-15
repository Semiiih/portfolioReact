import React, { useState } from "react";

interface MesMissions2imagesProps {
  description: string;
  imageAvant?: string;
  imageApres?: string;
  showLabels?: boolean;
}

export const MesMissions2images: React.FC<MesMissions2imagesProps> = ({
  description,
  imageAvant,
  imageApres,
  showLabels = true,
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center justify-center gap-8 md:px-10">
      <div className="mt-8 max-w-4xl rounded-xl bg-slate-800/30 p-6 text-white">
        <h3 className="mb-4 text-center text-xl font-semibold">
          Évolution du projet
        </h3>
        <div
          className="text-start text-gray-300"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      </div>

      <div className="flex flex-col gap-8 pb-20 md:flex-row md:gap-12">
        {imageAvant && (
          <div className="relative flex flex-1 flex-col items-center">
            <img
              src={imageAvant}
              alt="Version initiale"
              className="h-auto max-w-full cursor-pointer rounded-lg shadow-lg transition-transform hover:scale-105"
              onClick={() => setSelectedImage(imageAvant)}
            />
            {showLabels && (
              <span className="mt-10 rounded-md bg-violet-500 px-4 py-1 text-white">
                Avant
              </span>
            )}
          </div>
        )}
        {imageApres && (
          <div className="relative flex flex-1 flex-col items-center">
            <img
              src={imageApres}
              alt="Version finale"
              className="h-auto max-w-full cursor-pointer rounded-lg shadow-lg transition-transform hover:scale-105"
              onClick={() => setSelectedImage(imageApres)}
            />
            {showLabels && (
              <span className="mt-10 rounded-md bg-violet-700 px-4 py-1 text-white">
                Après
              </span>
            )}
          </div>
        )}
      </div>

      {/* Modal pour afficher l'image agrandie */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-h-[90vh] max-w-[90vw]">
            <img
              src={selectedImage}
              alt="Image agrandie"
              className="max-h-[85vh] max-w-[85vw] rounded-lg object-contain"
            />
            <button
              className="absolute -right-4 -top-4 rounded-full bg-violet-600 p-2 text-white transition-colors hover:bg-violet-800"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
