import { Icon } from "@tremor/react";
import Spinner from "./ui/Spinner";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  RiDashboardLine,
  RiLoginBoxLine,
  RiLogoutBoxLine,
  RiPencilLine,
  RiSettingsLine,
  RiUserLine,
} from "@remixicon/react";

type Links = {
  name: string;
  to: string;
  icon: React.ComponentType;
}[];

const protectedLinks: Links = [
  {
    name: "Dashboard",
    to: "/dashboard",
    icon: RiDashboardLine,
  },
  {
    name: "Profile",
    to: "profile",
    icon: RiUserLine,
  },
  {
    name: "Settings",
    to: "settings",
    icon: RiSettingsLine,
  },
  {
    name: "Log Out",
    to: "loading",
    icon: RiLogoutBoxLine,
  },
];

const publicLinks: Links = [
  {
    name: "Register",
    to: "",
    icon: RiPencilLine,
  },
  {
    name: "Log In",
    to: "",
    icon: RiLoginBoxLine,
  },
];

const Navigation = () => {
  const { login, register, logout, isAuthenticated, user, isLoading } =
    useKindeAuth();
  const location = useLocation();

  const checkIsActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <aside
      className="flex flex-col sm:flex-row z-40 sm:min-h-screen border-b-2 sm:border-b-0 sm:border-r-2 border-tremor-ring dark:border-dark-tremor-ring"
      aria-label="Sidebar"
    >
      <div className="flex flex-row sm:flex-col gap-8 py-2 sm:py-8 px-2 lg:pl-6 lg:pr-12 overflow-y-auto bg-tremor-background dark:bg-dark-tremor-background justify-center sm:justify-start">
        <NavLink to="/dashboard" className="flex flex-col justify-center">
          <h1 className="text-tremor lg:text-tremor-title text-center">IDB</h1>
          <p className="hidden lg:block text-tremor-label text-center">
            Slogan
          </p>
        </NavLink>
        <div className="flex flex-row sm:flex-col gap-4 text-tremor-medium">
          {isLoading && <Spinner />}
          {!isLoading && !isAuthenticated && (
            <ul className="flex flex-row sm:flex-col gap-2 text-tremor-content-strong dark:text-dark-tremor-content-strong">
              {publicLinks.map((link) => (
                <li
                  key={link.name}
                  className="flex items-center hover:bg-white/10 rounded-full cursor-pointer overflow-clip"
                >
                  <NavLink
                    to={link.to}
                    onClick={() => {
                      if (link.name === "Register") {
                        register();
                      } else if (link.name === "Log In") {
                        login();
                      }
                    }}
                    className="flex items-center w-full h-full gap-2 pl-3 pr-6 py-2"
                  >
                    <Icon icon={link.icon} />
                    <span className="hidden md:block">{link.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
          {!isLoading && isAuthenticated && user && (
            <ul className="flex flex-row sm:flex-col gap-2 text-tremor-content-strong dark:text-dark-tremor-content-strong">
              {protectedLinks.map((link) => (
                <li
                  key={link.name}
                  className={`flex items-center w-fit hover:bg-white/10 rounded-full cursor-pointer overflow-clip ${
                    checkIsActive(link.to) ? "bg-white/10" : ""
                  }`}
                >
                  <NavLink
                    to={link.to}
                    {...(link.name === "Log Out"
                      ? { onClick: () => logout() }
                      : {})}
                    className="flex items-center w-full h-full gap-2 pl-3 pr-3 lg:pr-6 py-2"
                  >
                    <Icon icon={link.icon} />
                    <span className="hidden md:block">{link.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Navigation;
