const Ceremony = () => {
  return (
    <section
      id="CEREMONIA"
      className="mx-9 mb-21 bg-background flex flex-col justify-center text-center"
    >
      <h2 className="mb-4">CEREMONIA</h2>

      <div className="flex  w-auto justify-between gap-4">
        <picture className="relative max-w-[155px]">
          <img
            src="/icons/mark_images.svg"
            alt="marco para la imagen"
            className="w-6 absolute -top-1 -left-1 "
          />
          <img
            src="/images/image_2.webp"
            alt="image_ceremony"
            className="max-w-[155px] h-auto"
          />
          <img
            src="/icons/mark_images.svg"
            alt="marco para la imagen"
            className="w-6 absolute -bottom-2 -right-2 "
          />
        </picture>
        <div className=" flex flex-col ">
          <h3 className="text-xs mb-5">
            Creemos juntos que lo más importante es entregarle a Dios nuestra
            unión, por eso tendremos un tiempo para compartir este momento
            juntos y nos emociona que seas parte!{" "}
          </h3>
          <p className="text-xs">
            23 . 11 . 25
            <br /> 17:30 HS
          </p>
          <p className="text-[8px] flex h-full items-end pb-2">
            TENER EN CUENTA QUE LA CEREMONIA COMIENZA A LAS 18 HS PUNTUAL
          </p>
        </div>
      </div>
    </section>
  );
};

export default Ceremony;
