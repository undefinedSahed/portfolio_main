import React from "react";

export default function PageHeader({
  backgroundText,
  headOne,
  headTwo,
}: {
  backgroundText: string;
  headOne: string;
  headTwo: string;
}) {
  return (
    <section className="container">
      <div className="text-center lg:pb-10 pb-7">
        <div className="relative">
          <h2 className="text-[#ffffff12] lg:text-[112px] text-[65px] lg:tracking-[10px] font-extrabold uppercase">
            {backgroundText}
          </h2>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex lg:text-[56px] text-[35px] uppercase font-extrabold">
            <h3 className="text-white pr-[15px]">{headOne}</h3>
            <h4 className="text-[#ffb400]">{headTwo}</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
