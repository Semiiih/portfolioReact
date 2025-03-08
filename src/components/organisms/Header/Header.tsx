import { Navbar } from "flowbite-react";
import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import avatarLego3 from "@/assets/avatarLego3.png";

const allTabs = [
  {
    id: "homepage",
    name: "Accueil",
    path: "/homepage",
  },
  {
    id: "entreprise",
    name: "Entreprise",
    path: "/entreprise",
  },
  {
    id: "projets",
    name: "Projets",
    path: "/Projets",
  },
  {
    id: "veille",
    name: "Veille",
    path: "/veille",
  },
  {
    id: "bilan",
    name: "Bilan",
    path: "/Bilan",
  },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  // États et refs pour la SlidingTabBar - Corriger les types
  const tabsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const [activeTabIndex, setActiveTabIndex] = useState<number | null>(null);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  // Mettre à jour le lien actif lorsque l'emplacement change
  useEffect(() => {
    setActiveLink(location.pathname);
    // Mettre à jour l'index de l'onglet actif en fonction du chemin actuel
    const index = allTabs.findIndex((tab) => tab.path === location.pathname);
    if (index !== -1) {
      setActiveTabIndex(index);
    }
  }, [location]);

  // Effet pour la position de la barre de défilement
  useEffect(() => {
    if (activeTabIndex === null) {
      return;
    }
    const setTabPosition = () => {
      const currentTab = tabsRef.current[activeTabIndex];
      if (currentTab) {
        setTabUnderlineLeft(currentTab.offsetLeft ?? 0);
        setTabUnderlineWidth(currentTab.clientWidth ?? 0);
      }
    };
    setTabPosition();
  }, [activeTabIndex]);

  // Effet pour la détection du défilement
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fonction pour toggle le menu mobile
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Navbar
      fluid
      rounded
      className={`sticky top-0 z-50 bg-violet-500 py-8 ${
        isScrolled
          ? "bg-violet-500 bg-opacity-40 backdrop-blur-lg"
          : "bg-opacity-5"
      }`}
      style={{
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      <Navbar.Brand
        as={Link}
        href="https://flowbite-react.com"
        className="h-21 animate-duration-[1500ms] animate-ease-in-out hover:animate-rotate-x"
      >
        <Link to="/homepage" className="flex">
          <img src={avatarLego3} className="mr-3 h-6 sm:h-9" alt="avatar" />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
            Portfolio
          </span>
        </Link>
      </Navbar.Brand>

      {/* Burger menu button for mobile */}
      <div className="flex md:order-2">
        <button
          onClick={toggleMobileMenu}
          className="ml-3 rounded-lg p-2 text-white transition-transform duration-300 ease-in-out md:hidden"
          aria-controls="mobile-menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="sr-only">Ouvrir le menu</span>
          <svg
            className={`h-6 w-6 transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? "rotate-90" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
                className="transform transition-transform duration-300 ease-in-out"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
                className="transform transition-transform duration-300 ease-in-out"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop Navigation - Hidden on mobile */}
      <div className="hidden w-full md:block md:w-auto">
        <div className="flex w-full justify-center py-2">
          <div className="relative mx-auto flex h-12 rounded-3xl bg-violet-800 bg-opacity-25 px-2 backdrop-blur-sm">
            <span
              className="absolute bottom-0 top-0 -z-10 flex overflow-hidden rounded-3xl py-2 transition-all duration-300"
              style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
            >
              <span className="h-full w-full rounded-3xl bg-gray-200/30" />
            </span>
            {allTabs.map((tab, index) => {
              const isActive = activeTabIndex === index;
              return (
                <Link
                  key={index}
                  to={tab.path}
                  ref={(el) => (tabsRef.current[index] = el)}
                  className={`${
                    isActive ? "" : "hover:text-neutral-300"
                  } my-auto cursor-pointer select-none rounded-full px-4 text-center font-poppins text-lg font-medium text-white`}
                  onClick={() => setActiveTabIndex(index)}
                >
                  {tab.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Menu - Only visible when toggled */}
      <div
        className={`absolute left-0 right-0 top-full w-full transform bg-violet-600 bg-opacity-95 backdrop-blur-sm transition-all duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen
            ? "max-h-64 opacity-100"
            : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <div className="space-y-1 px-4 pb-4 pt-2 sm:px-3">
          {allTabs.map((tab, index) => {
            const isActive = activeTabIndex === index;
            return (
              <Link
                key={index}
                to={tab.path}
                className={`${
                  isActive
                    ? "bg-violet-800 text-white"
                    : "text-white hover:bg-violet-700"
                } block transform rounded-md px-3 py-2 text-base font-medium transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen
                    ? `translate-x-0 opacity-100 transition-delay-${Math.min(index * 100, 500)}ms`
                    : "-translate-x-4 opacity-0"
                }`}
                onClick={() => {
                  setActiveTabIndex(index);
                  setIsMobileMenuOpen(false);
                }}
              >
                {tab.name}
              </Link>
            );
          })}
        </div>
      </div>
    </Navbar>
  );
};
