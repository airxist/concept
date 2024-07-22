import {
  companyAward,
  hero_title,
  heroMap,
  national_titles,
} from "../constants";
import Section from "../sharedLayouts/Section";
import BigText from "./BigText";

const Hero = ({ type }) => {
  const HomeHero = () => {
    return (
      <Section className="h-screen md:h-[32.62rem]">
        <div className="h-full md:flex md:h-full">
          <div className="flex-center w-full px-5  md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
            <BigText
              text="YEAH"
              className="hidden md:block absolute -top-32 -right-40 -z-10"
              textClass="text-custom_ash text-[14.627rem] font-extrabold"
            />
            <BigText
              text="8"
              className="hidden md:block absolute top-[289.8px] -left-6 -z-10"
              textClass="text-custom_ash text-[22.32rem] font-extrabold"
            />
            <BigText
              text="#"
              className="hidden md:block absolute -top-[58px] -left-[31px] -z-10"
              textClass="text-[14rem] font-extrabold"
            />
            <div>
              <div className="">
                <h1 className="font-semibold text-center text-3xl md:text-[2.15rem] md:text-left max-w-[30rem] text-gradient linear-gradient(90deg, #2B428A 0%, #C13E92 100%);">
                  {hero_title}
                </h1>
                <ul className="mt-5 font-normal text-[1.23rem]">
                  {national_titles.map((title, titleIndex) => {
                    return (
                      <li
                        key={titleIndex}
                        className="text-xl text-center md:text-left"
                      >
                        {title}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="hidden md:block absolute -right-28 top-[203.9px]">
              <img src={heroMap} alt="hero svg" />
            </div>
          </div>
          {/* AWARD */}
          <div className="bg-custom_blue flex-center w-full md:w-1/2 h-1/2 md:h-full">
            <div>
              <img src={companyAward} alt="company award" />
            </div>
          </div>
        </div>
      </Section>
    );
  };
  const AboutHero = () => {
    return <Section>About Hero</Section>;
  };

  switch (type) {
    case "home":
      return HomeHero();
      break;
    case "about":
      return AboutHero();
      break;
    default:
      return <div>add a type propertry</div>;
  }
};

export default Hero;