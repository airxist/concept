import { clients } from "../../constants";
import Section from "../../sharedLayouts/Section";
import Heading from "../Heading";
import PremiumClients from "../reusables/PremiumClients";
import Card from "../reusables/Card";

const Clients = () => {
  return (
    <Section className="py-24">
      <div className="normal-pad">
        <div>
          <Heading
            mainText="SOME WORDS FROM"
            spanText="OUR CLIENTS"
            mainClass="mainTitleClass"
            spanClass="mainTitleClass"
          />

          <div className="md:flex items-center justify-center space-y-3 md:space-y-0 md:space-x-9 mt-12">
            {clients.map((client, index) => {
              return <Card key={index} {...client} profile />;
            })}
          </div>
        </div>
        {/* Premium Clients */}
        <PremiumClients />
      </div>
    </Section>
  );
};

export default Clients;
