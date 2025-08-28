const Hero = () => {
  return (
    <section
      id="INICIO"
      className="mx-9 mb-14 m-auto md:mb-22  bg-background flex flex-col justify-center"
    >
      <div className="text-center mb-8">
        <h1 className="!text-xl md:!text-4xl lg:!text-5xl h-6 lg:mb-6 md:mb-3 mb-2 ">
          ¡NOS CASAMOS!
        </h1>
        <h3 className="text-xs ">BIENVENIDOS A NUESTRA BODA</h3>
      </div>

      <picture className="w-full h-[200px] md:min-h-[450px] lg:min-h-[600px]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto absolute left-0"
        >
          <source src="/videos/clip_wedding.mp4" type="video/mp4" />
        </video>
      </picture>
    </section>
  );
};

export default Hero;
