import { Link } from "react-router-dom";

const ToGifts = () => {
  return (
    <section className="mx-9 mb-14 text-center">
      <h2 className="mb-7">¿QUERÉS HACERNOS UN REGALO?</h2>
      <p className="text-xs mb-6">
        Agradecemos enormemente tu gesto! Apretando el botón podrás acceder a
        nuestra lista de regalos...
      </p>
      <Link
        className="px-8 py-2  bg-primary text-background rounded-full"
        to={"/gifts"}
      >
        HACER REGALO
      </Link>
    </section>
  );
};

export default ToGifts;
