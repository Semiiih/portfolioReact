import React, { useState } from "react";

type VeilleCardProps = {
  href?: string;
  title: string;
  description: string;
  image?: string;
  rating: number;
  className?: string;
  date: string;
  source: string;
};

export const VeilleCard = ({
  href,
  image,
  title,
  description,
  rating,
  className,
  date,
  source,
}: VeilleCardProps) => {
  const [expanded, setExpanded] = useState(false);

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={index < rating ? "text-yellow-400" : "text-gray-400"}
      >
        ★
      </span>
    ));
  };

  const handleCardClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setExpanded(!expanded);
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`relative overflow-hidden rounded-lg shadow-lg transition-all duration-500 ${
        expanded ? "z-10 scale-105" : "hover:shadow-xl"
      } ${className}`}
      onClick={handleCardClick}
    >
      <div className="relative h-full bg-white dark:bg-gray-800">
        <div
          className={`relative overflow-hidden transition-all duration-500 ease-in-out ${
            expanded ? "h-64" : "h-48"
          }`}
        >
          {image && (
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-all duration-700 ease-out hover:scale-110"
            />
          )}
          <div className="absolute left-0 top-0 p-2">
            <span className="inline-block rounded-full bg-violet-500 px-3 py-1 text-xs font-semibold text-white shadow-md  hover:shadow-xl hover:shadow-violet-300">
              {source}
            </span>
          </div>
          <div className="absolute right-0 top-0 p-2">
            <div className="flex rounded-full bg-black bg-opacity-60 px-2 py-1 hover:shadow-xl hover:shadow-yellow-300">
              {renderStars(rating)}
            </div>
          </div>
        </div>

        <div className="p-5 transition-all duration-500">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>

          <div
            className={`relative overflow-hidden transition-all duration-500 ease-in-out ${
              expanded ? "max-h-96 opacity-100" : "max-h-16 opacity-90"
            }`}
          >
            <p className="text-gray-700 dark:text-gray-300">{description}</p>

            {!expanded && (
              <div className="absolute bottom-0 left-0 h-8 w-full bg-gradient-to-t from-white to-transparent dark:from-gray-800" />
            )}
          </div>

          <div className="mt-4 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <span>{new Date(date).toLocaleDateString()}</span>

            {expanded ? (
              <button className="font-medium text-blue-500 hover:underline">
                Réduire
              </button>
            ) : (
              <button className="font-medium text-blue-500 hover:underline">
                En savoir plus
              </button>
            )}
          </div>
        </div>
      </div>

      {expanded && href && (
        <div className="absolute bottom-4 right-4">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex transform items-center rounded-full bg-blue-600 px-4 py-2 font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-blue-700"
            onClick={handleLinkClick}
          >
            Voir l'article complet
          </a>
        </div>
      )}
    </div>
  );
};
