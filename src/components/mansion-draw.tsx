const MansionDraw = () => {
  return (
    <div className="w-full h-full flex items-center justify-center mb-9">
      <picture className="@container flex relative w-full justify-center">
        <img
          src="/icons/birds.svg"
          alt="pajaros ilustracion"
          className="@max-[410px]:left-10 md:w-10 w-5 absolute md:left-36 left-16 "
        />
        <img
          src="/icons/bush_1.svg"
          alt=""
          className="@max-[410px]:left-0 md:w-28 w-14 absolute md:left-10 left-3 bottom-0"
        />
        <img
          src="/icons/bush_2.svg"
          alt=""
          className=" @max-[410px]:left-13 md:w-14  w-7 absolute md:left-40 left-18 -bottom-2"
        />
        <img src="/images/mansion_draw.png" alt="" className="md:w-80 w-56" />
        <img
          src="/icons/bush_1.svg"
          alt=""
          className="@max-[410px]:right-5 md:w-28 w-14 absolute md:right-28 -bottom-2 right-11 "
        />
        <img
          src="/icons/bush_2.svg"
          alt=""
          className="@max-[410px]:-right-1 md:w-14 w-7 absolute md:right-14 -bottom-4  right-3"
        />
      </picture>
    </div>
  );
};

export default MansionDraw;
