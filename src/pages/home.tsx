import "../App.css";
import Ceremony from "../sections/ceremony";
import Hero from "../sections/hero";
import Location from "../sections/location";
import MansionDraw from "../components/mansion-draw";
import ConfirmAttendance from "../sections/confirm-attendance";
import Timeline from "../sections/timeline";
import Faq from "../sections/faq";
import Footer from "../sections/footer";
import MiniHero from "../sections/mini-hero";
import ToGifts from "../components/to-gifts";

function Home() {
  return (
    <>
      <Hero />
      <Ceremony />
      <ToGifts />
      <MansionDraw />
      <Location />
      <ConfirmAttendance />
      <MiniHero />
      <Timeline />
      <Faq />
      <Footer />
    </>
  );
}

export default Home;
