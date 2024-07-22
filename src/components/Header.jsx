import { useState } from "react";
import { contact, projectLogo, downloadApp } from "../constants";
import { navigation } from "../constants";
import Button from "./Button";
import close from "../assets/close.svg";
import { Link } from "react-router-dom";
import { enablePageScroll, disablePageScroll } from "scroll-lock";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);
  


  const closeNav = () => {
    if (!isNavOpen) return;
  enablePageScroll
    setIsNavOpen(false);
  };

  const openNav = () => {
    disablePageScroll();
    setIsNavOpen(true)
  }

  return (
    <header className="relative isolate shadow-lg">
      <div className="h-12 bg-custom_blue flex items-center justify-center space-x-9 sm:space-x-14 md:justify-end normal-pad">
        <div className="flex items-center space-x-6 md:space-x-14">
          <p className="text-white text-[0.65rem] md:text-[0.94rem] font-semibold">
            {contact.phone}
          </p>
          <p className="text-white text-[0.65rem] md:text-[0.94rem] font-semibold">
            {contact.email}
          </p>
          <div>
            <div className="flex-center space-x-[0.4rem]">
              {downloadApp.map((app) => {
                return (
                  <div key={app.id}>
                    <img src={app.img} alt={app.img} />
                  </div>
                );
              })}
            </div>
            <p className="text-[0.65rem] md:text-sm text-white font-semibold">
              Download App
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between h-20 relative normal-pad">
        <div className="w-[9.46rem]">
          <img
            src={projectLogo}
            alt="logo"
            className="w-full h-full object-center object-cover"
          />
        </div>

        <nav
          className={`"ms-auto ${
            !isNavOpen && "hidden"
          } md:block absolute z-30  top-0 left-0 md:static h-96 md:h-fit w-full md:w-[45rem] ml-auto`}
        >
          <Button
            className="md:hidden absolute top-10 right-10"
            handleClick={closeNav}
          >
            <img src={close} alt="close" />
          </Button>

          <ul className="flex flex-col h-full justify-center space-y-7 md:space-y-0  md:space-x-8 md:flex-row items-center md:justify-between bg-white">
            {navigation.map((li) => {
              return (
                <li
                  key={li.title}
                  className="capitalize text-sm md:text-[0.975rem] font-semibold"
                  onClick={closeNav}
                >
                  <Link to={li.url}>{li.title}</Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Button className="bg-custom_blue hidden md:block md:px-3 py-2 text-white rounded-3xl ml-10 text-[0.75rem] md:text-base">
          Book a Demo
        </Button>
        <Button handleClick={openNav} className="md:hidden">
          Menu
        </Button>
      </div>
    </header>
  );
};

export default Header;
