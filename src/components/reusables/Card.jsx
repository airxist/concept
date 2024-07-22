import Button from "../Button";
import { ellipse1 as pink, ellipse2 as blue } from "../../assets";

const Card = ({
  image,
  title,
  text,
  logo,
  date,
  company,
  name,
  comment,
  role,
  type,
  before,
  after,
  profile,
}) => {
  const regular = () => {
    return (
      <div className="border border-slate-800/[0.2] hover:shadow-2xl hover:border-none">
        <div className="border">
          <img src={image} alt="news" className="w-full h-full" />
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
              {company && (
                <p className="text-[0.55rem] font-bold text-slate-400">
                  {company}
                </p>
              )}
              <p className="text-[0.38rem] text-slate-400">{date}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const standard = () => {
    return (
      <div className=" rounded-br-[5rem] max-w-[31.95rem] h-[15.33rem] grid grid-cols-3 space-x-6 relative overflow-hidden border">
        <div className="col-span-1 flex items-end">
          <img src={image} alt={name} />
        </div>

        <div className="col-span-2 pt-7 pr-5">
          <h5 className={`${before ? 'font-semibold text-sm' : 'text-xl font-bold'}`}>{title}</h5>
          <p className={`${before ? 'text-[0.65rem]' : 'text-[0.81rem]'} font-normal`} >{comment}</p>
          {before ? (
            <div className="mt-10">
              <p className="text-sm font-semibold">
                {before} "<span className="text-custom_blue">{title}</span>" {after}
              </p>
            </div>
          ) : (
            <div className="mt-4">
              <h6 className="font-bold text-[0.81rem] capitalize">{name}</h6>
              <p className="font-light text-[0.81rem]">{role}</p>
            </div>
          )}
        </div>

        {/* The ellipse */}
        <div className="absolute bottom-0 right-0">
          <img src={`${type === 1 ? pink : blue}`} alt="ellipse" />
        </div>
      </div>
    );
  };

  return profile ? standard() : regular();
};

export default Card;
