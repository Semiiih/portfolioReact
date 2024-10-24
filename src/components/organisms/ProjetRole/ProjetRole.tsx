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
    <div className="bg-slate-800 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl rounded-xl bg-white p-20 px-6 shadow-2xl shadow-violet-500 lg:px-8">
        <div
          className={`mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 ${
            imagePosition === "left" ? "lg:grid-flow-col" : ""
          }`}
        >
          {imagePosition === "left" && (
            <img
              alt="Product screenshot"
              src={image}
              onClick={openModal}
              width={2432}
              height={1442}
              className="w-[48rem] max-w-none cursor-pointer rounded-xl bg-slate-200 p-10 shadow-xl shadow-violet-400 ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-80"
            />
          )}
          <div className="lg:pr-8 lg:pt-4">
            {features.map((feature) => (
              <div className="lg:max-w-lg" key={feature.name}>
                <h2 className="text-xl font-semibold leading-7 text-indigo-600">
                  {feature.title}
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {feature.subtitle}
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  {feature.description2}
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  <div className="relative pl-9">
                    <img
                      src={feature.icon}
                      alt=""
                      aria-hidden="true"
                      className="absolute left-1 top-1 h-5 w-5"
                    />
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
            <img
              alt="Product screenshot"
              src={image}
              onClick={openModal} // Open modal when image is clicked
              width={2432}
              height={1442}
              className="w-[48rem] max-w-none cursor-pointer rounded-xl bg-slate-200 p-10 shadow-xl shadow-violet-400 ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            />
          )}
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
