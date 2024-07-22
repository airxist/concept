import React from "react";
import { aimMission, aimVision } from "../../constants/about";

const Aim = () => {
  return (
    <div className="bg-custom_blue border">
      <div className="py-20 flex flex-col md:flex-row items-center justify-center md:space-x-20 normal-pad">
        <div className="max-w-[25.5rem] h-[206px] flex flex-col items-center">
          <div>
            <img src={aimVision.vision} alt="vision" />
          </div>
          <h2 className="uppercase text-2xl font-semibold text-white my-2">Vision</h2>
          <p className="text-center text-white text-base">{aimVision.text}</p>
        </div>
        <div className="max-w-[25.5rem] h-[206px] flex flex-col items-center">
          <div>
            <img src={aimVision.vision} alt="vision" />
          </div>
          <h2 className="uppercase text-2xl font-semibold text-white my-2">Mission</h2>
          <p className="text-center text-white text-base">{aimMission.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Aim;
