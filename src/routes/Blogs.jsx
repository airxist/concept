import React from "react";
import Section from "../sharedLayouts/Section";
import { blog_posts } from "../constants";
import Card from "../components/reusables/Card";
import Heading from "../components/Heading";
import Selection from "../components/Selection";

const Blogs = () => {
  return (
    <Section>
      <div className="normal-pad">
        <Heading
          mainText="MY Branch Blogs"
          mainClass="text-gradient mainTitleClass font-semibold"
          description="New technologies latest ideas new upgrades updates and lot"
          descriptionClass="descriptionClass"
        />

        <div className="my-12">
          <div className="flex items-center justify-end mb-4">
            <Selection className="w-full max-w-[216px]" cat="Categories" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {blog_posts.map((post, index) => {
              return <Card key={index} {...post} />;
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Blogs;
