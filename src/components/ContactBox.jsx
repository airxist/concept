import React from "react";

const ContactBox = ({icon, title, text, pad}) => {
  return (
    <div className={`flex items-center justify-between border-2 w-full md:w-[15.7rem] p-1 ${pad && 'mt-3 md:mt-0'}`}>
      <div>
        <p className="text-[0.65rem] text-slate-400">{title}</p>
        <p className="text-sm font-semibold">{text}</p>
      </div>
      <div>
        <img src={icon} alt={`icon for ${title}`} />
      </div>
    </div>
  );
};

export default ContactBox;
