import React from "react";
import Section from "../sharedLayouts/Section";
import Heading from "../components/Heading";
import { award_main, award_span, award_text, awards } from "../constants";
import Card from "../components/reusables/Card";

const Awards = () => {
  return (
    <Section>
      <div className="py-10 normal-pad">
        <Heading
          mainText={award_main}
          spanText={award_span}
          mainClass="mainTitleClass font-normal"
          spanClass="mainTitleClass font-bold"
          description={award_text}
          descriptionClass="descriptionClass"
          gradient
        />

        <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-y-10">
          {awards.map((award, index) => {
            return <Card key={index} {...award} profile />;
          })}
        </div>
      </div>
    </Section>
  );
};

export default Awards;
