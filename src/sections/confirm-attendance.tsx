import { useState } from "react";
import CustomSelect from "../components/custom-select";
import { addGuest } from "../lib/add-guest";
import { Toaster, toast } from "sonner";

const ConfirmAttendance = () => {
  const [fullName, setFullName] = useState("");
  const [tel, setTel] = useState("");
  const [confirmed, setConfirmed] = useState<string | null>(null);

  async function handleSubmit(e: any) {
    e.preventDefault();

    if (!fullName || !tel || !confirmed || confirmed === "Te vemos?") {
      toast.warning("Por favor completá todos los campos");
      return;
    }

    const res = await addGuest(fullName, tel, confirmed);
    if (!res) {
      toast.warning(
        <>
          No se encontró tu nombre en la lista, verificá si es correcto:
          <br />
          <br />
          Nombre: Primer nombre
          <br />
          Apellido: De casado o de soltero
        </>
      );
    } else {
      toast.success("Confirmacion enviada. Muchas gracias!");
      setFullName("");
      setConfirmed(null);
    }
  }

  return (
    <section id="CONFIRMAR ASISTENCIA" className="mx-9 mb-21 bg-background ">
      <Toaster position="bottom-right" duration={3500} />
      <div className=" flex flex-col items-center w-full text-center">
        <h2 className=" leading-7 mb-4">
          CONFIRMAR <br /> ASISTENCIA
        </h2>
        <div className="w-full max-w-[400px]">
          <form
            className="flex flex-col items-center  [&>input]:h-7 [&>input]:w-full gap-2 [&>input]:rounded-full [&>input]:text-base  [&>input]:md:h-10"
            onSubmit={handleSubmit}
          >
            <CustomSelect confirm={setConfirmed} confirmed={confirmed} />
            <input
              placeholder="Nombre y Apellido"
              type="text"
              value={fullName}
              onChange={e => setFullName(e.target.value)}
            />
            <input
              placeholder="Numero de celular"
              type="tel"
              value={tel}
              onChange={e => setTel(e.target.value)}
            />
            <button
              className="w-fit py-1.5 px-5 mt-4 md:text-lg "
              type="submit"
            >
              CONFIRMAR
            </button>
          </form>
        </div>
        <p className="text-[10px] md:text-xs lg:text-sm mt-6">
          POR FAVOR, CONFIRMAR ANTES DEL 24/10/25
        </p>
      </div>
    </section>
  );
};

export default ConfirmAttendance;
