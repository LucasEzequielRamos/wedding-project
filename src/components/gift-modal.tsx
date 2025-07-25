import { useState } from "react";
import { Gift } from "../types/gift";

const GiftModal = ({
  gift,
  copied,
  onCopy,
  onClose,
}: {
  gift: Gift;
  copied: boolean;
  onCopy: () => void;
  onClose: () => void;
}) => {
  const [showRequestAddress, setShowRequestAddress] = useState(false);
  const [form, setForm] = useState({ name: "", email: "" });
  const [showWhatsappLink, setShowWhatsappLink] = useState(false);

  const phoneNumber = "5491124849007";

  const handleGenerateWhatsapp = () => {
    if (!form.name.trim()) {
      alert("Por favor ingresá tu nombre y número.");
      return;
    }
    setShowWhatsappLink(true);
  };

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    `Hola! Soy ${form.name}, me gustaría comprar el regalo: ${gift.title}. ¿Me podés pasar la dirección para enviarlo?`
  )}`;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center text-black">
      <div className="bg-white rounded-xl p-6 relative w-full max-w-lg text-left shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-xl text-gray-500 hover:text-black"
        >
          ×
        </button>

        <h3 className="text-2xl font-bold mb-2">{gift.title}</h3>
        <p className="text-sm text-gray-700 mb-6">
          Tu presencia es lo más importante ❤️ Pero si querés colaborar con este
          regalo, podés hacerlo así:
        </p>

        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <p className="font-semibold ">1. Transferencia:</p>
          <p className="mb-2 text-sm">Con el monto que puedas hacerlo ❤</p>
          <button
            onClick={onCopy}
            className="bg-primary text-white py-2 px-4 rounded hover:bg-primary/90"
          >
            {copied ? "Alias copiado ✅" : "📋 Copiar alias"}
          </button>
          <p className="text-xs text-gray-500 mt-1">{gift.alias}</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <p className="font-semibold mb-2">2. Comprar el producto:</p>
          <a
            href={gift.link}
            target="_blank"
            className="text-info underline hover:text-info/80 text-sm"
          >
            🌐 Ver producto en tienda
          </a>

          {!showRequestAddress && !showWhatsappLink && (
            <button
              onClick={() => setShowRequestAddress(true)}
              className="block text-sm mt-4 underline text-gray-700 hover:text-black"
            >
              ✔️ Quiero comprar este regalo
            </button>
          )}

          {showRequestAddress && !showWhatsappLink && (
            <div className="mt-4">
              <p className="text-sm text-gray-600 mb-2">
                Dejanos tus datos y te mostramos un mensaje para enviarnos por
                WhatsApp:
              </p>
              <input
                type="text"
                placeholder="Tu nombre completo"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className="border border-gray-300 mt-2 px-3 py-2 rounded w-full"
              />
              <input
                type="tel"
                placeholder="Tu email (opcional)"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className="border border-gray-300 mt-2 px-3 py-2 rounded w-full"
              />
              <button
                onClick={handleGenerateWhatsapp}
                className="bg-black mt-3 w-full text-white py-2 px-4 rounded hover:bg-info/90"
              >
                Ir a WhatsApp
              </button>
            </div>
          )}

          {showWhatsappLink && (
            <a
              href={whatsappURL}
              target="_blank"
              className="block text-center mt-4 bg-green-500 text-white py-2 rounded hover:bg-green-600"
            >
              Enviar mensaje por WhatsApp 📲
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default GiftModal;
