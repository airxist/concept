import React from "react";

const FormRow = ({ type, name, placeholder, className }) => {
  return (
    <div className={`${className} h-9`}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        id={name}
        className="p-3 outline-none border-none"
      />
    </div>
  );
};

export default FormRow;
