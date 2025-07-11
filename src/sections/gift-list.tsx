"use client";

import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";
import { Gift, PurchaseLog } from "../types/gift";
import GiftCard from "../components/gift-card";
import GiftModal from "../components/gift-modal";

const Giftlist = () => {
  const [giftList, setGiftList] = useState<Gift[]>([]);
  const [selectedGift, setSelectedGift] = useState<Gift | null>(null);
  const [copiedAlias, setCopiedAlias] = useState<string | null>(null);

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
    setCopiedAlias(alias);
    setTimeout(() => {
      setCopiedAlias(null);
      setSelectedGift(null);
    }, 3000);
  };

  const markAsPurchased = async (name: string, email: string) => {
    if (!selectedGift) return;
    console.log(selectedGift.id);

    const { error } = await supabase
      .from("Gifts")
      .update({ purchased: true })
      .eq("id", selectedGift.id);

    if (error) {
      alert("Error al registrar el regalo.");
      return;
    }

    // Optionally: log in another table
    await supabase.from("purchase_logs").insert({
      name,
      email,
      title: selectedGift.title,
      timestamp: new Date().toISOString(),
    });

    setGiftList(prev =>
      prev.map(g => (g.id === selectedGift.id ? { ...g, purchased: true } : g))
    );

    setSelectedGift(null);
  };

  return (
    <section className="bg-black py-12">
      <div className="bg-neutral text-base-100 p-6 rounded-2xl shadow-lg max-w-xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Regalos</h2>
        <p className="text-lg leading-relaxed">
          Lo más importante es tu presencia. Pero si querés hacernos un regalo,
          te dejamos algunas opciones.
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-6 bg-base-100">
        {giftList.map(gift => (
          <GiftCard
            key={gift.id}
            gift={gift}
            onSelect={() => setSelectedGift(gift)}
          />
        ))}
      </div>

      {selectedGift && (
        <GiftModal
          gift={selectedGift}
          copied={copiedAlias === selectedGift.alias}
          onCopy={() => handleCopy(selectedGift.alias)}
          onClose={() => setSelectedGift(null)}
          onPurchase={markAsPurchased}
        />
      )}
    </section>
  );
};

export default Giftlist;
