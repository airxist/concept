import React from "react";
import Section from "../../sharedLayouts/Section";
import FormRow from "../FormRow";

const WorkSpace = () => {
  return (
    <Section className="normal-pad relative">
      <div className="absolute left-0 z-10 m-auto -mt-10 w-full">
        <form className="h-36 bg-custom_pink border max-w-[67rem] m-auto py-6 px-9 ">
          <p className="font-normal text-white text-[1.08rem]">Meet India's number one workspace provider</p>
          <div>
            <FormRow
            type="text"
            name="fullname"
            placeholder="Enter Your Name"
            />
          </div>
        </form>
      </div>

      <div></div>
      WorkSpace
    </Section>
  );
};

export default WorkSpace;
