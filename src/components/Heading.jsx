import React from "react";

const Heading = ({
  className,
  mainText,
  spanText,
  mainClass,
  spanClass,
  description,
  descriptionClass,
  gradient
}) => {
  const normalHead = () => (
    <div>
      <h2 className={`${mainClass} text-center ${gradient && 'text-gradient'}`}>{mainText}</h2>
      {description && <p className={descriptionClass}>{description}</p>}
    </div>
  );

  const styledHead = () => (
    <div>
      <h2 className={`text-center font-sr ${gradient && 'text-gradient'}`}>
        <span className={mainClass}>{mainText}</span>{" "}
        {spanText && <span className={`${spanClass} font-sb font-bold`}>{spanText}</span>}
      </h2>
      {description && <p className={descriptionClass}>{description}</p>}
    </div>
  );

  return spanText ? styledHead() : normalHead();
};

export default Heading;
