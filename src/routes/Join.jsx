import Section from "../sharedLayouts/Section";
import BigText from "../components/BigText";
import {
 heroMap,
 join_bg,
 join_text,
 join_title,
 joint_opening,
} from "../constants";
import Button from "../components/Button";
import Heading from "../components/Heading";

const Join = () => {
 return (
  <>
   <Section className="h-screen md:h-[32.62rem]">
    <div className="h-full md:flex md:h-full">

     <div className="flex-center w-full px-5  md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
      <BigText
       text="YEAH"
       className="-top-32 -right-40"
       textClass="text-custom_ash text-[14.627rem]"
      />
      <BigText
       text="8"
       className=" top-[289.8px] -left-6 -z-10"
       textClass="text-custom_ash text-[22.32rem]"
      />
      <BigText
       text="#"
       className="-top-[58px] -left-[31px] -z-10"
       textClass="text-[14rem]"
      />
      <div>
       <div className="">
        <Heading
         mainText={join_title}
         mainClass="text-gradient mainTitleClass font-sb"
         description={join_text}
         descriptionClass="descriptionClass"
        />
       </div>
      </div>
      <div className="hidden md:block absolute -right-28 top-[203.9px]">
       <img src={heroMap} alt="hero svg" />
      </div>
     </div>

     <div className="flex-center w-full md:w-1/2 md:h-full">
      <div>
       <img src={join_bg} alt="company award" />
      </div>
     </div>

    </div>
   </Section>

   <div className="py-20 bg-white">
    <div className="normal-pad">
     <h2 className="font-bold text-xl md:text-[2rem] text-center">
      CURRENT OPENINGS
     </h2>

     <div className="mt-5 flex flex-wrap justify-between">
      {joint_opening.map((opening, index) => (
       <div key={index} className="border-2 px-5 border-slate-400">
        <div className="border-b py-4">
         <h2 className="font-semibold text-[0.78rem]">{opening.title}</h2>
         <p className="text-slate-400 font-semibold text-[0.65rem]">
          {opening.location}
         </p>
         <div className="flex items-center space-x-4 mt-5">
          {opening.tags.map((tag, index) => (
           <div key={index} className="bg-slate-300 p-1">
            <p className="text-[0.65rem] font-semibold">{tag}</p>
           </div>
          ))}
         </div>
        </div>

        <div className="py-4">
         <p className="font-semibold text-slate-500 text-[0.64rem]">
          Job Description
         </p>
         <p className="font-semibold text-sm">{opening.description}</p>
         <ul>
          {opening.bullets.map((bullet, index) => (
           <p key={index} className="text-[0.64rem] font-normal">
            {bullet}
           </p>
          ))}
         </ul>
         <div>
          <Button className="text-custom_blue block p-2">
           <p>View More</p>
          </Button>
          <Button className="text-white bg-custom_blue p-2">
           <p>Apply Now</p>
          </Button>
         </div>
        </div>
       </div>
      ))}
     </div>
    </div>
   </div>
  </>
 );
};

export default Join;
