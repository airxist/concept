import React from "react";
import Section from "../sharedLayouts/Section";
import Heading from "../components/Heading";
import { contact_main, contact_span, contact_text } from "../constants";

const Contact = () => {
  return (
    <Section>
      <div>
        <Heading
          mainText={contact_main}
          spanText={contact_span}
          description={contact_text}
        />
      </div>
    </Section>
  );
};

export default Contact;
