import { useState } from "react";
type CustomSelectProps = {
  confirm: (value: string | null) => void;
};

const CustomSelect = ({ confirm }: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const toggleOpen = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
    confirm(option.toLowerCase().includes("no") ? options[1] : options[0]);
  };

  const options = ["Si, voy!", "No voy..."];

  return (
    <div className="relative w-full mx-auto text-xs md:text-xl tracking-wide">
      <button
        onClick={toggleOpen}
        className={`w-full flex justify-between items-center px-4 py-1.5 border border-primary rounded-full text-[16px] font-bold  md:h-10 md:text-xl
        ${
          isOpen
            ? "!bg-primary !text-background"
            : "!text-primary !bg-background"
        }`}
      >
        {selected || "Te vemos?"}
        <span className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`w-4 h-4   ${isOpen ? "rotate-180" : "rotate-0"}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 9l6 6 6-6"
            />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-2 space-y-2 z-10 bg-background">
          {options.map(option => (
            <button
              type="button"
              key={option}
              onClick={() => handleSelect(option)}
              className="w-full h-7 md:h-10 !bg-background !text-primary border border-primary rounded-full py-1 hover:bg-primary hover:text-background transition"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
