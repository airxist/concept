import React from "react";

const Heading = ({ mainText, spanText, description }) => {
  return (
    <div>
      <h2>
        {mainText}
        <span>{spanText}</span>
      </h2>
      {description && <p>{description}</p>}
    </div>
  );
};

export default Heading;
