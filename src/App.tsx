import "./App.css";
import Ceremony from "./sections/ceremony";
import GiftList from "./sections/gift-list";
import Header from "./sections/header";
import Hero from "./sections/hero";
import TestInsertGuest from "./sections/test-insertar-invitado";
import Location from "./sections/location";
import MansionDraw from "./components/mansion-draw";
import ConfirmAttendance from "./sections/confirm-attendance";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Ceremony />
      <MansionDraw />
      <Location />
      <ConfirmAttendance />
      <GiftList />
      <TestInsertGuest />
    </>
  );
}

export default App;
