const Hero = () => {
  return (
    <section
      id="INICIO"
      className="mx-9 mb-21 m-auto  bg-background flex flex-col justify-center"
    >
      <div className="text-center mb-8">
        <h2 className="!text-xl h-6">¡NOS CASAMOS!</h2>
        <h3 className="text-xs ">BIENVENIDOS A NUESTRA BODA</h3>
      </div>

      <div className="w-full h-[200px]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto absolute left-0"
        >
          <source src="/videos/clip_wedding.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default Hero;
