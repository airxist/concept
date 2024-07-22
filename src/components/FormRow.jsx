import React from "react";

const FormRow = ({ label, type, name, placeholder, className, city, contact }) => {
  const normalFormRow = () => {
    return (
      <div
        className={`${className} mb-3 md:mb-0 h-9 ${
          city ? "md:col-span-1" : "md:col-span-2"
        }`}
      >
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

  const contactFormRow = () => {
    return (
      <div className={className}>
        <label htmlFor={name} className="text-sm font-semibold">
          {label}
        </label>
        <input type={type} name={name} id={name} placeholder={placeholder} className="w-full px-3 py-2 border-2 text-sm" />
      </div>
    );
  };

  return contact ? contactFormRow() : normalFormRow();
};

export default FormRow;
