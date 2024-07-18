import { leading_bg, leading_network } from "../../assets";
import { leading_network_text } from "../../constants";
import Section from "../../sharedLayouts/Section";
import Button from "../Button";
import Heading from "../Heading";
import Overlay from "../Overlay";

const Leading = () => {
  return (
    <Section>
      <div className="min-h-[35.65rem] relative isolate">
        <Overlay className="w-full h-full absolute -z-10" />
        <div className="w-full h-full overflow-hidden absolute top-0 left-0 -z-20">
          <img
            src={leading_bg}
            alt="leading"
            className="mx-auto img scale-150"
          />
        </div>

        <div className="w-full h-full md:flex items-center normal-pad overflow-hidden">
          <div className="md:w-1/2">
            <div className="mt-24">
              <img src={leading_network} alt="leading network" />
            </div>
          </div>

          <div className="md:w-1/2 text-white px-10 min-h-[322px]">
            <div>
              <Heading
                mainText="ONE OF INDIA’S LEADING"
                spanText="CO-WORKING & SHARED OFFICE NETWORK"
                description={leading_network_text}
                main={true}
                fontSize1="text-2xl  text-center md:text-4xl md:text-left"
                fontSize2="text-justify text-sm"
              />
              <Button className="border border-custom_pink text-custom_pink px-3 py-1 mt-4">
                Talk to an Expert
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Leading;
