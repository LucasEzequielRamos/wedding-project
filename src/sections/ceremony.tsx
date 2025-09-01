const Ceremony = () => {
  return (
    <section
      id="CEREMONIA"
      className="mx-9 mb-21 bg-background flex flex-col justify-center text-center"
    >
      <h2 className="mb-4">CEREMONIA</h2>

      <div className="flex  w-auto justify-between gap-4">
        <picture className="relative max-w-[155px] h-[232px] md:max-w-[300px] md:h-auto lg:max-w-[370px] xl:max-w-[500px]">
          <img
            src="/icons/mark_images.svg"
            alt="marco para la imagen"
            className="w-6 absolute -top-1 -left-1 "
          />
          <img
            src="/images/image_2.webp"
            alt="image_ceremony"
            className="max-w-[155px] md:max-w-[300px] h-auto lg:max-w-[370px] xl:max-w-[500px]"
          />
          <img
            src="/icons/mark_images.svg"
            alt="marco para la imagen"
            className="w-6 absolute -bottom-2 -right-2 "
          />
        </picture>
        <div className=" flex flex-col lg:justify-center">
          <h3 className=" text-xs md:mb-10 mb-5">
            Creemos juntos que lo más importante es entregarle a Dios nuestra
            unión, por eso tendremos un tiempo para compartir este momento
            juntos y nos emociona que seas parte!{" "}
          </h3>
          <p className="md:text-xl lg:text-xl text-xs mb-2 lg:mb-6">
            23 . 11 . 25
            <br /> 17:30 HS
          </p>
          <p className="md:text-lg lg:text-xl text-[8px] flex h-full lg:h-auto items-end pb-2 justify-center">
            TENER EN CUENTA QUE LA CEREMONIA COMIENZA A LAS 18 HS PUNTUAL
          </p>
        </div>
      </div>
    </section>
  );
};

export default Ceremony;
