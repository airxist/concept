import React from "react";
import Section from "../sharedLayouts/Section";
import { blog_posts } from "../constants";
import Card from "../components/reusables/Card";

const Blogs = () => {
  return (
    <Section>
      <div className="normal-pad">
        <div>
          <h1>MY Branch Blogs</h1>
          <p>New technologies latest ideas new upgrades updates and lot</p>
        </div>

        <div className="my-24">
          <div className="flex items-center justify-end mb-4">
            <div className="border w-full max-w-56 py-2 pl-3 pr-2">
              <p className="text-[0.814rem]">Categories</p>
            </div>
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
