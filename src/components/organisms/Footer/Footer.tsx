export const Footerr = () => {
  return (
    <footer className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto text-center">
        <p>© 2024 Mon Entreprise</p>
      </div>
    </footer>
  );
};

import avataaars from "@/assets/avataaars.png";

const navigation = {
  main: [
    { name: "Accueil", href: "/homepage" },
    { name: "Entreprise", href: "/entreprise" },
    { name: "Projets", href: "/projets" },
    { name: "Veille", href: "/veille" },
    { name: "Bilan", href: "/bilan" },
  ],
  social: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/semih-cakici-66b852291/",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zM8.339 19H5.339V9h3v10zm-1.5-11.5c-.967 0-1.75-.783-1.75-1.75S5.872 4 6.839 4s1.75.783 1.75 1.75-.783 1.75-1.75 1.75zM20 19h-3v-5.6c0-1.296-.026-2.962-1.805-2.962-1.806 0-2.083 1.409-2.083 2.864V19h-3V9h2.885v1.364h.041c.401-.763 1.378-1.564 2.837-1.564 3.033 0 3.595 1.997 3.595 4.594V19z" />
        </svg>
      ),
    },
    {
      name: "Mail",
      href: "mailto:semih.cakici34@gmail.com",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M3 4h18a2 2 0 012 2v12a2 2 0 01-2 2H3a2 2 0 01-2-2V6a2 2 0 012-2zm18 2H3v.01L12 12l9-5.99V6zM3 18V8.76l8.56 5.64a1 1 0 001.28 0L21 8.76V18H3z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/Semiiih",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-gray-900 ">
      <div className="border-1 border border-slate-500 " />
      <div className="container mx-auto max-w-7xl px-6 py-10 text-white lg:flex lg:items-center lg:justify-between">
        <div className="flex justify-center lg:justify-start">
          <img
            src={avataaars}
            alt="Company Logo"
            className="h-20 w-20 rounded-full object-cover md:h-28 md:w-28"
          />
        </div>

        <nav
          aria-label="Footer Navigation"
          className="mt-8 text-center lg:mt-0 lg:text-left"
        >
          <ul className="flex flex-wrap justify-center gap-6 lg:gap-10">
            {navigation.main.map((item) => (
              <li key={item.name}>
                <a href={item.href} className="text-gray-400 hover:text-white">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex justify-center gap-6 pt-14 ">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-300"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon aria-hidden="true" className="h-6 w-6" />
              </a>
            ))}
          </div>
        </nav>

        <div className="mt-8 lg:mt-0 lg:flex lg:flex-col lg:items-end ">
          <a
            href="#"
            className="mt-4 flex justify-center text-sm text-gray-400 hover:text-white lg:mt-0"
          >
            Mentions légales
          </a>
        </div>
      </div>

      <p className="mt-8 text-center text-sm text-gray-400">
        &copy; 2024 Portfolio Semih | BTS SIO
      </p>
    </footer>
  );
};
