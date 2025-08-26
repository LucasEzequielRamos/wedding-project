import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "¿Pueden ir niños?",
    answer:
      "Nos encantaría que todos pudieran compartir esta noche especial, pero la celebración está pensada principalmente para adultos. Si se presenta alguna situación especial, no dudes en hablarnos y podremos coordinarlo juntos.",
  },
  {
    question: "¿Cómo es el dresscode?",
    answer:
      "El dresscode es ELEGANTE. En lo posible evitar la gama de los azules, gracias!",
  },
  {
    question: "¿Qué pasa si ya confirme asistencia y no puedo ir?",
    answer:
      "Si ya confirmaste asistencia y por algún motivo no podes venir, hacenoslo saber lo antes posible a través de Whatsapp!. Por favor, les pedimos consideración en los tiempos de aviso. Así podemos cederle la invitación a otra persona, gracias! ",
  },
  {
    question: "¿Se cancela si llueve?",
    answer:
      "No, no se cancela si llueve.  De haber cambios, nos comunicaremos con ustedes!",
  },
  {
    question: "Tengo más preguntas...",
    answer:
      "Para preguntas más especificas, podés mandarnos un mensaje a whatsapp",
  },
  {
    question: "",
    answer: "",
  },
];
const phoneNumber = import.meta.env.VITE_PHONE_NUMBER_FAQ;

const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  `Hola, tengo una consulta acerca del casamiento de Lucas y Jael`
)}`;

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="w-full max-w-2xl mx-auto text-xs divide-y divide-gray-300 ">
      {faqs.map((item, index) => (
        <div key={index} className={`${index == 5 && "hidden"}`}>
          <button
            onClick={() => toggle(index)}
            className="w-fit text-left py-3 px-1 font-semibold flex  items-center !bg-background !text-primary gap-1  !rounded-none"
          >
            <span className="text-2xl">·</span>
            <span className="w-fit">{item.question}</span>
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className={`w-4 h-4 transform transition-transform duration-100 ease-in ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 9l6 6 6-6"
                />
              </svg>
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-200 ease-in-out px-2 text-sm flex flex-col items-center  ${
              openIndex === index ? "max-h-40 py-2" : "max-h-0"
            }`}
          >
            <p className="text-[10px] ml-2">{item.answer}</p>
            {(openIndex == 4 || openIndex == 2) && (
              <a href={whatsappURL} target="_blank">
                <button className="px-5 py-1 mt-4">ENVIAR MENSAJE</button>
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
