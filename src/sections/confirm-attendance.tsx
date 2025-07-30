import React from "react";
import CustomSelect from "../components/custom-select";

const ConfirmAttendance = () => {
  return (
    <section className="mx-9 mb-21 bg-background ">
      <div className=" flex flex-col items-center w-full text-center">
        <h2 className="w-44 leading-7 mb-4">CONFIRMAR ASISTENCIA</h2>
        <div className="w-full">
          <form
            className="flex flex-col items-center [&>input]:h-7 [&>input]:w-full gap-2 [&>input]:rounded-full  "
            onSubmit={e => e.preventDefault()}
          >
            <CustomSelect />
            <input placeholder="Nombre y Apellido" type="text" />
            <input placeholder="Mail" type="text" />
            <button className="w-fit py-1.5 px-5 mt-4" type="button">
              CONFIRMAR
            </button>
          </form>
        </div>
        <p className="text-[8px] mt-6">
          POR FAVOR, CONFIRMAR ANTES DEL 01/11/25
        </p>
      </div>
    </section>
  );
};

export default ConfirmAttendance;
