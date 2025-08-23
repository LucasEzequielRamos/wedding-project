import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-background/40 text-xs flex justify-end items-center z-40 p-10 ">
      <div className="absolute left-[40%] top-7 -translate-x-1/2 -translate-y-1/2">
        <picture>
          <img
            src="/icons/logo_yl.svg "
            alt="Logo"
            className="w-[110px] h-auto"
          />
        </picture>
      </div>

      <div>
        <button
          className="md:hidden !bg-inherit fixed top-7 right-7"
          onClick={toggleMenu}
        >
          <img
            src="/icons/menu_hamb.png
          "
            alt="Menú"
            className="size-5"
          />
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-black/50 z-10 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      />

      <div
        className={`fixed top-0  h-screen w-3/4 bg-[#425D81] text-background p-6 pt-16 space-y-12 text-xl z-20 transform transition-all duration-500 ease-in-out 
        ${isOpen ? "right-0" : "-right-[100%]"}`}
      >
        {[
          "INICIO",
          "REGALOS",
          "CEREMONIA",
          "UBICACION",
          "CONFIRMAR ASISTENCIA",
          "TIMELINE",
          "PREGUNTAS FRECUENTES",
        ].map((item, idx) => (
          <li key={idx} className="list-none">
            <a
              href={item === "REGALOS" ? "/gifts" : `/#${item}`}
              onClick={handleLinkClick}
              className="hover:underline transition-colors duration-200"
            >
              {item}
            </a>
          </li>
        ))}
      </div>

      <button
        className={`md:hidden !bg-[#425D81] fixed top-7 right-7 z-30 transform transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      >
        <img
          src="/icons/close_white.svg"
          alt="Cerrar menú"
          className="size-6"
        />
      </button>
    </nav>
  );
};

export default Navbar;
