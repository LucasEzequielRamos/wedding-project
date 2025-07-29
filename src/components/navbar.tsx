import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <nav className="bg-background my-6 mx-2 text-xs flex justify-between items-center relative">
      <div className="flex text-primary max-w-22 font-semibold">
        <button className="py-1 px-3 rounded-[100px] border leading-3 tracking-wide">
          Confirma Asistencia
        </button>
      </div>

      <div className="absolute left-[40%] top-[45%]-translate-x-1/2 -translate-y-1/2">
        <picture>
          <img
            src="/images/Y&L_top.png"
            alt="Logo"
            className=" w-[110px] h-auto " // o ajustá según tu imagen
          />
        </picture>
      </div>

      <div>
        <button className="md:hidden" onClick={toggleMenu}>
          <img
            src={isOpen ? "/icons/close.svg" : "/icons/menu_hamb.svg"}
            alt="Menú"
            className="size-5"
          />
        </button>
      </div>

      {/* Menú desplegable */}
      {isOpen && (
        <ul className="md:hidden absolute top-full right-0 mt-2 bg-white text-black p-4 rounded shadow space-y-2">
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Proyectos</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
