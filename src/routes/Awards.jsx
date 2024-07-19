import React from "react";
import Section from "../sharedLayouts/Section";
import Heading from "../components/Heading";
import { award_main, award_span, award_text } from "../constants/award";

const Awards = () => {
  return (
    <Section>
      <div>
        <Heading
          mainText={award_main}
          spanText={award_span}
          description={award_text}
        />
      </div>
    </Section>
  );
};

export default Awards;
