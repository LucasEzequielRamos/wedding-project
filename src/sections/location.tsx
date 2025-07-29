import React from "react";

const Location = () => {
  return (
    <section className="mx-9 my-6 m-auto bg-background flex flex-col justify-center text-center">
      <div>
        <div>
          <h2>UBICACIÓN</h2>
          <h3>
            "Mansion del lago" <br /> La Reja
          </h3>
          <button>Como llegar</button>
          <p>Te llevamos con Google Maps!</p>
        </div>
        <div>{/* Carrousel */}</div>
      </div>
    </section>
  );
};

export default Location;
