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
    console.log("ola");
    setSelected(option);
    setIsOpen(false);
    confirm(option.toLowerCase().includes("no") ? options[1] : options[0]);
  };

  const options = ["SI, VOY!", "NO VOY..."];

  return (
    <div className="relative w-full mx-auto text-xs font-semibold tracking-wide">
      <button
        onClick={toggleOpen}
        className={`w-full flex justify-between items-center px-4 py-1.5 border border-primary rounded-full
        ${
          isOpen
            ? "!bg-primary !text-background"
            : "!text-primary !bg-background"
        }`}
      >
        {selected || "TE VEMOS?"}
        <span className="ml-2">{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-2 space-y-2 z-10 bg-background">
          {options.map(option => (
            <button
              type="button"
              key={option}
              onClick={() => handleSelect(option)}
              className="w-full h-7 !bg-background !text-primary border border-primary rounded-full py-1 hover:bg-primary hover:text-background transition"
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
