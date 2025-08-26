import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";
import { Gift } from "../types/gift";
import GiftCard from "../components/gift-card";
import GiftModal from "../components/gift-modal";
import { toast, Toaster } from "sonner";

const Gifts = () => {
  const [giftList, setGiftList] = useState<Gift[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [buyAction, setBuyAction] = useState<boolean>(false);

  useEffect(() => {
    const fetchGifts = async () => {
      const { data, error } = await supabase.from("Gifts").select("*");
      if (error) console.error("Error al cargar los regalos:", error.message);
      else setGiftList(data);
    };

    fetchGifts();
  }, []);

  const handleCopy = (alias: string) => {
    navigator.clipboard.writeText(alias);
    toast.success("Copiado en el portapapeles");
    setTimeout(() => {
      setOpenModal(false);
    }, 500);
  };

  return (
    <section id="REGALOS" className="mx-9 mb-21 anchor">
      <Toaster position="bottom-right" duration={2300} />
      <div className="text-center mb-14">
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
      <div className="grid gap-x-8 gap-y-5 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 bg-base-100 ">
        {giftList.map(gift => (
          <GiftCard
            key={gift.id}
            gift={gift}
            open={setOpenModal}
            buy={setBuyAction}
          />
        ))}
      </div>

      {openModal && (
        <GiftModal
          onCopy={handleCopy}
          onClose={() => setOpenModal(false)}
          buy={buyAction}
        />
      )}
    </section>
  );
};

export default Gifts;
