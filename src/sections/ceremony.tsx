const Ceremony = () => {
  return (
    <section className="mx-9 my-6 m-auto bg-background flex flex-col justify-center text-center">
      <h2 className="mb-4">CEREMONIA</h2>

      <div className="flex h-full w-auto justify-between gap-2">
        <picture>
          <img
            src="/images/img_ceremony.png"
            alt="image_ceremony"
            className="h-fit w-full"
          />
        </picture>
        <div className="w-44 flex flex-col ">
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
