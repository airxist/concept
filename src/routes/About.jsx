import Aim from "../components/about/Aim";
import DescribeAim from "../components/about/DescribeAim";
import PremiumClients from "../components/reusables/PremiumClients";
import Vitals from "../components/reusables/Vitals";
import { about_hero, gen_text, gen_text_2, gen_title, genesis } from "../constants";

const About = () => {
  return (
    <div>
      <div className="w-full">
        <img src={about_hero} alt="about-hero" className="w-full object-cover object-center" />
      </div>
      <Vitals
        title={gen_title}
        text={gen_text}
        belowText={gen_text_2}
        photoArray={genesis}
        className="normal-pad pt-12 pb-24"
        
      />
      <Aim />
      <DescribeAim />
      <PremiumClients className="normal-pad pt-5 pb-20" />
    </div>
  );
};

export default About;
