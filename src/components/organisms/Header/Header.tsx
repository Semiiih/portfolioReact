import { Navbar } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import avatarLego3 from "@/assets/avatarLego3.png";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

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
        <img src={avatarLego3} className=" mr-3 h-6 sm:h-9" alt="avatar" />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
          Portfolio
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 ">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className=" z-10">
        <Navbar.Link
          to="/homepage"
          as={Link}
          className={`dark:hover:text-primary-500" text-[20px] text-white animate-duration-[1500ms] animate-ease-in-out `}
        >
          <span
            className={`${activeLink === "/homepage" ? "border-b-2 border-violet-300 hover:text-violet-500" : "hover:text-violet-500 "} `}
          >
            Accueil
          </span>
        </Navbar.Link>
        <Navbar.Link
          to="/entreprise"
          as={Link}
          className={`text-[20px] text-white`}
        >
          <span
            className={`${activeLink === "/entreprise" ? "border-b-2 border-violet-300 hover:text-violet-500" : "hover:text-violet-500"} `}
          >
            Entreprise
          </span>
        </Navbar.Link>
        <Navbar.Link
          to="/Projets"
          as={Link}
          className={`text-[20px] text-white animate-duration-[1500ms] animate-ease-in-out `}
        >
          <span
            className={`${activeLink === "/Projets" ? "border-b-2 border-violet-300 hover:text-violet-500" : "hover:text-violet-500"} `}
          >
            Projets
          </span>
        </Navbar.Link>
        <Navbar.Link
          to="/veille"
          as={Link}
          className={`text-[20px] text-white animate-duration-[1500ms] animate-ease-in-out  `}
          style={{
            textDecorationColor: "currentColor",
          }}
        >
          <span
            className={`${activeLink === "/veille" ? "border-b-2 border-violet-300 hover:text-violet-500" : "hover:text-violet-500"} `}
          >
            Veille
          </span>
        </Navbar.Link>
        <Navbar.Link
          to="/Bilan"
          as={Link}
          className={`text-[20px] text-white animate-duration-[1500ms] animate-ease-in-out `}
        >
          <span
            className={`${activeLink === "/Bilan" ? "border-b-2 border-violet-300 hover:text-violet-500" : "hover:text-violet-500"} `}
          >
            Bilan
          </span>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
