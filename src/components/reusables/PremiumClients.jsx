import { useGSAP } from "@gsap/react";
import { premium_client, premium_logo } from "../../constants";
import Heading from "../Heading";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const PremiumClients = ({ className }) => {
 const clientLogoRef = useRef([]);

 useGSAP(() => {
  gsap.from(clientLogoRef.current, {
    scale: 0,
    autoAlpha: 0,
    ease: 'power4.inOut',
    scrollTrigger: {
      trigger: clientLogoRef.current,
      start: 'top center',
      toggleActions: 'restart pause'
    },
    stagger: {
      amount: 0.75,
      axis: 'x',
      from: 'center'
    },
  })
 }, []);

 return (
  <div className={`${className} mt-24 overflow-hidden`}>
   <Heading
    mainText="Our"
    spanText="Premium Clients"
    mainClass="mainTitleClass uppercase font-normal"
    spanClass="mainTitleClass uppercase font-bold"
    description={premium_client}
    descriptionClass="descriptionClass"
    normal
   />
   <div className="flex items-center flex-wrap gap-x-20 gap-y-9 justify-center mt-12">
    {premium_logo.map((logo, index) => {
     return (
      <div key={index} ref={(el) => (clientLogoRef.current[index] = el)}>
       <img src={logo} alt="premium logo" />
      </div>
     );
    })}
   </div>
  </div>
 );
};

export default PremiumClients;
