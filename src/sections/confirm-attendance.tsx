import { useState } from "react";
import CustomSelect from "../components/custom-select";
import { addGuest } from "../lib/add-guest";
import { Toaster, toast } from "sonner";

const ConfirmAttendance = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmed, setConfirmed] = useState<string | null>(null);

  async function handleSubmit(e: any) {
    e.preventDefault();

    if (!fullName || !email || !confirmed || confirmed === "TE VEMOS?") {
      toast.warning("Por favor completá todos los campos");
      return;
    }

    const res = await addGuest(fullName, email, confirmed);
    !res
      ? toast.warning(
          "No se encontro tu nombre en la lista, verifica por favor si es correcto: (Nombre Apellido)"
        )
      : toast.success("Confirmacion enviada. Muchas gracias!");
    setFullName("");
    setEmail("");
    setConfirmed(null);
  }

  return (
    <section id="CONFIRMAR ASISTENCIA" className="mx-9 mb-21 bg-background ">
      <Toaster position="bottom-right" duration={2300} />
      <div className=" flex flex-col items-center w-full text-center">
        <h2 className="w-44 leading-7 mb-4">CONFIRMAR ASISTENCIA</h2>
        <div className="w-full">
          <form
            className="flex flex-col items-center [&>input]:h-7 [&>input]:w-full gap-2 [&>input]:rounded-full [&>input]:text-base "
            onSubmit={handleSubmit}
          >
            <CustomSelect confirm={setConfirmed} />
            <input
              placeholder="Nombre y Apellido"
              type="text"
              value={fullName}
              onChange={e => setFullName(e.target.value)}
            />
            <input
              placeholder="Email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <button className="w-fit py-1.5 px-5 mt-4" type="submit">
              CONFIRMAR
            </button>
          </form>
        </div>
        <p className="text-[8px] mt-6">
          POR FAVOR, CONFIRMAR ANTES DEL 24/10/25
        </p>
      </div>
    </section>
  );
};

export default ConfirmAttendance;
