const Location = () => {
  return (
    <section
      id="UBICACION"
      className="mx-9 mb-14 bg-background flex flex-col justify-center text-center"
    >
      <div className="flex flex-col justify-center items-center">
        <h2>UBICACIÓN</h2>
        <h3 className="mb-5">
          "Mansion del lago" <br /> La Reja
        </h3>
        <button className="text-lg py-2.5 px-6">
          <a
            href="https://maps.app.goo.gl/AAw2dNN5BeggvJdV8"
            target="_blank"
            rel="noopener noreferrer"
          >
            ¿COMO LLEGAR?
          </a>
        </button>
        <div className="w-1/2 flex flex-col h-fit mt-2">
          <picture className="w-full flex pl-10 md:pl-20 lg:pl-36">
            <img
              src="/icons/arrow.svg"
              alt="flecha curva hacia abajo"
              className="size-5 md:size-9 lg:size-12"
            />
          </picture>
          <p className="text-[10px] md:text-xs lg:text-sm w-24 md:w-36 lg:w-58 lg:pl-16">
            Te llevamos con Google Maps!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Location;
