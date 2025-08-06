import React from "react";
import Accordion from "../components/accordion";

const Faq = () => {
  return (
    <section className="mx-9 mb-21 bg-background">
      <h2 className="w-44 leading-7 mb-4 text-center  mx-auto">
        PREGUNTAS FRECUENTES
      </h2>
      <Accordion />
    </section>
  );
};

export default Faq;
