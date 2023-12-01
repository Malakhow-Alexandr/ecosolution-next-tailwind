import Image from "next/image";
import { teamBd } from "@/bd/teamBd";

const Team = () => {
  return (
    <section>
      <div className="custom-container">
        <ul className="flex flex-wrap justify-center gap-[24px] mx-auto">
          {teamBd.map((unit) => (
            <li
              key={unit.name}
              className="mobile:w-[45%] tablet:w-[22%] desktop:w-[23%]"
            >
              <Image
                src={unit.foto}
                alt={`this is ${unit.name}`}
                width={274}
                height={290}
                className="mb-[8px]"
              />
              <p className="text-[18px] leading-[-0.74px] text-mainText font-text mb-[2px]">
                {unit.name}
              </p>
              <p className="font-text text-[#828382] leading-[-0.64px] text-[16px]">
                {unit.position}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Team;
