import { Divider } from "@tremor/react";
import Contact from "../components/landing/Contact";
import Arguments from "../components/landing/Arguments";
import Slogan from "../components/landing/Slogan";
import Welcome from "../components/landing/Welcome";
import Navigation from "../components/landing/Navigation";

const Landing = () => {
  return (
    <div className="relative flex flex-col w-full items-center">
      <Navigation />
      <div className="flex flex-col px-4 md:px-12 xl:px-24  max-w-7xl">
        <Welcome />
        <Divider className="max-w-4xl" />
        <Slogan />
        <Divider className="max-w-4xl" />
        <Arguments />
        <Divider className="max-w-4xl" />
        <Contact />
      </div>
    </div>
  );
};

export default Landing;
