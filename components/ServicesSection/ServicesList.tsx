import { servicesBd } from "@/bd/servicesBd";

const ServicesList = () => {
  return (
    <div className="relative flex items-center justify-center max-w-[342px] mx-auto">
      <p
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] \
        font-title font-[500] \
        text-center text-[124px] tracking-[-9.92px] \ 
       text-[#173d33] text-opacity-[0.03] "
      >
        ENERGY
      </p>
      <ul className="flex flex-col gap-[16px] ">
        {servicesBd.map((service) => (
          <li key={service.title}>
            <p className="font-text text-[20px] text-mainText">
              {service.title}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesList;
