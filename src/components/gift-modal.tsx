import { useState } from "react";
import { Gift } from "../types/gift";

const GiftModal = ({
  gift,
  copied,
  onCopy,
  onClose,
  onPurchase,
}: {
  gift: Gift;
  copied: boolean;
  onCopy: () => void;
  onClose: () => void;
  onPurchase: (name: string, email: string) => Promise<void>;
}) => {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", email: "" });

  const confirm = () => {
    if (!form.name.trim() || !form.email.trim()) {
      alert("Por favor ingresá tu nombre y correo.");
      return;
    }
    alert("¡Gracias por tu regalo! ❤️");
    onPurchase(form.name, form.email);
  };

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center text-black">
      <div className="bg-white rounded-xl p-6 relative w-full max-w-lg text-center">
        <button onClick={onClose} className="absolute top-2 right-3 text-xl">
          ×
        </button>
        <h3 className="text-xl font-bold mb-4">{gift.title}</h3>
        <p className="mb-4">
          Gracias por querer colaborar. Podés transferir o comprar el producto.
        </p>
        <button
          onClick={onCopy}
          className="bg-primary text-white py-2 px-4 rounded"
        >
          {copied ? "Alias copiado ✅" : "Contribuir por alias"}
        </button>
        <a
          href={gift.link}
          target="_blank"
          className="block  mt-2 text-sm underline text-info text-center"
        >
          Ver producto en tienda
        </a>

        {!showForm ? (
          <button
            onClick={() => setShowForm(true)}
            className="text-sm underline mt-3"
          >
            Ya lo compré por mi cuenta
          </button>
        ) : (
          <>
            <input
              type="text"
              placeholder="Tu nombre"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              className="border mt-3 px-3 py-2 rounded w-full"
            />
            <input
              type="email"
              placeholder="Tu correo"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              className="border mt-2 px-3 py-2 rounded w-full"
            />
            <button
              onClick={confirm}
              className="bg-success mt-2 text-white py-2 px-4 rounded w-full"
            >
              Confirmar regalo
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default GiftModal;
