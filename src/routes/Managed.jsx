import Vitals from "../components/reusables/Vitals";
import Core from "../components/reusables/Core";
import {
  office_hero,
  office_title,
  office_text,
  office_text2,
  office_long1,
  office_long2,
  question_main,
  question_span,
  question_desc,
  Q_A,
  office_values,
  offices,
} from "../constants";
import Heading from "../components/Heading";

const Managed = () => {
  return (
    <>
      <div>
        <img src={office_hero} alt="office background" className="w-full" />
      </div>

      <Vitals
        title={office_title}
        text={office_text}
        belowText={office_text2}
        photoArray={offices}
        className="normal-pad pt-12 pb-24"
      />
      <Core
        className="pb-12"
        coreClassName="text-white bg-custom_blue rounded-full flex flex-col items-center justify-center w-32 md:w-44 aspect-square"
        mainText="benefits of"
        spanText="managed office space"
        mainClass="uppercase mainTitleClass font-normal"
        spanClass="uppercase mainTitleClass font-bold"
        descripition="Our values bind us together to make not just a company, but a family of thought and perseverance."
        descriptionClass="descriptionClass"
        cores={office_values}
        gap="gap-x-10"
      />

      <div className="normal-pad bg-custom_blue py-24">
        <div className="space-y-10 text-white">
          <p className="text-xl text-center">{office_long1}</p>
          <p className="text-xl text-center">{office_long2}</p>
        </div>
      </div>

      <div className="normal-pad py-16">
        <div>
          <Heading
            mainText={question_main}
            spanText={question_span}
            mainClass="mainTitleClass uppercase font-normal"
            spanClass="mainTitleClass uppercase font-bold"
            description={question_desc}
            descriptionClass="descriptionClass"
          />

          <div className="mt-24 grid grid-cols-1 md:grid-cols-2">
            <div>
              {Q_A.map((question, index, arr) => (
                <div
                  key={index}
                  className={`${index === 0 ? "pb-5" : "py-5"} ${
                    arr.length - 1 === arr.indexOf(question)
                      ? "border-b-0"
                      : "border-b-2"
                  }`}
                >
                  <h2
                    className={`text-xl ${
                      question.show && "text-custom_blue"
                    } hover:text-custom_blue cursor-pointer font-bold`}
                  >
                   {index + 1}. {question.question}
                  </h2>
                  {question.show && (
                    <div className="mt-3">
                      <p className="text-sm">{question.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Managed;
