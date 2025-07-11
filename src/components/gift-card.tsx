import { Gift } from "../types/gift";

const GiftCard = ({ gift, onSelect }: { gift: Gift; onSelect: () => void }) => (
  <article
    onClick={() => !gift.purchased && onSelect()}
    className={`relative w-3/4 mx-auto bg-neutral text-white rounded-xl shadow-md overflow-hidden transition ${
      gift.purchased ? "opacity-40" : "hover:shadow-xl cursor-pointer"
    }`}
  >
    <picture className="w-full flex justify-center bg-white h-80 overflow-hidden">
      <img src={gift.img} alt={gift.title} className="object-cover" />
    </picture>
    <div className="p-4 text-base-100">
      <h3 className="text-xl font-bold mb-2">{gift.title}</h3>
      <p className="text-sm">{gift.description}</p>
    </div>
    {gift.purchased && (
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white font-bold text-2xl">
        Ya fue regalado ❤
      </div>
    )}
  </article>
);

export default GiftCard;
