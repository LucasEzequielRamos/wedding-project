import { Gift } from "../types/gift";

const GiftCard = ({ gift, onSelect }: { gift: Gift; onSelect: () => void }) => (
  <article
    onClick={() => onSelect()}
    className="relative w-full mx-auto bg-neutral flex flex-col rounded-xl shadow-md overflow-hidden transition hover:shadow-xl cursor-pointer border-2 border-primary/60 py-5"
  >
    <picture className="w-full bg-white size-[100px] overflow-hidden flex items-center justify-center ">
      <img
        src={gift.img}
        alt={gift.title}
        className="object-contain h-full w-[100px]"
      />
    </picture>

    <div className="p-4 text-[10px] min-h-28 flex flex-col justify-around">
      <h4 className="mb-1 w-full ">
        {gift.title.split(" ").slice(0, 3).join(" ")}
      </h4>
      <p>$10.000</p>

      <a className="text-[8px] underline  ">Link del articulo</a>
    </div>

    <div className="text-[10px] flex justify-around ">
      <button className="px-1 !font-light">COMPRAR</button>
      <button className="px-1 !font-light">APORTAR</button>
    </div>
  </article>
);

export default GiftCard;
