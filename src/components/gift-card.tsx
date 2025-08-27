import { Gift } from "../types/gift";

const GiftCard = ({ gift, buy, open }: { gift: Gift; buy: any; open: any }) => {
  return (
    <article className=" relative w-full mx-auto bg-neutral flex flex-col rounded-xl shadow-md overflow-hidden transition hover:shadow-xl cursor-pointer border-2 border-primary/60 py-5 h-[220px] md:h-[270px]">
      <picture className="w-full !bg-inherit flex items-center justify-center">
        <img
          src={gift.img}
          alt={gift.title}
          className="object-contain size-[100px] md:size-[140px]"
        />
      </picture>

      <div className="px-4 text-[10px] md:text-sm min-h-16 flex flex-col justify-around mb-2">
        <h4 className=" w-full ">
          {gift.title.split(" ").slice(0, 3).join(" ")}
        </h4>

        <a
          href={gift.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[8px] underline  md:text-xs"
        >
          Link del articulo
        </a>
      </div>

      <div className="text-[9px] md:text-xs flex justify-around ">
        <button
          onClick={() => {
            buy(true);
            open(true);
          }}
          className="px-1.5 py-0.5 md:px-2.5 md:py-1 !font-light"
        >
          COMPRAR
        </button>
        <button
          onClick={() => {
            buy(false);
            open(true);
          }}
          className="px-1.5 py-0.5 md:px-2.5 md:py-1 !font-light"
        >
          APORTAR
        </button>
      </div>
    </article>
  );
};

export default GiftCard;
