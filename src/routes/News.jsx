import React from "react";
import Section from "../sharedLayouts/Section";
import { news, news_text, news_title } from "../constants";
import Button from "../components/Button";

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
            <div key={index} className="border border-slate-800/[0.2] hover:shadow-2xl hover:border-none">
              <div className="border">
                <img src={news.img} alt="news" className="w-full h-full" />
              </div>
              <div className="p-2">
                <div>
                  <img src={news.logo} alt="news logo" />
                </div>
                <div className="my-2 md:my-5 space-y-4">
                  <h3 className="text-base font-bold line-clamp-1 md:line-clamp-none">{news.title}</h3>
                  <p className="text-[0.64rem] text-slate-500 line-clamp-4 md:line-clamp-none">{news.text}</p>
                </div>
                <div className="flex items-center justify-between">
                  <Button className="text-custom_blue">Read Post</Button>
                  <p>{news.date}</p>
                </div>
              </div>
            </div>
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
