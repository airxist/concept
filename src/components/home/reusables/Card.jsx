import Button from "../../Button";

const Card = ({ img, title, text, logo, date, company }) => {
  return (
    <div className="border border-slate-800/[0.2] hover:shadow-2xl hover:border-none">
      <div className="border">
        <img src={img} alt="news" className="w-full h-full" />
      </div>
      <div className="p-2">
        {logo && (
          <div>
            <img src={logo} alt="news logo" />
          </div>
        )}
        <div className="my-2 md:my-5 space-y-4">
          <h3 className="text-base font-bold line-clamp-1 md:line-clamp-none">
            {title}
          </h3>
          <p className="text-[0.64rem] text-slate-500 line-clamp-4 md:line-clamp-none">
            {text}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <Button className="text-custom_blue">Read Post</Button>
          <div>
            {company && <p className="text-[0.55rem] font-bold text-slate-400">{company}</p>}
            <p className="text-[0.38rem] text-slate-400">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
