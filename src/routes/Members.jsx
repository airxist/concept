import React from "react";
import Section from "../sharedLayouts/Section";
import Heading from "../components/Heading";
import { member_main, member_span, member_text, members } from "../constants";
import { linkedIn2 } from "../assets";

const Members = () => {
  return (
    <Section>
      <div className="normal-pad">
        <Heading
          mainText={member_main}
          spanText={member_span}
          description={member_text}
          mainClass="mainTitleClass text-gradient"
          spanClass="mainTitleClass text-gradient"
          descriptionClass="descriptionClass"
        />

        <div className="my-10 grid grid-cols-2 md:grid-cols-3 gap-10">
          {members.map((member, index) => (
            <div key={index} className="border border-slate-500/10">
              <div className="max-w-80 h-44 border overflow-hidden bg-slate-200">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-[202px] h-[232px] mx-auto -translate-y-8"
                />
              </div>
              <div className="p-2">
                <div>
                  <h2 className="text-[0.78rem] font-semibold">{member.name}</h2>
                  <p className="font-semibold text-[0.65rem] text-slate-400">{member.position}</p>
                </div>
                <div className="mt-2">
                  {member.comment.map((text, index) => (
                    <p key={index} className={`${index > 0 && 'mt-2'} text-[0.75rem] font-semibold`}>{text}</p>
                  ))}
                </div>
                <a href={member.url}>
                  <img src={linkedIn2} alt="linkedIn" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Members;
