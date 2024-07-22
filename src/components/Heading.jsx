import React from "react";

const Heading = ({
  className,
  mainText,
  spanText,
  mainClass,
  spanClass,
  description,
  descriptionClass,
  normal,
}) => {
  const normalHead = () => (
    <div>
      <h2 className="text-center">
        <span className={mainClass}>{mainText}</span>{" "}
        {spanText && <span className={spanClass}>{spanText}</span>}
      </h2>
      {description && <p className={descriptionClass}>{description}</p>}
    </div>
  );

  const styledHead = () => (
    <div>
      <h2 className="text-center">
        <span className={mainClass}>{mainText}</span>{" "}
        {spanText && <span className={spanClass}>{spanText}</span>}
      </h2>
      {description && <p className={descriptionClass}>{description}</p>}
    </div>
  );

  return normal ? normalHead() : styledHead();
};

export default Heading;
