import { Link } from "react-router-dom";

const ToGifts = () => {
  return (
    <section className="mx-9 md:mx-14 lg:mx-24 mb-14 text-center">
      <h2 className="mb-7">¿QUERÉS HACERNOS UN REGALO?</h2>
      <p className="text-xs md:text-lg lg:text-xl mb-6">
        Agradecemos enormemente tu gesto! Apretando el botón podrás acceder a
        nuestra lista de regalos...
      </p>
      <Link
        className="px-8 py-2 md:text-xl  bg-primary text-background rounded-full"
        to={"/gifts"}
      >
        HACER REGALO
      </Link>
    </section>
  );
};

export default ToGifts;
