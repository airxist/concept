import React from "react";

const Heading = ({
  mainText,
  spanText,
  description,
  main,
  fontSize1,
  fontSize2
}) => {
  return (
    <div>
      <h2
        className={`uppercase  ${
          fontSize1 ? fontSize1 : "text-2xl md:text-[2rem] text-center"
        }`}
      >
        <span className={`${main ? "font-bold" : " "}`}>{mainText}</span>{" "}
        <span className={`${main ? "" : "font-bold"}`}>{spanText}</span>
      </h2>
      {description && (
        <p
          className={`font-normal mt-6 ${
            fontSize2 ? fontSize2 : "text-[0.817rem]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default Heading;
