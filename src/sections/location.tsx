import React from "react";

const Location = () => {
  return (
    <section className="mx-9 mb-21 bg-background flex flex-col justify-center text-center">
      <div className="flex flex-col justify-center items-center">
        <h2>UBICACIÓN</h2>
        <h3 className="mb-5">
          "Mansion del lago" <br /> La Reja
        </h3>
        <button className="text-lg py-2.5 px-6">¿COMO LLEGAR?</button>
        <div className="w-1/2 flex flex-col h-fit mt-2">
          <img
            src="/images/arrow_location.png"
            alt=""
            className="size-fit pl-10"
          />
          <p className="text-[8px] w-18">Te llevamos con Google Maps!</p>
        </div>
      </div>
    </section>
  );
};

export default Location;
