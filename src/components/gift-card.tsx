import { Gift } from "../types/gift";

const GiftCard = ({ gift, onSelect }: { gift: Gift; onSelect: () => void }) => (
  <article
    onClick={() => onSelect()}
    className={`relative w-3/4 mx-auto bg-neutral text-white rounded-xl shadow-md overflow-hidden transition ${
      gift.purchased ? "opacity-40" : "hover:shadow-xl cursor-pointer"
    }`}
  >
    <picture className="w-full bg-white h-80 overflow-hidden flex items-center justify-center">
      <img src={gift.img} alt={gift.title} className="object-contain h-full" />
    </picture>

    <div className="p-4 text-base-100">
      <h3 className="text-xl font-bold mb-2">{gift.title}</h3>
    </div>
  </article>
);

export default GiftCard;
