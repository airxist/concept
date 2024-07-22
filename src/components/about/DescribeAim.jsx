import React from "react";
import {
  core_values,
  gen_long_text,
  gen_long_text2,
} from "../../constants/about";
import Heading from "../Heading";
import Core from "../reusables/Core";

const DescribeAim = () => {
  return (
    <div>
      <div className="normal-pad">
        <div className="space-y-10 py-24">
          <p className="text-xl text-center">{gen_long_text2}</p>
          <p className="text-xl text-center">{gen_long_text}</p>
        </div>

        <Core
          coreClassName="text-white bg-custom_blue rounded-full flex flex-col items-center justify-center w-32 md:w-44 aspect-square"
          mainText="what are our"
          spanText="core values"
          mainClass="uppercase mainTitleClass font-normal"
          spanClass="uppercase mainTitleClass font-bold"
          descripition="Our values bind us together to make not just a company, but a family of thought and perseverance."
          descriptionClass="descriptionClass"
          cores={core_values}
          gap="gap-x-20"
        />
      </div>
    </div>
  );
};

export default DescribeAim;
