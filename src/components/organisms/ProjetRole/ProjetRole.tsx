import React, { useState } from "react";

interface Feature {
  name?: string;
  icon?: string;
  subtitle?: string;
  title?: string;
  description1?: string;
  description2?: string;
}

interface ProjetRoleProps {
  features: Feature[];
  imagePosition?: "left" | "right";
  image?: string;
}

export function ProjetRole({
  features,
  imagePosition = "right",
  image,
}: ProjetRoleProps) {
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
    <div className="bg-slate-800 py-16 sm:py-32 md:py-24">
      <div className="mx-auto max-w-7xl rounded-xl bg-white p-6 px-4 shadow-2xl shadow-violet-500 md:p-12 md:px-6 lg:p-20 lg:px-8">
        <div
          className={`mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:gap-y-20 md:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 ${
            imagePosition === "left" ? "lg:grid-flow-col" : ""
          }`}
        >
          {imagePosition === "left" && (
            <div className="w-full">
              <img
                alt="Product screenshot"
                src={image}
                onClick={openModal}
                width={2432}
                height={1442}
                className="w-full max-w-none cursor-pointer rounded-xl bg-slate-200 p-4 shadow-xl shadow-violet-400 ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 md:w-[48rem] md:p-10 lg:-ml-80"
              />
            </div>
          )}
          <div className="lg:pr-8 lg:pt-4">
            {features.map((feature) => (
              <div className="lg:max-w-lg" key={feature.name}>
                <h2 className="text-xl font-semibold leading-7 text-indigo-600">
                  {feature.title}
                </h2>
                <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-3xl">
                  {feature.subtitle}
                </p>
                <p className="mt-4 text-base leading-7 text-gray-600 md:mt-6 md:text-lg md:leading-8">
                  {feature.description2}
                </p>
                <dl className="mt-6 max-w-xl space-y-6 text-base leading-7 text-gray-600 md:mt-10 md:space-y-8 lg:max-w-none">
                  <div className="relative pl-9">
                    {feature.icon && (
                      <img
                        src={feature.icon}
                        alt=""
                        aria-hidden="true"
                        className="absolute left-1 top-1 h-5 w-5"
                      />
                    )}
                    <dt className="inline font-semibold text-gray-900">
                      {feature.name}
                    </dt>
                    <dd className="inline">{feature.description1}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
          {imagePosition === "right" && (
            <div className="w-full ">
              <img
                alt="Product screenshot"
                src={image}
                onClick={openModal}
                width={2432}
                height={1442}
                className="w-full max-w-none cursor-pointer rounded-xl bg-slate-200 p-4 shadow-xl shadow-violet-400 ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 md:w-[48rem] md:p-10 lg:-ml-0"
              />
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
          onClick={handleBackgroundClick}
        >
          <div className="relative">
            <button
              className="absolute right-2 top-2 rounded-full bg-violet-600 p-2 text-white md:right-4 md:top-4 md:p-3"
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-6 md:w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <img
              src={image}
              alt="Full screen"
              className="max-h-[80vh] max-w-full rounded-lg md:max-w-7xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}
