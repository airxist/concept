import React from "react";
import Section from "../sharedLayouts/Section";
import { news, news_text, news_title } from "../constants";
import Button from "../components/Button";
import Card from "../components/home/reusables/Card";

const News = () => {
  return (
    <Section>
      <div className="normal-pad py-20">
        <div>
          <h1 className="text-center">{news_title}</h1>
          <p>{news_text}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 mt-10 gap-12">
          {news.map((news, index) => (
            <Card key={index} {...news} />
          ))}
        </div>

        <Button className="mt-20 mx-auto p-2 text-white block bg-footer-gradient">
          <p>Load More</p>
        </Button>
      </div>
    </Section>
  );
};

export default News;
