import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

const LayoutApp = () => {
  return (
    <main className="flex min-h-screen w-full items-center antialiased dark:bg-slate-950 text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong">
      <Navigation />
      <div className="flex w-full items-center justify-center">
        <Outlet />
      </div>
    </main>
  );
};

export default LayoutApp;
