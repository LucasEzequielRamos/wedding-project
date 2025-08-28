const MiniHero = () => {
  return (
    <section
      className="relative w-full flex justify-center items-center pt-16 pb-24 lg:pb-32 mb-21"
      style={{
        backgroundImage: "url(/icons/background_stripes.svg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <picture>
        <img
          src="/images/image_1.webp"
          alt="Mini hero"
          className="w-[300px] md:w-[500px] lg:w-[600px]"
        />
      </picture>
      <picture>
        <img
          src="/images/todo_tiempo.png"
          alt="texto ilustrado"
          className="absolute w-48 md:w-64 lg:w-72 right-1 bottom-6 transform -rotate-6"
        />
      </picture>
    </section>
  );
};

export default MiniHero;
