import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Navbar fluid rounded className=" bg-violet-500 bg-opacity-5">
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <img src="/avataaars3.png" className="mr-3 h-6 sm:h-9" alt="avatar" />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
          Portfolio
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="/avataaars.png"
              className="size-20"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className=" z-10">
        <Navbar.Link href="#" className="text-[20px] text-white">
          Accueil
        </Navbar.Link>
        <Navbar.Link as={Link} href="#" className="text-[20px] text-white">
          Entreprise
        </Navbar.Link>
        <Navbar.Link href="#" className="text-[20px] text-white">
          Projets
        </Navbar.Link>
        <Navbar.Link href="#" className="text-[20px] text-white">
          Veille
        </Navbar.Link>
        <Navbar.Link href="#" className="text-[20px] text-white">
          Bilan
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
