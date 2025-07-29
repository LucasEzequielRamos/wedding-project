import "./App.css";
import Ceremony from "./sections/ceremony";
import GiftList from "./sections/gift-list";
import Header from "./sections/header";
import Hero from "./sections/hero";
import TestInsertGuest from "./sections/test-insertar-invitado";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Ceremony />
      <GiftList />
      <TestInsertGuest />
    </>
  );
}

export default App;
