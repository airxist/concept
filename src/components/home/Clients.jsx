import { clients } from "../../constants";
import Section from "../../sharedLayouts/Section";
import Heading from "../Heading";

const Clients = () => {
  return (
    <Section className="py-24">
      <div className="normal-pad">
        <div>
          <Heading mainText="SOME WORDS FROM" spanText="OUR CLIENTS" />
          <div className="md:flex space-x-9 mt-12">
            {clients.map((client) => {
              return (
                <div
                  key={client.name}
                  className=" rounded-br-[5rem] max-w-[31.95rem] h-[15.33rem] grid grid-cols-3 space-x-6 relative overflow-hidden"
                >
                  <div className="col-span-1 flex items-end">
                    <img src={client.image} alt={client.name} />
                  </div>
                  <div className="col-span-2 pt-7 pr-5">
                    <h5 className="text-xl font-bold">{client.title}</h5>
                    <p className="text-[0.81rem] font-normal">
                      {client.comment}
                    </p>
                    <div className="mt-4">
                      <h6 className="font-bold text-[0.81rem] capitalize">
                        {client.name}
                      </h6>
                      <p className="font-light text-[0.81rem]">{client.role}</p>
                    </div>
                  </div>
                  {/* The ellipse */}
                  <div className="absolute bottom-0 right-0">
                    <img src={client.ellipse} alt="ellipse" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Clients;
