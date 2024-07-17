import { contact, projectLogo, downloadApp } from "../constants";
import { navigation } from "../constants";
import Button from "./Button";

const Header = () => {
  return (
    <header>
      <div className="h-[47px] bg-custom_blue flex items-center justify-end normal-pad">
        <div className="flex items-center space-x-14">
          <p className="text-white text-[0.94rem] font-semibold">{contact.phone}</p>
          <p className="text-white text-[0.94rem] font-semibold">{contact.email}</p>
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
            <p className="text-sm text-white font-semibold">Download App</p>
          </div>
        </div>
      </div>
      <div className="normal-pad flex items-center h-20">
        <div className="w-[9.46rem]">
          <img
            src={projectLogo}
            alt="logo"
            className="w-full h-full object-center object-cover"
          />
        </div>
        <nav className="ms-auto min-w-[45.5rem]">
          <ul className="flex items-center justify-between">
            {navigation.map((li) => {
              return (
                <li key={li.title} className="capitalize text-[0.975rem] font-semibold">
                  {li.title}
                </li>
              );
            })}
          </ul>
        </nav>
        <Button className="bg-custom_blue px-5 py-2 text-white rounded-3xl ml-10">
          Book a Demo
        </Button>
      </div>
    </header>
  );
};

export default Header;
