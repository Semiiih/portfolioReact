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
}

export function ProjetRole({ features }: ProjetRoleProps) {
  return (
    <div className="bg-slate-800 py-24 sm:py-32 ">
      <div className="mx-auto max-w-7xl rounded-xl bg-white p-20 px-6 lg:px-8 ">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 ">
          <div className="lg:pr-8 lg:pt-4 ">
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
                    <dd className="inline"> {feature.description1}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
          <img
            alt="Product screenshot"
            src="https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl bg-slate-200 p-10 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 "
          />
        </div>
      </div>
    </div>
  );
}
