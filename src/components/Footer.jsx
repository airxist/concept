import React from "react";
import Section from "../sharedLayouts/Section";
import { presence } from "../constants";

const Footer = () => {
  return (
    <Section>
      <div>
        <div>
          <h4 className="font-bold">Our Presence</h4>
          <p>{presence}</p>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
