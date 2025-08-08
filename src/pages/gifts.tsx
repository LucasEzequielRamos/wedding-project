import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";
import { Gift } from "../types/gift";
import GiftCard from "../components/gift-card";
import GiftModal from "../components/gift-modal";

const Gifts = () => {
  const [giftList, setGiftList] = useState<Gift[]>([]);
  const [selectedGift, setSelectedGift] = useState<Gift | null>(null);
  const [copiedAlias, setCopiedAlias] = useState<string | null>(null);

  useEffect(() => {
    const fetchGifts = async () => {
      const { data, error } = await supabase.from("Gifts").select("*");
      if (error) console.error("Error al cargar los regalos:", error.message);
      else setGiftList(data);
      console.log(data, error);
    };

    fetchGifts();
  }, []);

  const handleCopy = (alias: string) => {
    navigator.clipboard.writeText(alias);
    setCopiedAlias(alias);
    setTimeout(() => {
      setCopiedAlias(null);
      setSelectedGift(null);
    }, 3000);
  };

  return (
    <section className="mx-9 mb-21">
      <div className="text-center mb-20">
        <h2 className="mb-6">REGALOS</h2>
        <p className="text-xs mb-4">
          Te agradecemos nuevamente por tu gesto! <br /> Realmente nos ayuda un
          montón!
        </p>
        <p className="text-xs">
          A continuación vas a encontrar productos que nos hacen falta... <br />
          Según lo que hayas dispuesto en regalarnos podes comprar el producto
          en su pagina original o enviarnos el dinero equivalente a lo que hayas
          elegido.
          <br /> ¡Nosotros te lo facilitamos!
        </p>
      </div>
      <div className="grid gap-x-12 gap-y-5 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 bg-base-100 ">
        {giftList.map(gift => (
          <GiftCard
            key={gift.id}
            gift={gift}
            onSelect={() => setSelectedGift(gift)}
          />
        ))}
      </div>
    </section>
  );
};

export default Gifts;
