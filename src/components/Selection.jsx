import { select } from "../assets";

const Selection = ({type, cat, className}) => {
  return (
    <div className={className}>
      {type && <h3 className="text-sm font-semibold">{type}</h3>}
      <div className="border-2 w-full py-2 pl-3 pr-2 flex items-center justify-between">
        <p className="text-[0.814rem]">{cat}</p>
        <div>
          <img src={select} alt="select arrow" />
        </div>
      </div>
    </div>
  );
};

export default Selection;
