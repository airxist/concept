import { premium_client, premium_logo } from "../../constants";
import Heading from "../Heading";

const PremiumClients = ({className}) => {
  return (
    <div className={`${className} mt-24`}>
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
            <div key={index}>
              <img src={logo} alt="premium logo" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PremiumClients;
