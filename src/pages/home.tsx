import "../App.css";
import Ceremony from "../sections/ceremony";
// import GiftList from "../sections/gift-list";
import Hero from "../sections/hero";
// import TestInsertGuest from "../sections/test-insertar-invitado";
import Location from "../sections/location";
import MansionDraw from "../components/mansion-draw";
import ConfirmAttendance from "../sections/confirm-attendance";
import Timeline from "../sections/timeline";
import Faq from "../sections/faq";
import Footer from "../sections/footer";
import MiniHero from "../sections/mini-hero";

function Home() {
  return (
    <>
      <Hero />
      <Ceremony />
      <MansionDraw />
      <Location />
      <ConfirmAttendance />
      <MiniHero />
      <Timeline />
      <Faq />
      <Footer />
      {/* <GiftList /> */}
      {/* <TestInsertGuest /> */}
    </>
  );
}

export default Home;
