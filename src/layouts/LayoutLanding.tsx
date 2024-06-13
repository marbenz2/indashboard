import { Outlet } from "react-router-dom";

const LayoutLanding = () => {
  return (
    <main className="bg-repeat bg-[length:200px] bg-gradient-to-r from-tremor-background-emphasis/20 from-[0px] to-transparent to-[1px] flex flex-col min-h-screen w-full py-24 justify-center items-center antialiased dark:bg-slate-950 text-tremor-default text-tremor-content-strong dark:text-dark-tremor-content-strong">
      <Outlet />
    </main>
  );
};

export default LayoutLanding;
