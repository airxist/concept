import React from "react";

const BigText = ({ text, className, textClass }) => {
  return (
    <div className={className}>
      <h2 className={`${textClass} leading-none`}>{text}</h2>
    </div>
  );
};

export default BigText;
