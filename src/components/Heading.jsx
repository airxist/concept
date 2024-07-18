import React from "react";

const Heading = ({ mainText, spanText, description }) => {
  return (
    <div>
      <h2 className="uppercase text-center text-[2rem]">
        {mainText}{' '}
        <span className="font-bold">{spanText}</span>
      </h2>
      {description && <p>{description}</p>}
    </div>
  );
};

export default Heading;
