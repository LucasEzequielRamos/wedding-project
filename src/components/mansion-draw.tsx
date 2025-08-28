const MansionDraw = () => {
  return (
    <div className="w-full h-full flex items-center justify-center mb-9 lg:mb-16">
      <picture className="@container flex relative w-full justify-center">
        <img
          src="/icons/birds.svg"
          alt="pajaros ilustracion"
          className="@max-[410px]:left-10 lg:w-16 md:w-10 w-5 absolute lg:left-60 md:left-36 left-16 "
        />
        <img
          src="/icons/bush_1.svg"
          alt=""
          className="@max-[410px]:left-0 lg:w-36 md:w-28 w-14 absolute md:left-10 left-3 bottom-0"
        />
        <img
          src="/icons/bush_2.svg"
          alt=""
          className=" @max-[410px]:left-13 lg:w-20 md:w-14  w-7 absolute lg:left-52 md:left-40 left-18 -bottom-2"
        />
        <img
          src="/images/mansion_draw.png"
          alt=""
          className=" w-56 md:w-80 lg:w-96"
        />
        <img
          src="/icons/bush_1.svg"
          alt=""
          className="@max-[410px]:right-5 lg:w-36 md:w-28 w-14 absolute lg:right-42 md:right-28 -bottom-2 right-11 "
        />
        <img
          src="/icons/bush_2.svg"
          alt=""
          className="@max-[410px]:-right-1 lg:w-20 md:w-14 w-7 absolute md:right-14 -bottom-4  right-3"
        />
      </picture>
    </div>
  );
};

export default MansionDraw;
