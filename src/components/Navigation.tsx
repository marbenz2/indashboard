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

const Navigation = () => {
  const { login, register, logout, isAuthenticated, user, isLoading } =
    useKindeAuth();
  const location = useLocation();

  const checkIsActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <aside
      className="flex z-40 min-h-screen transition-transform -translate-x-full sm:translate-x-0 border-r-2 border-white/15"
      aria-label="Sidebar"
    >
      <div className="flex flex-col gap-8 py-8 pl-6 pr-12 overflow-y-auto bg-white/10">
        <NavLink to="/app">
          <h1 className="text-tremor-title">SoMeDas</h1>
          <p className="text-tremor-label">Social Media Dashboard</p>
        </NavLink>
        <div className="flex flex-col gap-4">
          {isLoading && <Spinner />}
          {!isLoading && !isAuthenticated && (
            <ul className="flex flex-col gap-4 text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong">
              <li
                className="flex items-center gap-2 pl-3 pr-6 py-2 hover:bg-white/10 rounded-full cursor-pointer"
                onClick={() => register()}
              >
                <Icon icon={RiPencilLine} />
                <p className="flex items-center w-full h-full">Register</p>
              </li>
              <li
                className="flex items-center gap-2 pl-3 pr-6 py-2 hover:bg-white/10 rounded-full cursor-pointer"
                onClick={() => login()}
              >
                <Icon icon={RiLoginBoxLine} />
                <p className="flex items-center w-full h-full">Log In</p>
              </li>
            </ul>
          )}
          {!isLoading && isAuthenticated && user && (
            <ul className="flex flex-col gap-4 text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong">
              <li className="flex w-fit">
                <NavLink
                  to="/dashboard"
                  className={() =>
                    [
                      "flex items-center gap-2 w-full px-2 py-1 hover:bg-white/10 rounded-full",
                      checkIsActive("/dashboard") ? "bg-white/10" : "",
                    ].join(" ")
                  }
                >
                  <Icon icon={RiDashboardLine} />
                  <p className="pr-2">Dashboard</p>
                </NavLink>
              </li>
              <li className="flex w-fit">
                <NavLink
                  to="/dashboard/profile"
                  className={({ isActive }) =>
                    [
                      "flex items-center gap-2 w-full px-2 py-1 hover:bg-white/10 rounded-full",
                      isActive ? "bg-white/10" : "",
                    ].join(" ")
                  }
                >
                  <Icon icon={RiUserLine} />
                  <p className="pr-2">User Info</p>
                </NavLink>
              </li>
              <li className="flex w-fit">
                <NavLink
                  to="/dashboard/settings"
                  className={({ isActive }) =>
                    [
                      "flex items-center gap-2 w-full px-2 py-1 hover:bg-white/10 rounded-full",
                      isActive ? "bg-white/10" : "",
                    ].join(" ")
                  }
                >
                  <Icon icon={RiSettingsLine} />
                  <p className="pr-2">Settings</p>
                </NavLink>
              </li>
              <li className="flex w-fit hover:bg-white/10 rounded-full">
                <NavLink
                  to="/dashboard"
                  onClick={() => logout()}
                  className="flex items-center gap-2 w-full px-2 py-1"
                >
                  <Icon icon={RiLogoutBoxLine} />
                  <p className="pr-2">Sign Out</p>
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Navigation;
