const Footer = () => {
  return (
    <footer className="mx-9 mb-6">
      <picture>
        <img src="images/image_footer.webp" alt="" />
      </picture>
      <div className=" text-center mx-auto w-3/4 mt-6">
        <h3>
          ESTAMOS EMOCIONADOS POR VIVIR ESTE DIA JUNTO A VOS! <br /> <br /> NOS
          VEMOS!
        </h3>
      </div>
      <picture className="w-full flex justify-end">
        <img
          src="/icons/logo_yl.svg"
          alt="logo footer"
          className="w-20 md:w-36"
        />
      </picture>
    </footer>
  );
};

export default Footer;
