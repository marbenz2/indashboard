import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

const LayoutApp = () => {
  return (
    <main className="flex flex-col sm:flex-row min-h-screen w-full antialiased dark:bg-slate-950 text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong">
      <Navigation />
      <div className="flex w-full p-4">
        <Outlet />
      </div>
    </main>
  );
};

export default LayoutApp;
