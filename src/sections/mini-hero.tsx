const MiniHero = () => {
  return (
    <section
      className="w-full flex justify-center items-center py-16 mb-21"
      style={{
        backgroundImage: "url(/icons/background_stripes.svg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <picture>
        <img src="/images/image_1.webp" alt="Mini hero" className="w-[300px]" />
      </picture>
    </section>
  );
};

export default MiniHero;
