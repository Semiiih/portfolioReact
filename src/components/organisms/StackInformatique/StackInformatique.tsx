import FancyText from "@carefully-coded/react-text-gradient";

export default function StackInformatique() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base/7 font-semibold text-indigo-400">
          patrimoine informatique
        </h2>
        <p className="mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          <FancyText
            gradient={{ from: "#FFFF", to: "#8a8a8a", type: "linear" }}
            animateTo={{ from: "#8a8a8a", to: "#FFFF" }}
            animateDuration={1000}
          >
            Stack Informatique
          </FancyText>
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <div className="flex p-px lg:col-span-4">
            <div className="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]">
              <img
                alt=""
                src="https://tailwindui.com/plus/img/component-images/bento-02-releases.png"
                className="h-80 object-cover object-left"
              />
              <div className="flex gap-10 p-10">
                <span>
                  <h3 className="mt-2 text-lg/7 font-medium tracking-tight text-white">
                    Gestionnaire de dependances
                  </h3>

                  <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                    pnpm, npm, yarn
                  </p>
                </span>
                <span>
                  <h3 className="mt-2 text-lg/7 font-medium tracking-tight text-white">
                    Analytics
                  </h3>

                  <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                    Firebase Matomo Google Analytics <br /> Google Search
                    Console
                  </p>
                </span>
                <span>
                  <h3 className="mt-2 text-lg/7 font-medium tracking-tight text-white">
                    CI/CD
                  </h3>

                  <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                    Github
                  </p>
                </span>
              </div>
            </div>
          </div>
          <div className="flex p-px lg:col-span-2">
            <div className="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 lg:rounded-tr-[2rem]">
              <img
                alt=""
                src="https://tailwindui.com/plus/img/component-images/bento-02-integrations.png"
                className="h-80 object-cover object-center"
              />
              <div className="p-10">
                <span>
                  <h3 className="mt-2 text-lg/7 font-medium tracking-tight text-white">
                    Communications avec l'équipe
                  </h3>

                  <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                    Slack, Gmail, Google Teams
                  </p>
                </span>
              </div>
            </div>
          </div>
          <div className="flex p-px lg:col-span-2">
            <div className="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 lg:rounded-bl-[2rem]">
              <img
                alt=""
                src="https://tailwindui.com/plus/img/component-images/bento-01-integrations.png"
                className="h-80 object-cover object-center"
              />
              <div className="p-10">
                <h3 className="mt-2 text-lg/7 font-medium tracking-tight text-white">
                  Frameworks
                </h3>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                  Next js, Node js, React, React Native, Express, Gatsby, Honojs
                </p>
                <h3 className="mt-2 text-lg/7 font-medium tracking-tight text-white">
                  Langages
                </h3>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                  Typescript, Javascript, SQL, HTML, CSS
                </p>
              </div>
            </div>
          </div>
          <div className="flex p-px lg:col-span-4">
            <div className="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]">
              <img
                alt=""
                src="https://tailwindui.com/plus/img/component-images/bento-02-performance.png"
                className="h-80 object-cover object-left"
              />
              <div className="flex flex-row gap-10 p-10">
                <span>
                  <h3 className="mt-2 text-lg/7 font-medium tracking-tight text-white">
                    Base de donnée
                  </h3>

                  <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                    PostgreSQL, Mysql
                  </p>
                </span>
                <span>
                  <h3 className="mt-2 text-lg/7 font-medium tracking-tight text-white">
                    Infrastructure
                  </h3>

                  <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                    Docker, Google Cloud, OVH
                  </p>
                </span>
                <span>
                  <h3 className="mt-2 text-lg/7 font-medium tracking-tight text-white">
                    Outil de développeur
                  </h3>

                  <p className="mt-2 max-w-lg text-sm/6 text-gray-400">
                    Docker, Mailhog, Make, Storybook, Firebase, PhpMyAdmin,
                    Mocky Vitejs, PosgreAdmin, Adminer
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
