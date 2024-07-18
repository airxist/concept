import FormRow from "../FormRow";
import Button from "../Button";

const WorkSpaceForm = () => {
  return (
    <div>
      <div className="md:absolute left-0 z-10 m-auto md:-mt-10 w-full">
        <form className="min-h-36 bg-custom_pink max-w-[67rem] m-auto py-6 px-9 ">
          <p className="font-normal text-white text-center md:text-left text-[1.08rem]">
            Meet India's number one workspace provider
          </p>
          <div className="mt-5 flex flex-col md:flex-row items-center space-y-3 md:space-x-3 md:space-y-0">
            <div className="grid md:grid-cols-7 gap-x-3 w-full md:w-10/12">
              <FormRow
                type="text"
                name="fullname"
                placeholder="Enter Your Name"
              />
              <FormRow
                type="tel"
                name="telephone"
                placeholder="Enter your Mobile Number"
              />
              <FormRow
                type="email"
                name="email"
                placeholder="Enter your Email ID"
              />
              <FormRow type="email" name="city" placeholder="City" city />
            </div>
            <div className="w-full md:w-2/12">
              <Button className="bg-custom_blue text-white px-5 py-2.5 text-[0.8rem] font-normal w-full h-full">
                Request for Callback
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WorkSpaceForm;
