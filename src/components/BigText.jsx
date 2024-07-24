import React from "react";

const BigText = ({ text, className, textClass }) => {
 return (
  <div className={`${className} hidden md:block absolute -z-10`}>
   <h2 className={`${textClass} font-extrabold font-oeb leading-none`}>
    {text}
   </h2>
  </div>
 );
};

export default BigText;
