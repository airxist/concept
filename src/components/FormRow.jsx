import React from "react";

const FormRow = ({ type, name, placeholder, className, city }) => {
  return (
    <div className={`${className} mb-3 md:mb-0 h-9 ${city ? "md:col-span-1" : "md:col-span-2"}`}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        id={name}
        className="p-3 w-full h-full outline-none border-none text-[0.8rem] font-normal"
      />
    </div>
  );
};

export default FormRow;
