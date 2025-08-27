import { Outlet } from "react-router-dom";
import Header from "../sections/header";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="w-full">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
