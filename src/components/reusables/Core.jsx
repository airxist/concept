import React from "react";
import Heading from "../Heading";

const Core = ({
  coreClassName,
  mainText,
  mainClass,
  spanText,
  spanClass,
  descripition,
  descriptionClass,
  cores
}) => {
  return (
    <div>
      <Heading
        mainText={mainText}
        mainClass={mainClass}
        spanText={spanText}
        spanClass={spanClass}
        description={descripition}
        descriptionClass={descriptionClass}
        className=""
        normal
      />
      <div className="flex items-center flex-wrap space-y-3 md:space-y-0 justify-center mt-10 gap-x-20">
        {cores.map(({icon, title}, index) => {
          return <div className={coreClassName} key={index}>
          <img src={icon} alt={title} />
          <p className="text-center mt-2 text-[0.6rem] md:text-sm">{title}</p>
        </div>
        })}
      </div>
      
    </div>
  );
};

export default Core;
