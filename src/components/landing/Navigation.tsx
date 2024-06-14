import { useEffect, useState } from "react";
import { ModeToggle } from "../mode-toggle";
import { Button } from "@tremor/react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isTop, setIsTop] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isTopPosition = currentScrollPos < 50;

      setIsTop(isTopPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOnClick = () => {
    navigate("/dashboard");
  };

  return (
    <nav
      className={`fixed top-0 left-1/2 -translate-x-1/2 flex w-full z-40 justify-center ${
        isTop
          ? "transparent shadow-none dark:shadow-none"
          : "bg-tremor-background dark:bg-slate-950 shadow-md dark:shadow-none"
      } transition-all duration-500`}
    >
      <div className="flex w-full max-w-7xl px-4 md:px-12 xl:px-24 py-6 justify-between">
        <div className="flex gap-2 sm:gap-12">
          <Button
            size="md"
            color="orange"
            variant="secondary"
            onClick={handleOnClick}
          >
            Loslegen...
          </Button>
          <Button size="md" color="orange" variant="secondary">
            Prices
          </Button>
          <Button size="md" color="orange" variant="secondary">
            Docs
          </Button>
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navigation;
