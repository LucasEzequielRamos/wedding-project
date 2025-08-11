import { Gift } from "../types/gift";

const GiftCard = ({ gift, buy, open }: { gift: Gift; buy: any; open: any }) => {
  return (
    <article className="relative w-full mx-auto bg-neutral flex flex-col rounded-xl shadow-md overflow-hidden transition hover:shadow-xl cursor-pointer border-2 border-primary/60 py-5 h-[220px]">
      <picture className="w-full bg-white flex items-center justify-center">
        <img
          src={gift.img}
          alt={gift.title}
          className="object-contain h-[100px] w-[100px] "
        />
      </picture>

      <div className="px-4 text-[10px] min-h-16 flex flex-col justify-around mb-2">
        <h4 className=" w-full ">
          {gift.title.split(" ").slice(0, 3).join(" ")}
        </h4>
        <p>$10.000</p>

        <a className="text-[8px] underline  ">Link del articulo</a>
      </div>

      <div className="text-[10px] flex justify-around ">
        <button
          onClick={() => {
            buy(true);
            open(true);
          }}
          className="px-1 !font-light"
        >
          COMPRAR
        </button>
        <button
          onClick={() => {
            buy(false);
            open(true);
          }}
          className="px-1 !font-light"
        >
          APORTAR
        </button>
      </div>
    </article>
  );
};

export default GiftCard;
