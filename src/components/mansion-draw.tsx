const MansionDraw = () => {
  return (
    <div className="w-full h-full flex items-center justify-center mb-9">
      <picture className="flex relative w-full justify-center">
        <img
          src="/icons/birds.svg"
          alt="pajaros ilustracion"
          className="w-5 absolute left-16"
        />
        <img
          src="/icons/bush_1.svg"
          alt=""
          className="w-14 absolute left-3 bottom-0"
        />
        <img
          src="/icons/bush_2.svg"
          alt=""
          className="w-7 absolute left-18 -bottom-2"
        />
        <img src="/images/mansion_draw.png" alt="" className="w-56" />
        <img
          src="/icons/bush_1.svg"
          alt=""
          className="w-14 absolute -bottom-2 right-11 "
        />
        <img
          src="/icons/bush_2.svg"
          alt=""
          className="w-7 absolute -bottom-4  right-3"
        />
      </picture>
    </div>
  );
};

export default MansionDraw;
