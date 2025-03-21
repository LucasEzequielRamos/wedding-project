import React from "react";

const Header = () => {
  return (
    <div className="relative w-full">
      <img
        src="images/header.png"
        alt="Header Image"
        className="w-full h-auto object-cover"
      />
      <div className="bg-accent rounded-b-full absolute w-fit top-0 right-11 text-black">
        <p className="text-6xl pt-6 pb-20 pr-16 pl-6 font-luxury">l</p>
        <p className="text-6xl absolute top-16 right-10 font-luxury">y</p>
      </div>
    </div>
  );
};

export default Header;
