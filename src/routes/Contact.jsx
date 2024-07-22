import React from "react";
import Section from "../sharedLayouts/Section";
import Heading from "../components/Heading";
import {
  contact,
  contact_main,
  contact_span,
  contact_text,
} from "../constants";
import ContactBox from "../components/ContactBox";
import { call, message } from "../assets";
import Button from "../components/Button";
import FormRow from "../components/FormRow";
import Selection from "../components/Selection";

const Contact = () => {
  return (
    <Section>
      <div className="normal-pad py-10">
        <Heading
          mainText={contact_main}
          spanText={contact_span}
          mainClass="mainTitleClass font-normal"
          spanClass="mainTitleClass font-bold"
          description={contact_text}
          descriptionClass="descriptionClass"
          gradient
        />

        <div className="mt-10">
          <h3 className="capitalize text-[0.75rem] font-semibold text-center">
            contact details
          </h3>
          <div className="mt-4 md:flex items-center gap-x-10 justify-center">
            <ContactBox
              title="Mobile Number"
              text={contact.phone}
              icon={call}
            />
            <ContactBox
              title="Email ID"
              text={contact.email}
              icon={message}
              pad
            />
          </div>
        </div>

        <div className="my-16">
          <div className="max-w-[768px] mx-auto">
            <div className="flex items-end justify-between">
              <h3 className="font-bold text-[1.14rem]">
                Fill The Contact Form
              </h3>
              <p className="text-custom_blue text-[0.65rem]">
                Are you a land owner?
              </p>
            </div>
            <form>
              <div className="py-5 gap-5 grid grid-cols-1 md:grid-cols-3">
                {/* single form row */}
                <FormRow
                  label="Your Name"
                  name="name"
                  type="text"
                  placeholder="Enter Your Name"
                  contact
                />
                {/* single form row */}
                <FormRow
                  label="Your Mobile Number"
                  name="phone"
                  type="text"
                  placeholder="Enter Your Mobile Number"
                  contact
                />
                {/* single form row */}
                <FormRow
                  label="Your Email ID"
                  name="email"
                  type="email"
                  placeholder="Enter Your Email ID"
                  contact
                />
                {/* single form row */}
                <Selection type="Select Service" cat="Choose Your Service" />
                {/* single form row */}
                <Selection type="Your Location" cat="Enter Your Location" />
                {/* single form row */}
                <Selection type="Where You Heard About Us?" cat="Google" />
              </div>
              <Button className="bg-custom_blue text-white p-2">Submit</Button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
