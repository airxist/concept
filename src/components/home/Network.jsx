import { network, network_location } from "../../constants/network";
import Section from "../../sharedLayouts/Section";
import Button from "../Button";
import Heading from "../Heading";
import Overlay from "../Overlay";

const Network = () => {
  return (
    <Section>
      <div className="normal-pad pb-20">
        <Heading mainText="OUR NETWORK" spanText="NEAR YOU"  mainClass="mainTitleClass" spanClass="mainTitleClass font-bold" />
        {/* action btns */}
        <div className="flex-center space-x-3 mt-12 overflow-hidden w-full">
          {network.map((net) => {
            const { action, active } = net;
            return (
              <Button
                key={action}
                className={`text-[0.81rem] py-2 px-9 ${
                  active
                    ? "bg-custom_blue text-white"
                    : "border border-custom_blue text-custom_blue"
                } `}
              >
                {action}
              </Button>
            );
          })}
        </div>
        {/* location in picture */}
        <div className="mt-6 overflow-hidden">
          <div className="flex items-center justify-between">
            {network_location.map((location) => {
              return (
                <div className="relative max-w-[227px]" key={location.name}>
                  <div>
                    <img src={location.img} alt={location.name} />
                  </div>
                  <div>
                    {/* <p className="text-xl font-normal">{location.name}</p> */}
                    {location.active && <p className="text-[0.62rem]">View More</p>}
                  </div>
                  {/* <Overlay className="w-full h-full absolute" /> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Network;
