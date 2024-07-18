import Section from "../../sharedLayouts/Section";
import WorkSpaceForm from "./WorkSpaceForm";
import Heading from "../Heading";
import { arrow, companyReach, workspace, workspaces } from "../../constants";
import Button from "../Button";

const WorkSpace = () => {
  return (
    <Section className="relative min-h-4 pb-24">
      <WorkSpaceForm />
      <div className="normal-pad  mt-10 md:mt-48">
        <Heading
          mainText="Workspaces that fit"
          spanText="Your Business needs"
        />

        <div className="mt-[4.25rem] md:flex">
          <div className="md:w-4/12 space-y-2.5 divide-y-2 min-h-[25rem]">
            {workspaces.map((spaces, spacesIndex) => {
              return (
                <div
                  key={spacesIndex}
                  className="flex items-center p-2.5 justify-between"
                >
                  <p className="text-xl">{spaces.title}</p>
                  <div>
                    <img src={arrow} alt="arrow" />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="md:w-4/12 min-h-80 py-6 pl-12 pr-16">
            <div className="relative overflow min-h-[19rem]">
              {workspaces.map((spaces, spaceIndex) => {
                return (
                  <div key={spaceIndex} className="absolute  h-full  bg-white">
                    <div className="bg-white">
                      <p className="text-xl underline underline-offset-8 text-custom_blue font-semibold text-center md:text-left">
                        {spaces.title}
                      </p>
                    </div>

                    <div className="my-8">
                      <p className="text-[0.75rem]">{spaces.brief}</p>
                    </div>

                    <Button className="bg-custom_blue text-white text-[0.713rem] py-2.5 px-[1.12rem] mt-auto  block mx-auto md:mx-0">
                      Explore More
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="md:w-4/12 h-[25rem]">
            <img src={workspace} alt="workspace" className="img" />
          </div>
        </div>

        <div className="grid grid-cols-4 mt-10 md:mt-24">
          {companyReach.map((reach, reachIndex) => {
            return (
              <div key={reachIndex} className="col-span-1">
                <h2 className="text-gradient text-4xl md:text-8xl font-extrabold text-center">
                  {reach.count}+
                </h2>
                <p className="text-center text-sm md:text-[2rem] font-normal">
                  {reach.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default WorkSpace;
