import React, { useState } from "react";
import FancyText from "@carefully-coded/react-text-gradient";

interface Feature {
  name?: string;
  icon?: string;
  subtitle?: string;
  title?: string;
  description1?: string;
  description2?: string;
  codeSnippet?: string;
  codeSnippet2?: string;
}

interface ProjetRoleProps {
  features: Feature[];
  image?: string;
}

export function ProjetRoleCenter({ features, image }: ProjetRoleProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="bg-slate-800 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl rounded-xl bg-white p-20 px-6 shadow-2xl shadow-violet-500 lg:px-8">
        <div className="mx-auto max-w-2xl text-center lg:max-w-none">
          {features.map((feature) => (
            <div className="mb-12" key={feature.name}>
              <h2 className="text-xl font-semibold leading-7 text-indigo-600">
                {feature.title}
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {feature.subtitle}
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {feature.description2}
              </p>
              {image && (
                <img
                  alt="Product screenshot"
                  src={image}
                  onClick={openModal}
                  width={2432}
                  height={1442}
                  className="mx-auto w-full max-w-4xl cursor-pointer rounded-xl bg-slate-200 p-10 shadow-xl shadow-violet-400 ring-1 ring-gray-400/10"
                />
              )}
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    {feature.name}
                  </dt>
                  <dd
                    className="inline "
                    dangerouslySetInnerHTML={{
                      __html: feature.description1 || "",
                    }}
                  />
                </div>
              </dl>
              {feature.codeSnippet && (
                <pre className="mt-6 overflow-x-auto rounded-md bg-gray-700 p-4 text-left font-mono text-sm shadow-xl shadow-green-300">
                  <code className="language-javascript">
                    {feature.codeSnippet.split("\n").map((line, index) => {
                      const trimmedLine = line.trimStart();
                      return (
                        <div key={index} className="whitespace-pre">
                          {trimmedLine.startsWith("//") ? (
                            <span className="text-gray-200">
                              <FancyText
                                gradient={{
                                  from: "#FFFF",
                                  to: "#A88BFA",
                                  type: "linear",
                                }}
                                animateTo={{ from: "#A88BFA", to: "#FFFF" }}
                                animateDuration={2000}
                              >
                                {line}
                              </FancyText>
                            </span>
                          ) : (
                            <span className="text-green-400">{line}</span>
                          )}
                        </div>
                      );
                    })}
                  </code>
                </pre>
              )}
              {feature.codeSnippet2 && (
                <pre className="mt-6 overflow-x-auto rounded-md bg-gray-700 p-4 text-left font-mono text-sm shadow-xl shadow-red-300">
                  <code className="language-javascript">
                    {feature.codeSnippet2.split("\n").map((line, index) => {
                      const trimmedLine = line.trimStart();
                      return (
                        <div key={index} className="whitespace-pre">
                          {trimmedLine.startsWith("//") ? (
                            <span className="text-gray-200">
                              <FancyText
                                gradient={{
                                  from: "#FFFF",
                                  to: "#A88BFA",
                                  type: "linear",
                                }}
                                animateTo={{ from: "#A88BFA", to: "#FFFF" }}
                                animateDuration={2000}
                              >
                                {line}
                              </FancyText>
                            </span>
                          ) : trimmedLine.includes(
                              '"schedule": "cron(0 3 * * *)"',
                            ) ? (
                            <span className="text-white">{line}</span>
                          ) : (
                            <span className="text-red-400">{line}</span>
                          )}
                        </div>
                      );
                    })}
                  </code>
                </pre>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={handleBackgroundClick}
        >
          <div className="relative">
            <button
              className="absolute right-4 top-4 text-3xl font-bold text-white"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={image}
              alt="Full screen"
              className="max-h-[80vh] max-w-7xl rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
