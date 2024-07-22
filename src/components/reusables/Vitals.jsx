import Heading from "../Heading";

const Vitals = ({ title, text, photoArray, belowText, className }) => {
  return (
    <div className={className}>
      <div>
        <Heading
          mainText={title}
          description={text}
          mainClass="mainTitleClass font-semibold"
          descriptionClass="descriptionClass"
          normal
        />

        <div className="flex items-center justify-between mt-5 mb-16 md:mt-12 md:mb-32">
          {photoArray.map((photo, index) => {
            return (
              <div key={index}>
                <img src={photo} alt="gen" />
              </div>
            );
          })}
        </div>

        <div className="max-w-[1050px] mx-auto">
          <p className="text-xl text-center">{belowText}</p>
        </div>
      </div>
    </div>
  );
};

export default Vitals;
